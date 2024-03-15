import { useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form className="contactForm" method="post" onSubmit={handleSubmit}>
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
