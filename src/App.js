import { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css';
import data from './data/data.json'
import Card from './components/Card'
import avatar from './assets/images/image-jeremy.png'

function App() {
  const [loading, setLoading] = useState(false)
  const [initialUserData, setInitialUserData] = useState([])
  const [selectedUserData, setSelectedUserData] = useState([])
  const [selectedButton, setSelectedButton] = useState('daily')
  const time = useMemo(() => ['Daily', 'Weekly', 'Monthly'], [])

  const filterUserData = useCallback((userData, selectedButton) => {
    const data = userData.map(({ title, timeframes }) => ({ title: title, timeframe: timeframes[selectedButton] }))
    setSelectedUserData(() => [...data])
}, [])


  useEffect(() => {
    setLoading(true)
      const userData = JSON.parse(JSON.stringify(data))
      if (userData.length !== 0) {
        setInitialUserData(userData)
        setSelectedUserData(userData.map(({ title, timeframes }) => ({ title: title, timeframe: timeframes[selectedButton] })))
        setLoading(false)
      }
  },[])


  const handleClickTime = useCallback((event) => {
      setSelectedButton(event.target.id)
      console.log(event.target.id)
      filterUserData(initialUserData, event.target.id)
  }, [initialUserData, filterUserData])

  console.log('sssss', selectedUserData)
  console.log('iiii', initialUserData)

  return !loading && (
    <div className="App">
      <div className="first-card-wrapper">
        <div className="avatar-wrapper">
          <img src={avatar} alt="avatar" className="avatar"/>
          <div>
            <h6 className="text">Report for</h6>
            <h1 className="user-name">Jeremy Robson</h1>
          </div>
        </div>
        <div className="buttons-wrapper">
          {
            time.map((item, index) => (
              <button
                onClick={handleClickTime}
                className="button"
                key={item + index++}
                id={item.toLocaleLowerCase()}
                disabled={item.toLocaleLowerCase() === selectedButton}
                style={{ color: item.toLocaleLowerCase() === selectedButton && '#FFFF' }}
              >
                  {item}
              </button>
            ))
          }
        </div>
      </div>
        {
          selectedUserData.map((item) => (
            <Card key={item.title} {...item} selectedButton={selectedButton}/>
          ))
        }
    </div>
  );
}

export default App;
