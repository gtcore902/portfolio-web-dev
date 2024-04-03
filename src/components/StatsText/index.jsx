import './StatsTxt.scss';

const StatsTxt = ({ element, firstDetail, secondDetail }) => {
  return (
    <div className="stats-text">
      <span className="stats-text__element">{element}</span>
      <span className="stats-text__detail">{firstDetail}</span>
      {secondDetail && (
        <span className="stats-text__detail">{secondDetail}</span>
      )}
    </div>
  );
};

export default StatsTxt;
