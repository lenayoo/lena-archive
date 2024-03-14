import { useEffect, useState } from "react";
import Form from "../Components/Form";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../Components/api";

type dataType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const Test = () => {
  const [dataApi, setDataApi] = useState<dataType>({
    id: 0,
    userId: 0,
    title: "",
    completed: false
  });

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((dataApi: dataType) => {
      setDataApi(dataApi);
    });

  // const { data, isError } = useQuery({
  //   queryFn: () => fetchPosts,
  //   queryKey: ["posts"]
  // });

  // console.log("isError", isError);

  return (
    <div>
      <Form
        containerTitle="TEST for api calling"
        containerContent={[
          "1. first api calling in my personal project",
          "2. api calling 1,2,3"
        ]}
      />
      <div className="py-1 px-10 mt-5 bg-purple-500 bg-opacity-20 rounded shadow-md w-full max-w-md ml-10">
        <h1>TEST for api calling :{dataApi.title}</h1>
      </div>
    </div>
  );
};
