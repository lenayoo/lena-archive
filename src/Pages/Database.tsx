import Form from "../Components/Form";
import Header from "../Components/Header";

const Database = () => {
  return (
    <>
      <Header headerTitle="Database" />
      <Form
        containerTitle="ACID rule"
        containerContent={[
          "1.Atomicity",
          "2.Consistency",
          "3.Isolation",
          "4.Durability"
        ]}
      />
    </>
  );
};

export default Database;
