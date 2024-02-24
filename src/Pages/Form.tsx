import "./Styles.css";

const Form = ({
  containerTitle,
  containerContent
}: {
  containerTitle: string;
  containerContent: string | string[];
}) => {
  return (
    <div className="form">
      <div className="container">
        <h3 className="container__title">{containerTitle}</h3>
        <div className="container__content">
          <ul>
            {Array.isArray(containerContent) ? (
              containerContent.map((content: string, index: number) => (
                <li key={index}>{content}</li>
              ))
            ) : (
              <p>{containerContent}</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
