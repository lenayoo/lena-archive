import Form from "./Form";
import Container from "./Container";
import Header from "./Header";

const React = () => {
  return (
    <>
      <Header headerTitle="Learning React" />
      <Form
        containerTitle="useMemo"
        containerContent="변수 최적화를 위한 useMemo 사용법"
      />
      <Container />
    </>
  );
};

export default React;
