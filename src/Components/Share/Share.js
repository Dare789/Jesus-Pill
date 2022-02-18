import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaWhatsapp } from 'react-icons/fa';
import "./Share.css";



 const Share = () => {
     console.log()
    const facebookShare = () => {
        window.open("https://www.facebook.com/sharer.php?u=jesuspill.com&t=Today's+Pill", "_blank");
    }
    const twitterShare = ()  => {
        window.open(`https://twitter.com/intent/tweet?url=jesusPill.com&text=Todays+Pill&hashtags=jesusPill`, "_blank");
    }
    const whatsappShare = () => {
        window.open("whatsapp://send?text=jesusPill.com", "share/whatsapp/share", "_blank");
    }  

    return (
    <div className='pb0 ma0'>
        <p className='tc pa0 ma0 mt5 fw9'>Share Today's Pill</p>
           <div style={{display:"flex", justifyContent:"center"}}>
               <button className="tc f2 link pointer grow bg-transparent share">
                   <FaFacebook onClick={facebookShare}></FaFacebook>
               </button>
               <button className="tc f2 link pointer grow bg-transparent share">
                   <FaTwitterSquare onClick={twitterShare}></FaTwitterSquare>
               </button>   
               <button className="tc f2 link pointer grow bg-transparent share">
                   <FaWhatsapp onClick={whatsappShare}></FaWhatsapp>
               </button>
               <button className="tc f2 link pointer grow bg-transparent share">
                   <FaInstagramSquare></FaInstagramSquare>
               </button>    
           </div>
    </div>    
    )
}
export default Share;