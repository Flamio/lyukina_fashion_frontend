import ScrollIcon from './img/scroll-down.svg'
import './MobileScroll.css'
import animateScroll from 'react-scroll/modules/mixins/animate-scroll'

export const MobileScroll = () => {
    return (
        <div className='mobile-scroll' onClick={() => animateScroll.scrollMore(800)}>
            <img src={ScrollIcon} alt=''/>
        </div>
    )
}