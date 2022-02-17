import './CardHeader.css'
import { iconNames } from "../../constants/globals"
import IconWork from "../../assets/images/IconWork"
import IconExercise from "../../assets/images/IconExercise"
import IconSelfCare from "../../assets/images/IconSelfCare"
import IconSocial from "../../assets/images/IconSocial"
import IconStudy from "../../assets/images/IconStudy"
import IconPlay from "../../assets/images/IconPlay"

const CardHeader = ({ title, children }) => {

    const renderProperIcon = (title) => {
        
        switch (title.toLowerCase()) {
            case iconNames.WORK:
                return (
                    <div className="card-header" style={{ background: '#FF8B64' }}>
                        <span className="icon"><IconWork /></span>
                        {children}
                    </div>
                )
            case iconNames.EXERCISE:
                return (
                    <div className="card-header" style={{ background: '#4BCF82' }}>
                        <span className="icon"><IconExercise /></span>
                        {children}
                    </div>
                )
            case iconNames.SOCIAL:
                return (
                    <div className="card-header" style={{ background: '#7335D2' }}>
                        <span className="icon"><IconSocial /></span>
                        {children}
                    </div>
                )
            case iconNames.STUDY:
                return (
                    <div className="card-header" style={{ background: '#FF5E7D' }}>
                        <span className="icon"><IconStudy /></span>
                        {children}
                    </div>
                )
            case iconNames.SELF_CARE:
                return (
                    <div className="card-header" style={{ background: '#F1C75B' }}>
                        <span className="icon"><IconSelfCare /></span>
                        {children}
                    </div>
                )
            case iconNames.PLAY:
                return (
                    <div className="card-header" style={{ background: '#55C2E6' }}>
                        <span className="icon"><IconPlay /></span>
                        {children}
                    </div>
                )
            default:
                return <></>
        }
    }

    return renderProperIcon(title, children)
}

export default CardHeader