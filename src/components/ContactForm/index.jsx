import { useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [inputs, setInputs] = useState({});
  const [messageSendingStatus, setMessageSendingStatus] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // const url = 'http://localhost:4000/';
    const url = 'https://sendmail.gaetantremois.fr/sendmail';
    // send form
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

  return (
    <div>
      <form
        id="contact"
        className="contactForm"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name || ''}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
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
