import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import profilImg from '../../assets/profil_gaetan_tremois.webp';
import ContactBtn from '../ContactBtn';
import './Hero.scss';

const Hero = ({ scrollToElement }) => {
  return (
    <div className="hero" data-theme="dark">
      <div className="hero__separator"></div>
      <div className="hero__informations">
        <h1>
          GAETAN
          <FontAwesomeIcon
            icon={faCode}
            size="2xs"
            className="flash-color icon-margin"
          />
          <br />
          <span>Développeur web</span>
        </h1>
        <h2 className="hero__informations__h2title">
          React JS
          <FontAwesomeIcon
            icon={faGear}
            size="2xs"
            className="flash-color icon-margin"
          />
          Node JS
        </h2>
        <div className="hero__informations__btn">
          <ContactBtn
            href="#contact"
            className="contact-link contact-link--background-dark"
            textContent="Un projet ?"
            scrollHandler={scrollToElement}
          />
          <ContactBtn
            href="#contact"
            className="contact-link contact-link--background-light"
            textContent="Contact"
            scrollHandler={scrollToElement}
          />
        </div>
      </div>
      <div className="hero__image__container">
        <div className="hero__image__container__mask">
          <div className="hero__image__container__mask__element--1"></div>
          <div className="hero__image__container__mask__element--2"></div>
          <div className="hero__image__container__mask__element--3"></div>
          <div className="hero__image__container__mask__element--4"></div>
          <div className="hero__image__container__mask__element--5"></div>
          <div className="hero__image__container__mask__element--6"></div>
          <div className="hero__image__container__mask__element--7"></div>
          <div className="hero__image__container__mask__element--8"></div>
          <div className="hero__image__container__mask__element--9"></div>
          <div className="hero__image__container__mask__element--10"></div>
          <div className="hero__image__container__mask__element--11"></div>
          <div className="hero__image__container__mask__element--12"></div>
          <div className="hero__image__container__mask__element--13"></div>
          <div className="hero__image__container__mask__element--14"></div>
          <div className="hero__image__container__mask__element--15"></div>
          <div className="hero__image__container__mask__element--16"></div>
          <div className="hero__image__container__mask__element--17"></div>
          <div className="hero__image__container__mask__element--18"></div>
          <div className="hero__image__container__mask__element--19"></div>
          <div className="hero__image__container__mask__element--20"></div>
          <div className="hero__image__container__mask__element--21"></div>
          <div className="hero__image__container__mask__element--22"></div>
          <div className="hero__image__container__mask__element--23"></div>
          <div className="hero__image__container__mask__element--24"></div>
          <div className="hero__image__container__mask__element--25"></div>
          <div className="hero__image__container__mask__element--26"></div>
          <div className="hero__image__container__mask__element--27"></div>
          <div className="hero__image__container__mask__element--28"></div>
          <div className="hero__image__container__mask__element--29"></div>
          <div className="hero__image__container__mask__element--30"></div>
          <div className="hero__image__container__mask__element--31"></div>
          <div className="hero__image__container__mask__element--32"></div>
          <div className="hero__image__container__mask__element--33"></div>
          <div className="hero__image__container__mask__element--34"></div>
          <div className="hero__image__container__mask__element--35"></div>
          <div className="hero__image__container__mask__element--36"></div>
          <div className="hero__image__container__mask__element--37"></div>
          <div className="hero__image__container__mask__element--38"></div>
          <div className="hero__image__container__mask__element--39"></div>
          <div className="hero__image__container__mask__element--40"></div>
          <div className="hero__image__container__mask__element--41"></div>
          <div className="hero__image__container__mask__element--42"></div>
          <div className="hero__image__container__mask__element--43"></div>
          <div className="hero__image__container__mask__element--44"></div>
          <div className="hero__image__container__mask__element--45"></div>
          <div className="hero__image__container__mask__element--46"></div>
          <div className="hero__image__container__mask__element--47"></div>
          <div className="hero__image__container__mask__element--48"></div>
          <div className="hero__image__container__mask__element--49"></div>
          <div className="hero__image__container__mask__element--50"></div>
          <div className="hero__image__container__mask__element--51"></div>
          <div className="hero__image__container__mask__element--52"></div>
          <div className="hero__image__container__mask__element--53"></div>
          <div className="hero__image__container__mask__element--54"></div>
          <div className="hero__image__container__mask__element--55"></div>
          <div className="hero__image__container__mask__element--56"></div>
          <div className="hero__image__container__mask__element--57"></div>
          <div className="hero__image__container__mask__element--58"></div>
          <div className="hero__image__container__mask__element--59"></div>
          <div className="hero__image__container__mask__element--60"></div>
          <div className="hero__image__container__mask__element--61"></div>
          <div className="hero__image__container__mask__element--62"></div>
          <div className="hero__image__container__mask__element--63"></div>
          <div className="hero__image__container__mask__element--64"></div>
          <div className="hero__image__container__mask__element--65"></div>
          <div className="hero__image__container__mask__element--66"></div>
          <div className="hero__image__container__mask__element--67"></div>
          <div className="hero__image__container__mask__element--68"></div>
          <div className="hero__image__container__mask__element--69"></div>
          <div className="hero__image__container__mask__element--70"></div>
          <div className="hero__image__container__mask__element--71"></div>
          <div className="hero__image__container__mask__element--72"></div>
          <div className="hero__image__container__mask__element--73"></div>
          <div className="hero__image__container__mask__element--74"></div>
          <div className="hero__image__container__mask__element--75"></div>
          <div className="hero__image__container__mask__element--76"></div>
          <div className="hero__image__container__mask__element--77"></div>
          <div className="hero__image__container__mask__element--78"></div>
          <div className="hero__image__container__mask__element--79"></div>
          <div className="hero__image__container__mask__element--80"></div>
          <div className="hero__image__container__mask__element--81"></div>
          <div className="hero__image__container__mask__element--82"></div>
          <div className="hero__image__container__mask__element--83"></div>
          <div className="hero__image__container__mask__element--84"></div>
          <div className="hero__image__container__mask__element--85"></div>
          <div className="hero__image__container__mask__element--86"></div>
          <div className="hero__image__container__mask__element--87"></div>
          <div className="hero__image__container__mask__element--88"></div>
          <div className="hero__image__container__mask__element--89"></div>
          <div className="hero__image__container__mask__element--90"></div>
          <div className="hero__image__container__mask__element--91"></div>
          <div className="hero__image__container__mask__element--92"></div>
          <div className="hero__image__container__mask__element--93"></div>
          <div className="hero__image__container__mask__element--94"></div>
          <div className="hero__image__container__mask__element--95"></div>
          <div className="hero__image__container__mask__element--96"></div>
          <div className="hero__image__container__mask__element--97"></div>
          <div className="hero__image__container__mask__element--98"></div>
          <div className="hero__image__container__mask__element--99"></div>
          <div className="hero__image__container__mask__element--100"></div>
        </div>
        <img
          className="hero__image__container__image__profil"
          src={profilImg}
          alt="Gaëtan TREMOIS Développeur web"
        />
      </div>
    </div>
  );
};

export default Hero;
