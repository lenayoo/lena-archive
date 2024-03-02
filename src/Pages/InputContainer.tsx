import Header from "../Components/Header";
import { useState } from "react";

type Input = {
  title: string;
  content: string;
  area: string;
};

const InputContainer = () => {
  const [input, setInput] = useState<Input>({
    title: "",
    content: "",
    area: "JavaScript"
  });

  const [submittedData, setSubmittedData] = useState<Input[]>([]);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData([...submittedData, input]);

    setInput({ title: "", content: "", area: "JavaScript" });
  };

  console.log("changed data", input);
  console.log("submitted data", submittedData);
  return (
    <div className="ml-10">
      <Header headerTitle="Input" />
      <form
        className="flex flex-col justify-center ml-10 p-5 rounded bg-slate-300 text-black"
        onSubmit={submitHandler}
      >
        <label>
          Title:
          <input
            className="ml-4 mt-2 pl-2 w-80 h-7 rounded bg-slate-50"
            type="text"
            name="title"
            value={input.title}
            onChange={inputHandler}
          />
        </label>
        <label>
          Content:
          <input
            className="mt-2 pl-2 rounded w-80 h-20 bg-slate-50"
            type="text"
            name="content"
            value={input.content}
            onChange={inputHandler}
          />
        </label>
        <label>
          Belong:
          <select
            className="ml-2 mt-2 pl-2 w-80 h-7 rounded bg-slate-50"
            name="area"
            value={input.area}
            onChange={inputHandler}
          >
            <option value="React">React</option>
            <option value="TypeScript">TypeScript</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Nodejs">Node.js</option>
            <option value="Git">Git</option>
            <option value="Library">Library</option>
            <option value="Tailwind">Tailwind</option>
            <option value="Database">Database</option>
          </select>
        </label>
        <input
          className="mt-5 bg-slate-500 p-2 rounded text-slate-50 hover:bg-slate-400 hover:text-slate-100 cursor-pointer self-end"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default InputContainer;
