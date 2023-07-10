import './index.css'
import Header from '../common/header'
import {contenthome, assurance_auto, habitation} from '../../assets/images'

const Home = () => {
    return (
        <div className="home-container">
            {/* <header>
               <img src={logo} className='logo' />
            </header> */}
            <Header/>
            <div>
                <img src={contenthome} className='content-home' />
                <h2 className='content-text'>compose your insurance online</h2>

                <div className="controls">
                    <img src={assurance_auto} className='home-btn'/>
                    <img src={habitation} className='home-btn'/>
                </div>
            </div>
        </div>
    )
}
export default Home;