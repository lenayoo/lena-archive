const Header = (props: { headerTitle: string }) => {
  return (
    <div className="flex justify-center p-6 pb-10 font-mono">
      <h1>{props.headerTitle}</h1>
    </div>
  );
};

export default Header;
