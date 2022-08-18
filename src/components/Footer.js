import React from "react";
import "./Footer.css";
import {GiPositionMarker, GiRotaryPhone} from "react-icons/gi";
import {FaFax , FaInbox} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter , faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return(
        <div className="main-footer">
            <div className="container">
            <img src='https://www.portnet.ma/sites/all/themes/portnet/images/new-logo2_fr.png' alt='logo' width="300px"  margin-right="500px"/>
                <div className="row" style={{marginTop:"40px"}}>
                    {/*column1 */}
                    <div className="col">
                        <h4>Qui sommes-nous ?</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.portnet.ma/a-propos">A propos</a></li>
                            <li><a href="https://www.portnet.ma/nos-missions">Nos missions</a></li>
                            <li><a href="https://www.portnet.ma/nos-valeurs">Nos valeurs</a></li>
                            <li><a href="https://www.portnet.ma/recrutement">Recrutement</a></li>
                        </ul>
                    </div>
                    {/*column2 */}
                    <div className="col">
                        <h4>Smart Trade</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.portnet.ma/abonnement-aux-services-de-portnet-sa">Abonnement aux services de PORTNET S.A.</a></li>
                            <li><a href="https://www.portnet.ma/offres-de-formation">Offres de formation</a></li>
                        </ul>
                    </div>
                    {/*column3 */}
                    <div className="col">
                        <h4>Support</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.portnet.ma/support-et-assistance-technique">Support et assistance technique</a></li>
                            <li><a href="http://reclamation.portnet.ma/index.php5?page=citoyen.AccueilCitoyen">Demande d'information</a></li>
                            <li><a href="https://www.portnet.ma/statistiques">Statistiques et reporting</a></li>
                            <li><a href="https://www.portnet.ma/fr#">Tracking</a></li>
                            <li><a href="https://www.portnet.ma/faq">FAQ</a></li>
                        </ul>
                    </div>
                    {/*column4 */}
                    <div className="col">
                        <h4>Contact</h4>
                        <ul className="list-unstyled">
                            <li> <GiPositionMarker/>  Enceinte Portuaire, Bâtiment de la Capitainerie, 2ème étage Port de Casablanca, 20000 Casablanca, Maroc</li>
                            <li> <GiRotaryPhone/>  +212 520 473 102</li>
                            <li> <FaFax/>  +212 520 473 101</li>
                            <li> <FaInbox/>  contact@portnet.ma</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div >
                    <div style={{display:"flex" , textAlign:"center"}} className="footer-block col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                        <div className="signature col-xs-12 col-sm-12 col-lg-4 col-md-4"> 
                        <p> &copy;{year} PORTNET S.A. Tous droits réservés.</p> 
                        </div> 
                        <div className="condgen col-xs-12 col-sm-12 col-lg-4 col-md-4"> 
                            <a style={{color:"white", textDecoration:"underline" ,textAlign:"center"}} href="https://www.portnet.ma/sites/default/files/conditions_generales_portnet.pdf" target="_blank" rel="noreferrer">Conditions générales d'utilisation</a> 
                        </div> 
                        <div className="singleCol social-medio-icons-white"> 
                            <a  style={{ marginRight: '10px' }} href="https://www.facebook.com/PORTNETSA/"> 
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a> 
                            <a  style={{ marginRight: '10px' }} href="https://www.linkedin.com/company/portnet//"> 
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a style={{ marginRight: '10px' }} href="https://twitter.com/PORTNETSA"> 
                                <FontAwesomeIcon icon={faTwitter} />
                            </a> 
                            <a style={{ marginRight: '10px' }} href="https://www.youtube.com/channel/UC9vtz2NXQbiVAZ4rFPSOJtA"> 
                                <FontAwesomeIcon icon={faYoutube} />
                            </a> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;


