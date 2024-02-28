import Header from "../Components/Header";

const InputContainer = () => {
  return (
    <div className="ml-10">
      <Header headerTitle="Input" />
      <form className="flex flex-col justify-center ml-10 p-5 rounded bg-slate-300 text-black">
        <label>
          Title:
          <input
            className="ml-4 mt-2 w-80 h-7 rounded bg-slate-50"
            type="text"
            name="title"
          />
        </label>
        <label>
          Content:
          <input
            className="mt-2 rounded w-80 h-20 bg-slate-50"
            type="text"
            name="content"
          />
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
