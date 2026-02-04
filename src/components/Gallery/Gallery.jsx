import 'react'
import './Gallery.css'
import photo1 from '/pictures/photo1.jpg'
import photo2 from '/pictures/photo2.jpg'
import photo3 from '/pictures/photo3.jpg'
import photo4 from '/pictures/photo4.jpg'
import photo5 from '/pictures/photo5.jpg'




import {useEffect, useState}  from 'react';



const Gallery = ()=>{
    const imagess = [photo1, photo2, photo3, photo4, photo5];
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupDescription = document.getElementById('popup-description');
   
    
const [scriptLoad, setScriptLoad] = useState(false);
const [elemt, setElemt] = useState('');

//     // script load after the html dom elements of Gallery loaded
     const popUP = (event)=>{
        setScriptLoad(true);
        setElemt(event)
        
            
    }
    const loadImage = (elemt)=>{
            popupImg.src = elemt.target.src;
            popupImg.alt = elemt.target.alt;
            popupDescription.textContent = elemt.target.dataset.description;
            popup.style.display = 'flex';
    }
    if(scriptLoad){
        loadImage(elemt)
    } 

    

    function closePopup() {
                setScriptLoad(false);
            }
    return(
        <>
        <div className='gallery' name='AAA photo gallery' id='gallery'>
            <div className="parallax">
                <h1>Annimal Aid Alliance</h1>
                <h3>Nature Meets wild Glance</h3>
                <img src={imagess[1]} alt="Banner image" />
            </div>

            <div className="gallery_sec" onClick={popUP}>
                <img src={imagess[3]} alt="Cyberpunk City" data-description="An AI-generated cyberpunk cityscape with neon lights and skyscrapers." loading='lazy'/>
                <img src={imagess[1]} alt="Futuristic Landscape" data-description="An AI-crafted futuristic landscape with floating islands and vibrant colors." loading='lazy'/>
                <img src={imagess[2]} alt="Abstract AI Art" data-description="A mesmerizing AI-generated abstract composition with swirling patterns." loading='lazy'/>
                <img src={imagess[4]} alt="Sci-Fi Character" data-description="An AI-designed sci-fi character in a high-tech suit." loading='lazy'/>
                <img src={imagess[2]} alt="Surreal Dreamscape" data-description="A surreal AI-generated dreamscape with floating geometric shapes." loading='lazy'/>
                <img src={imagess[1]} alt="Space Odyssey" data-description="An AI-created depiction of a distant galaxy with glowing nebulae." loading='lazy'/>
                <img src={imagess[2]} alt="Cybernetic Vision" data-description="An AI-crafted vision of a cybernetic human in a digital world." loading='lazy'/>
                <img src={imagess[3]} alt="Fantasy Realm" data-description="An AI-generated fantasy realm with mythical creatures and glowing forests." loading='lazy'/>
                <img src={imagess[4]} alt="Tech Utopia" data-description="An AI-designed utopian city with advanced technology and harmony." loading='lazy'/>
                <img src={imagess[2]} alt="Cosmic Journey" data-description="An AI-created cosmic scene with planets and interstellar clouds." loading='lazy'/>
                <img src={imagess[1]} alt="Digital Art" data-description="A vibrant AI-generated digital artwork with dynamic patterns." loading='lazy'/>
                <img src={imagess[2]} alt="Neon Horizon" data-description="An AI-crafted neon horizon with glowing cityscapes and futuristic vehicles." loading='lazy'/>
            </div>
            
            <div className="popup" id="popup"  style={{display: scriptLoad? "block":"none"}}>
                <div className="popup-content">
                    <span id= "close-btn" className="close-btn" onClick={closePopup}>×</span>
                    <img id="popup-img" src=" " alt="Popup Image"/>
                    <p id="popup-description"></p>
                </div>
            </div>
        </div>
        </>
        
   ) 
   
}


export default Gallery