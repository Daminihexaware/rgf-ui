import './index.css'
import Header from '../common/header'
import { Vehicle_Details } from './../../constants';
import moment from "moment";
import { useState } from 'react'
import { Link } from "react-router-dom"

const Details = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    let FormatToday = moment(new Date()).format("MM-YYYY");
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div>
            <Header />
            <div className='details-page'>
                <Link to="/">
                    <button className='back-button'>
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        Retour</button>
                </Link>

                <div className={open ? 'popup' : 'popup-hide'}>
                    <i className="fa fa-times-circle" onClick={handleClick} aria-hidden="true"></i>
                    <h2>Valeur facture</h2>
                    <p>Il est possible de retrouver cette information sur la facture, le bon de commande ou le contrat de vente qui vous a été remis lors de l'achat de votre voiture.</p>
                    <p>Si vous n'avez plus ces documents, vous pouvez vérifier vos relevés de compte pour retrouver le montant et la date de paiement.</p>
                </div>
                <div className={open ? 'details-info-blur' : 'details-info'}>
                    <h2>Votre voiture
                        <hr className='horizontal-line' />
                    </h2>

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
                            <label htmlFor="" className='info-label'>
                                Valeur facture(tvac)
                                <i className="fa fa-info info-icon" onClick={handleClick} aria-hidden="true"> </i>
                                <span> remises comprises (hors reprise) </span>
                            </label>

                            <div className="">
                                <span>&euro;</span>
                                <input type="number" min="0" className='amount' placeholder='0,00' />
                            </div>
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
            </div>
        </div >
    )
}

export default Details;