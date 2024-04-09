import './Card.scss';

const Card = ({ title, list }) => {
  return (
    <div className="card animatable">
      <h4 className="card__title">{title}</h4>
      <ul className="card__ul">
        {list.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
