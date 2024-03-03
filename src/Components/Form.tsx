const Form = ({
  containerTitle,
  containerContent
}: {
  containerTitle: string;
  containerContent: string | string[];
}) => {
  return (
    <div className="w-30">
      <div className="w-25 m-2 md:m-14 text-gray bg-pale-gray p-4 rounded-md">
        <h2 className="text-lg">{containerTitle}:</h2>
        <div className="mt-4 text-gray">
          <ul>
            {Array.isArray(containerContent) ? (
              containerContent.map((content: string, index: number) => (
                <li key={index} className="list-unstyled text-white">
                  {content}
                </li>
              ))
            ) : (
              <p>{containerContent}</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
