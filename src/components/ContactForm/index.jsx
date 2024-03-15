import { useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [inputs, setInputs] = useState({});
  const [messageSendingStatus, setMessageSendingStatus] = useState('');

  //   const reset = setSendingStatusMessage('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // send form
    fetch('http://localhost:4000/sendmail', {
      method: 'POST',
      //   mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
      })
      .then(() => {
        setMessageSendingStatus('Merci pour votre message!');
      })
      .then(() => {
        setInputs('');
      })
      .catch((error) => {
        setMessageSendingStatus("Erreur dans l'envoi de votre message");
      });
  };

  //   const resetForm = () => {

  //   }
  return (
    <div>
      <form
        id="contact"
        className="contactForm"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">
          Nom <span>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={inputs.name || ''}
          onChange={handleChange}
        />
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={inputs.email || ''}
          onChange={handleChange}
        />
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          value={inputs.message || ''}
          onChange={handleChange}
        ></textarea>
        {messageSendingStatus !== '' && (
          <p className="message-sending-status">{messageSendingStatus}</p>
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
