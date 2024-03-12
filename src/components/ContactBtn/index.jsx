import './ContactBtn.scss';

const ContactBtn = ({ textContent }) => {
  return (
    <a href="#" className="contact-link">
      {textContent}
    </a>
  );
};

export default ContactBtn;
