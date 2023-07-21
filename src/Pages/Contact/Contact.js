import { useRef } from 'react'
import Notification from '../../Components/Notification';
import './Contact.css'
import {  ToastContainer } from 'react-toastify';

function Contact() {
  const emailRef=useRef();
  const nameRef=useRef()
  const subjectRef=useRef();
  const messageRef=useRef();
  const sendContactMsg=async(name,email,subject,msg)=>{
    const contactvalue={
      name,
      email,
      subject,
      msg
    }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify(contactvalue)
        }
    
    try{
        const res= await fetch("https://ecommerce-app-b320e-default-rtdb.firebaseio.com/Message.json", options)
      Notification('email has been sent successfully')

    }
    catch(error){
      Notification('There is an error or problem','error')
      console.log(error)
    }
  }

  const submitFormHandler=(e)=>{
    e.preventDefault();
    const emailValue=emailRef.current.value
    const nameValue=nameRef.current.value;
    const subjectValue=subjectRef.current.value;
    const messageValue=messageRef.current.value;
    if(!emailValue || !nameValue || !subjectValue || !messageValue){
      Notification('all inputs are required','error')
      return;
    }
    console.log(emailRef,nameValue)
    sendContactMsg(nameValue,emailValue,subjectValue,messageValue);

   

  }
  return (
    <div className='page contact'>
      <h2>Contact Form</h2>
      <form onClick={submitFormHandler}>      
  <input name="name" type="text" className="feedback-input" placeholder="Name" ref={nameRef}/>   
  <input name="email" type="email" className="feedback-input" placeholder="Email"  ref={emailRef} />
  <input name="subject" type="text" className="feedback-input" placeholder="subject"  ref={subjectRef} />
  <textarea name="text" className="feedback-input" placeholder="message"  ref={messageRef}></textarea>
  <input type="submit" value="SUBMIT"/>
</form>

    </div>
  )
}

export default Contact