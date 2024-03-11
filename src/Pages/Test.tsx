import { useState } from "react";
import Form from "../Components/Form";

type dataType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const Test = () => {
  const [data, setData] = useState<dataType>({
    id: 0,
    userId: 0,
    title: "",
    completed: false
  });

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data: dataType) => {
      setData(data);
    });

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
        <h1>TEST for api calling :{data.title}</h1>
      </div>
    </div>
  );
};
