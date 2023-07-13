import './index.css'
import Header from "../common/header/header";
import { Vehicle_Details } from '../../constants';
import moment from "moment";
import { useState } from 'react'
import { Link } from "react-router-dom"

const Details = () => {
    const [open, setOpen] = useState(false)
    const [toggle, setToggle] = useState(true)
    console.log(open)
    let FormatToday = moment(new Date()).format("MM-YYYY");
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div>
            <Header />
            <div className='details-page d-flex'>
                {/* details-page */}

                <div className={open ? 'popup' : 'popup-hide'}>
                    <i className="fa fa-times-circle" onClick={handleClick} aria-hidden="true"></i>
                    <h2>Valeur facture</h2>
                    <p>Il est possible de retrouver cette information sur la facture, le bon de commande ou le contrat de vente qui vous a été remis lors de l'achat de votre voiture.</p>
                    <p>Si vous n'avez plus ces documents, vous pouvez vérifier vos relevés de compte pour retrouver le montant et la date de paiement.</p>
                </div>
                <div className={open ? 'details-info-blur' : 'details-info'}>
                    <Link to="/">
                        <button className='back-button'>
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                            Retour</button>
                    </Link>
                    <h2>Votre voiture
                        <hr className='horizontal-line' />
                    </h2>

                    <form>
                        <div className='details-input' >
                            <div> Carburant </div>
                            {toggle ?
                                <select className="form-select form-select-lg dropdown" id="fuels" >
                                    {
                                        Vehicle_Details.Fuels
                                            .length > 0 &&
                                        Vehicle_Details.Fuels?.map(
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
                                : <span> Esscence </span>}
                        </div>

                        <div className='details-input' >
                            <div  > Marque </div>
                            {toggle ? <select className="form-select form-select-lg dropdown" id="fuels" >
                                {
                                    Vehicle_Details.Fuels
                                        .length > 0 &&
                                    Vehicle_Details.Fuels?.map(
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
                                : <span> Volkswagen </span>}
                        </div>
                        <div className='details-input' >
                            <div > Modéle </div>
                            {toggle ? <select className="form-select form-select-lg dropdown" id="fuels" >
                                {
                                    Vehicle_Details.Fuels
                                        .length > 0 &&
                                    Vehicle_Details.Fuels?.map(
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
                                : <span> Golf Vill </span>}
                        </div>
                        <div className='details-input' >
                            <div > Type </div>
                            {toggle ? <select className="form-select form-select-lg dropdown" id="fuels" >
                                {
                                    Vehicle_Details.Fuels
                                        .length > 0 &&
                                    Vehicle_Details.Fuels?.map(
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
                                : <span > tsi 110 </span>}
                        </div>
                        {toggle ? <></>
                            : <div className='details-input' >
                                <div > Annee de construction </div>
                                <select className="form-select form-select-lg dropdown" id="fuels" >
                                    {
                                        Vehicle_Details.Fuels
                                            .length > 0 &&
                                        Vehicle_Details.Fuels?.map(
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
                            </div>}
                        {toggle ? <div className='details-input' >
                            <div> Première immatriculation </div>
                            <select className="form-select form-select-sm dropdown" id="cars" required>
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
                            : <></>}
                        <div className='details-input' >
                            <div className='info-label'>
                                Valeur facture(tvac)
                                <i className="fa fa-info info-icon" onClick={handleClick} aria-hidden="true"> </i>
                                <div> remises comprises (hors reprise) </div>
                            </div>

                            <div className="">
                                <span className='euro'>&euro;</span>
                                <input type="number" min="2000" max='157300' className='amount dropdown' placeholder='0,00' />

                            </div>
                        </div>
                        < div className='details-input' >
                            <div> Date d’achat de votre voiture</div>
                            <input type="month" className='month dropdown' placeholder='mm/aaaa' min={FormatToday} max={FormatToday} required />
                        </div>
                        < div className="details-button" >
                            <button type="submit" className='btn btn-lg'>Suivant</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-4">.col-md-8</div>
        //         <div className="col-md-4">.col-md-8</div>
        //         <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        //     </div>
        // </div>
    )
}

export default Details;