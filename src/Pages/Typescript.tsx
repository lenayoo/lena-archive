import Form from "./Form";
import Header from "./Header";
import "./Styles.css";

function Typescript() {
  return (
    <>
      <Header headerTitle="All about Typescript" />
      <Form
        containerTitle="What is Typescript"
        containerContent="Typescript is a superset of javascript. It detects error during compile time."
      />
    </>
  );
}

export default Typescript;
