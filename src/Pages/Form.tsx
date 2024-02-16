import "./Styles.css";

function Form(props: {
  title: string;
  containerTitle: string;
  containerContent: string;
}) {
  return (
    <div className="form">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="container">
        <h3 className="container__title">{props.containerTitle}</h3>
        <p className="container__content">{props.containerContent}</p>
      </div>
    </div>
  );
}

export default Form;
