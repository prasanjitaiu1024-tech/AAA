import "react";
import { useState, useEffect, useRef } from "react";

import './Bookings.css'

const Bookings = ()=>{
    const htmlcontent = useRef(null);
    let currentStep = 0;
    const [confirmed, setConfirm] = useState(1);

    if(confirmed == 3){
        setConfirm(0)
    }



   //state variables for input fields 
    const [bookingDetails, setBookingDetails] = useState({
        personName: "",
        person_email: "",
        person_phone_no: "",
        date_of_visit: "",
        no_of_participants: ""
    });




    // validation check for input fields 
    function validateAndProceed(fieldId, nextStep, slides, formGroups) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(`${fieldId}Error`);
        let isValid = false;

        if (fieldId === 'name') {
            
            isValid = field.value.trim().length > 0;
        } else if (fieldId === 'email') {
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(field.value.trim());
        } else if (fieldId === 'phone') {
            
            const phoneRegex = /^\d{10}$/;
            isValid = phoneRegex.test(field.value.trim());
        } else if (fieldId === 'date') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const selectedDate = new Date(field.value);
            
            isValid = field.value && selectedDate > today;
        } else if (fieldId === 'participants') {
            
            isValid = field.value !== '';
        }

        error.style.display = isValid ? 'none' : 'block';

        if (isValid && nextStep < slides.length) {
            slides[currentStep].classList.remove('active');
            formGroups[currentStep].classList.remove('active');
            currentStep = nextStep;
            slides[currentStep].classList.add('active');
            formGroups[currentStep].classList.add('active');
        }

        if (isValid && nextStep === slides.length) {
            formGroups[5].classList.add('active');
        }
    }
    


    //  reset form function
    const  resetForm = (slides, formGroups, childs, submitButton)=> {
        slides[4].classList.remove('active');
        formGroups[4].classList.remove('active');
        submitButton.classList.remove('active');

        slides[0].classList.add('active');
        formGroups[0].classList.add('active');
        
        // input fields values set to blank
        childs[1].children[1].reset();
    }



    //function for handling input fields values
    const handleInputFields = (event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        switch(name){
            case "name":
                setBookingDetails(prev_value =>({
                    ...prev_value,
                    personName: event.target.value
                }));
                break;
            case "email":
                setBookingDetails(prev_value =>({
                    ...prev_value,
                    person_email: event.target.value
                }));
                break;
            case "phone":
                setBookingDetails(prev_value =>({
                    ...prev_value,
                    person_phone_no: event.target.value
                }));
                break;
            case "date":
                setBookingDetails(prev_value =>({
                    ...prev_value,
                    date_of_visit: event.target.value
                }));
                break;
            case "participants":
                setBookingDetails(prev_value =>({
                    ...prev_value,
                    no_of_participants: event.target.value
                }));
                break;
        }
    }


    
    // function for handling form submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        confirm("Your Booking Details are: \n" + 
            `Name: ${bookingDetails.personName}\nEmail: ${bookingDetails.person_email}\nPhone No: ${bookingDetails.person_phone_no}\nDate: ${bookingDetails.date_of_visit}\nNo of Participants: ${bookingDetails.no_of_participants}`
        );
        setConfirm(confirmed+1);
    }

    // if(bookingDetails.personName != ''){
    //     document.getElementById('press').style.display='block';
    // }else if(bookingDetails.person_email){
    //     document.getElementById('press').style.display='block';
    // }else if(bookingDetails.person_phone_no){
    //     document.getElementById('press').style.display='block';
    // }else if(bookingDetails.date_of_visit){
    //     document.getElementById('press').style.display='block';
    // }else if(bookingDetails.no_of_participants){
    //     document.getElementById('press').style.display='block';
    // }else{
    //     document.getElementById('press').style.display='none';
    // }

    useEffect(()=>{
        if(htmlcontent.current){
            const childs = htmlcontent.current.children;
            const slides = childs[0].children;
            const formGroups = childs[1].children[1].children;
            const submitButton = childs[1].children[1].children[5];
            childs[0].children[0].classList.add('active');
            childs[1].children[1].children[0].classList.add('active');
            // for Name validation for form change on input change
            childs[1].children[1].children[0].addEventListener('keypress', (e) =>{
                    if(e.key == "Enter"){
                        e.preventDefault();
                        validateAndProceed('name', 1, slides, formGroups);
                        
                    }
            })
            
             // for Email validation for form change on input change
            childs[1].children[1].children[1].addEventListener('keypress', (e) =>{
                    if(e.key == "Enter"){
                        e.preventDefault();
                        validateAndProceed('email', 2, slides, formGroups);
                        
                    }
            })
            

            // for Phone number validation for from change on input change
            childs[1].children[1].children[2].addEventListener('keypress', (e) =>{
                    if(e.key == "Enter"){
                        e.preventDefault();
                        validateAndProceed('phone', 3, slides, formGroups);
                    }
            })
            

            // for Date validation for from change on input change
            childs[1].children[1].children[3].addEventListener('keypress', (e) =>{
                    if(e.key == "Enter"){
                        e.preventDefault();
                        validateAndProceed('date', 4, slides, formGroups);
                    }
            })
            

            // for Participants validation for from change on input change
            childs[1].children[1].children[4].addEventListener('keypress', (e) =>{
                    if(e.key == "Enter"){
                        e.preventDefault();
                        validateAndProceed('participants', 5, slides, formGroups);
                    }
            })

            // reset form fields to defaults
            childs[1].children[1].children[5].addEventListener('click', (e)=>{
                // e.preventDefault();
                // if(confirmed == true){
                    resetForm(slides, formGroups, childs, submitButton);
                // }
            });
            
        }
    },[confirmed]);

        

        
  
    
    return(
    <><div ref={htmlcontent} className="booking-container" id="booking" name="booking">
        <div className="slideshow-container" >
            <div className="slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8')"}} loading="lazy"></div>
            <div className="slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"}} loading="lazy"></div>
            <div className="slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')"}} loading="lazy"></div>
            <div className="slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-4f1f3421c3b9')"}} loading="lazy"></div>
            <div className="slide" style={{backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')"}} loading="lazy"></div>
        </div>
        <div className="container-booking">
            <h1>Nature Walk Booking</h1>
            <form id="bookingForm">
                <div className="form-group" id="nameGroup">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required onChange={handleInputFields} autoComplete="on"/>
                    <div id="nameError" className="error">Please enter your full name.</div>
                </div>
                <div className="form-group" id="emailGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required onChange={handleInputFields} autoComplete="on"/>
                    <div id="emailError" className="error">Please enter a valid email address.</div>
                </div>
                <div className="form-group" id="phoneGroup">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required onChange={handleInputFields} autoComplete="on"/>
                    <div id="phoneError" className="error">Please enter a valid 10-digit phone number.</div>
                </div>
                <div className="form-group" id="dateGroup">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required min="2025-07-08" onChange={handleInputFields} autoComplete="on"/>
                    <div id="dateError" className="error">Please select a future date.</div>
                </div>
                <div className="form-group" id="participantsGroup">
                    <label htmlFor="participants">Number of Participants</label>
                    <select id="participants" name="participants" required onChange={handleInputFields}>
                        <option value="">Select number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div id="participantsError" className="error">Please select the number of participants.</div>
                </div>
                <button type="submit" id="submitButton" onClick={handleSubmit}>Book Now</button>
                <p className="form-group" name="press" id="press">Press Enter</p>
            </form>
        </div>
        </div>
    </>
    )
}

export default Bookings