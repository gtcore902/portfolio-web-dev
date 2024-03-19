import './ContactBtn.scss';

const ContactBtn = ({ textContent, className, href }) => {
  return (
    <a href={href} className={className}>
      {textContent}
    </a>
  );
};

export default ContactBtn;
