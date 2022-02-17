import './Card.css'
import IconEllipsis from '../assets/images/IconEllipsis';
import CardHeader from './CardHeader/CardHeader';

const Card = ({title, timeframe, selectedButton}) => {
    console.log(timeframe)
    const handleSelectedText = (selectedButton) => {
        switch(selectedButton) {
            case 'daily': 
                return 'Yesterday'
            case 'monthly':
                return 'Last Month'
            case 'weekly':
                return 'Last Week'
            default:
                return ''
        }
    }

    return (
        <>
            <CardHeader title={title}>
            <div className="card-body">
                <div className="card-title">
                <h3>{title}</h3>
            <span><IconEllipsis /></span>
                </div>
            <div className="card-content">
                <h1>{timeframe.current}hrs</h1>
                <p>{`${handleSelectedText(selectedButton)} - ${timeframe.previous}hrs`}</p>
            </div>
            </div>
            </CardHeader>
            
        </>
    )
}

export default Card;