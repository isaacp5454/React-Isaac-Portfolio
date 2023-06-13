import React,{useState} from 'react';



export default function Contact() {

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nmError, setNmErr] = useState(false);
  const [msgError, setMsgErr] = useState(false);

  const checkMessage = () => {
    setMsgErr(message.trim()==="");

  }
  const checkName = () => {
    setNmErr(name.trim() === "");

  }
  const checkEmail = () => {
    setEmailErr(!validEmail.test(email));
  };


  return (
    <div>                                                                                                     
      <h1>Contact Me!</h1>
      <form>
        <input className='form-input'
        placeholder='Email'
        id="email"
        value={email}
           onChange={(e) => setEmail(e.target.value)}
           onBlur={checkEmail}></input>

        {emailErr&&<p className='error'>Not a valid email!</p>}

        <input className='form-input'
        placeholder='Your Name'
        id="name"
        value={name}
           onChange={(e) => setName(e.target.value)}
        onBlur={checkName}></input>
        {nmError&&<p className='error'>Not a valid name!</p>}

        <textarea className='form-input'
        placeholder='Message'
        id="message"
        value={message}
           onChange={(e) => setMessage(e.target.value)}
        onBlur={checkMessage}></textarea>
        {msgError&&<p className='error'>Not a valid message!</p>}

        <button>Submit</button>

      </form>
    </div>
  );
}
