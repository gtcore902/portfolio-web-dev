import './StatsFlash.scss';

const StatsFlash = ({ stat, title }) => {
  return (
    <div className="flash-stat">
      <span>{stat}</span>
      <span>{title}</span>
    </div>
  );
};

export default StatsFlash;
