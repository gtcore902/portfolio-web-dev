import './Awards.scss';

const Awards = ({ index, title, organization, date }) => {
  return (
    <div className="award">
      <div className="award__informations">
        <div className="award__informations__index">{index}</div>
        <div className="award__informations__content">
          <h4>{title}</h4>
          <p>{organization}</p>
        </div>
      </div>
      <div className="award__date">{date}</div>
    </div>
  );
};

export default Awards;
