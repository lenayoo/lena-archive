import Form from "./Form";

function React() {
  return (
    <>
      <div className="flex justify-center p-6 pb-10 font-mono">
        <h1>Learning React</h1>
      </div>
      <Form
        title="Learning React"
        containerTitle="useMemo"
        containerContent="변수 최적화를 위한 useMemo 사용법"
      />
    </>
  );
}

export default React;
