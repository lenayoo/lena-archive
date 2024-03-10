import Form from "../Components/Form";

export const Test = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log("json", json);
      return json;
    });
  console.log(
    "outside",
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        return json;
      })
  );

  return (
    <div>
      <Form
        containerTitle="TEST for api calling"
        containerContent={[
          "1. first api calling in my personal project",
          "2. api calling 1,2,3"
        ]}
      />
      <div className="py-1 px-10">
        <h1>TEST for api calling</h1>
      </div>
    </div>
  );
};
