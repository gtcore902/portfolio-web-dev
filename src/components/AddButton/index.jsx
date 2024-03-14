import './AddButton.scss';

const addButon = ({ updateAwardsLength }) => {
  return (
    <div className="add-btn" onClick={updateAwardsLength}>
      <div className="add-btn__cross"></div>
    </div>
  );
};

export default addButon;
