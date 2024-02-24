import Header from "./Header";
import Form from "./Form";

const Github = () => {
  return (
    <>
      <Header headerTitle="Learn Github" />
      <Form
        containerTitle="Add my local repository to Github for the first time"
        containerContent={[
          "In your local repository vscode terminal",
          "1. git init ",
          "2. git add",
          "3. git commit -m `initial commit`",
          "4. git remote add origin `your-github-repo-url`(which you can acquire after create repository in you GitHub)",
          "5. git push -u origin main"
        ]}
      />
    </>
  );
};

export default Github;
