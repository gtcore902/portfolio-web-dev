import './StatsTxt.scss';

const StatsTxt = ({ address, city }) => {
  return (
    <div className="stats-text">
      <span>{address}</span>
      <span>{city}</span>
    </div>
  );
};

export default StatsTxt;
