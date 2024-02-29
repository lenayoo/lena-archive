import Header from "../Components/Header";
import { useState } from "react";

const InputContainer = () => {
  const [input, setInput] = useState<Record<string, string>>({
    title: "",
    content: "",
    area: "JavaScirpt"
  });

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log("e", e.target.name, e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="ml-10">
      <Header headerTitle="Input" />
      <form className="flex flex-col justify-center ml-10 p-5 rounded bg-slate-300 text-black">
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
