import './ContactBtn.scss';

const ContactBtn = ({ textContent, className }) => {
  return (
    <a href="#" className={className}>
      {textContent}
    </a>
  );
};

export default ContactBtn;
