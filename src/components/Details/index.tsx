import './index.css'
import Header from '../common/header'
import { Vehicle_Details } from './../../constants';
import moment from "moment";

const Details = () => {
    let FormatToday = moment(new Date()).format("MM-YYYY");
    return (
        <div>
            <Header />
            <div className='details-block'>
                <h2>Votre voiture </h2>
                <form>
                    <div className='details-input' >
                        <label htmlFor=""> Carburant </label>
                        <span> Esscence </span>
                    </div>
                    <div className='details-input' >
                        <label htmlFor="" > Marque </label>
                        <span> Volkswagen </span>
                    </div>
                    <div className='details-input' >
                        <label htmlFor=""> Modéle </label>
                        <span> Golf Vill </span>
                    </div>
                    <div className='details-input' >
                        <label htmlFor="" > Type </label>
                        <span > tsi 110 </span>
                    </div>
                    <div className='details-input' >
                        <label htmlFor="" > Première immatriculation </label>
                        <select className="years" id="cars" >
                            {
                                Vehicle_Details.Years
                                    .length > 0 &&
                                Vehicle_Details.Years?.map(
                                    (item, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={item.value} >
                                                {item.label}
                                            </option>
                                        )
                                    }
                                )}
                        </select>
                    </div>
                    <div className='details-input' >
                        <label htmlFor="" > Valeur facture(tvac)
                            <i className="fa fa-info" aria-hidden="true"> </i>
                            <span> remises comprises(hors reprise) </span>
                        </label>
                        <span> tsi 110 </span>
                    </div>
                    < div className='details-input' >
                        <label htmlFor="" > Date d’achat de votre voiture</label>
                        < input type="month" className='month' placeholder='mm/aaaa' min={FormatToday} max={FormatToday} />
                    </div>
                    < div className="details-button" >
                        <input type="submit" className='button' value='Suivant' />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Details;