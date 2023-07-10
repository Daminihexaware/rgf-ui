import './index.css'
import {logo} from '../../../assets/images'

const Header = () => {
    return (
        <div className="home-container">
            <header>
               <img src={logo} className='header-logo' />
            </header>
            <div>
            </div>
        </div>
    )
}
export default Header;