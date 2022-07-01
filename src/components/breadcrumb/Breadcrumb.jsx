const Breadcrumb = (props) => {
  const { categories } = props;

  return (
    <>
      <div>
        Inicio{" "}
        {categories?.map((item, index) => {
          return (
            <span key={index}>
              {" > "}
              <span>{item.name}</span>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumb;
