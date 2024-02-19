import Form from "./Form";
import "./Styles.css";

function Typescript() {
  return (
    <>
      <div className="subject">
        <h1>All about Typescript</h1>
      </div>
      <Form
        title="All about TypeScript"
        containerTitle="What is Typescript"
        containerContent="Typescript is a superset of javascript. It detects error during compile time."
      />
    </>
  );
}

export default Typescript;
