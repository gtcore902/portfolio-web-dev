import './ContactBtn.scss';

const ContactBtn = ({ textContent, className, href, scrollHandler }) => {
  return (
    <a href={href} className={className} onClick={scrollHandler}>
      {textContent}
    </a>
  );
};

export default ContactBtn;
