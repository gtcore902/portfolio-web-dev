import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import RECAPTCHA_KEY from '../../RECAPTCHA_KEY.js';
import './ContactForm.scss';

const ContactForm = () => {
  const [inputs, setInputs] = useState({});
  const [rgdpClass, setRgpdClass] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [errorInputName, setErrorInputName] = useState('');
  const [errorInputEmail, setErrorInputEmail] = useState('');
  const [messageSendingStatus, setMessageSendingStatus] = useState('');
  const [loaderClass, setLoaderClass] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://sendmail.gaetantremois.fr/sendmail';

    // send form
    const sendForm = () => {
      fetch(url, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
        })
        .then(() => {
          setLoaderClass('');
        })
        .then(() => {
          setMessageSendingStatus('Merci pour votre message!');
        })
        .then(() => {
          setInputs({});
          setRgpdClass('');
          document.getElementById('contactForm').reset();
        })
        .catch((error) => {
          setMessageSendingStatus("Erreur dans l'envoi de votre message");
          setLoaderClass('');
        });
    };

    // Check user entries
    function validateEmail(userMail) {
      let regexEmail = new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+');
      return regexEmail.test(userMail);
    }
    function validateName(userName) {
      if (inputs.name !== undefined) {
        userName = userName.trim();
        return userName !== '';
      }
    }
    function validateCheckedRgpd(rgpd) {
      return rgpd;
    }
    !validateName(inputs.name)
      ? setErrorInputName('Nom ne doit pas être vide!')
      : setErrorInputName('');

    !validateEmail(inputs.email)
      ? setErrorInputEmail('Adresse email non valide!')
      : setErrorInputEmail('');

    !validateCheckedRgpd(inputs.checkbox)
      ? setRgpdClass('error')
      : setRgpdClass('');
    if (
      validateEmail(inputs.email) &&
      validateName(inputs.name) &&
      validateCheckedRgpd(inputs.checkbox) &&
      recaptchaValue !== null
    ) {
      setLoaderClass('sender');
      sendForm();
    }
  };

  return (
    <div>
      <form
        id="contactForm"
        className="contactForm"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Nom<span>{errorInputName}</span>
        </label>

        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name || ''}
          onChange={handleChange}
        />
        <label htmlFor="email">
          Email<span>{errorInputEmail}</span>
        </label>

        <input
          type="email"
          name="email"
          id="email"
          value={inputs.email || ''}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={inputs.message || ''}
          onChange={handleChange}
        ></textarea>
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={inputs.checkbox || false}
            onChange={handleChange}
          />
          <label htmlFor="checkbox" className={rgdpClass}>
            Vos informations personnelles sont collectées afin de me permettre
            de répondre à votre message. Elles ne seront utilisées que dans le
            cadre de cet échange et ne seront en aucun cas partagées. Merci de
            cocher cette case pour me permettre de vous contacter efficacement.
          </label>
        </div>
        <ReCAPTCHA
          sitekey={RECAPTCHA_KEY}
          onChange={(val) => setRecaptchaValue(val)}
          style={{ margin: 'auto' }}
        />
        <div className={loaderClass}></div>
        {messageSendingStatus !== '' && (
          <p aria-label="message d'erreur" className="message-sending-status">
            {messageSendingStatus}
          </p>
        )}
        <input
          type="submit"
          className="contactForm__submitBtn"
          value="Envoyer"
        />
      </form>
    </div>
  );
};

export default ContactForm;
