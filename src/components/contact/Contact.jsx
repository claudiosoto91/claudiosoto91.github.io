import { useRef, useState, useContext,useEffect } from 'react';
import './contact.css';
import { ImWhatsapp, ImLocation,ImGithub,ImLinkedin } from "react-icons/im";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {

    const form = useRef();
    const [message, setMessage] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');


    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        if (message) {
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      }, [message]);

    function validateEmail(){
                
        // Define our regular expression.
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
        // Using test we can check if the text match the pattern
        if( validEmail.test(email) ){
            emailjs.sendForm('service_9daaatq', 'template_4no34ke', form.current, '0cwPdATgEeuZG0Cny')
            .then((result) => {
                console.log(result.text);
                setMessage('Muchas Gracias,en breve te contactaremos');
            }, (error) => {
                console.log(error.text);
            });
            return true;
        }else{
            setMessage('El email no es válido');
            return false;
        }
    } 
    
    const handleChange = (e) => {
        e.preventDefault();
        if ( name !== '' ){
            validateEmail();
            setTimeout(()=>{
                setName('');
                setEmail('');
                setAsunto('');
                setMensaje('');
            },3000);

        }else{
            setMessage('Hay campos por rellenar');
        }
    }


  return (
    <div className='c'>
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Hablemos sobre tu proyecto</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <ImLinkedin className='c-icon' />
                            <a style={{color: darkMode ? "#fff" : "#000"}} target={'_blank'} href="https://www.linkedin.com/in/claudiosotodev/">linkedin.com/claudiosotodev</a>
                        </div>
                        <div className="c-info-item">
                            <ImGithub className='c-icon' />
                            <a style={{color: darkMode ? "#fff" : "#000"}} target={'_blank'} href="https://github.com/claudiosoto91">github.com/claudiosoto91</a>
                        </div>
                        <div className="c-info-item">
                            <ImLocation className='c-icon'/>
                            San Miguel de Tucumán
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>¿Tenés dudas sobre tu proyecto?</b>
                        Completa el formulario y me pondré en contacto con vos lo antes posible.
                    </p>
                    <form ref={form} onSubmit={handleChange}>
                        <input onChange={e => setName(e.target.value)} value={name}  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Nombre' name='user_name' />
                        <input onChange={e => setAsunto(e.target.value)} value={asunto} style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder='Asunto' name='user_subject' />
                        <input onChange={e => setEmail(e.target.value)} value={email} style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                        <textarea onChange={e => setMensaje(e.target.value)} value={mensaje} style={{backgroundColor: darkMode && "#333"}} cols="30" rows="5" placeholder='Mensaje' name='message'></textarea>
                        <button type='submit'>Enviar</button>
                        { message && (
                            <div className='msg'>{message}</div>
                        )}
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact