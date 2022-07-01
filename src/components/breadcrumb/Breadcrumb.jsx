import { useNavigate } from "react-router-dom";
import "./Breadcrumbs.scss";

const Breadcrumb = (props) => {
  const { categories } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="containerBreadcrumb">
        <span className="start" onClick={() => navigate(`/`)}>
          Inicio
        </span>
        {categories?.map((item, index) => {
          return (
            <span key={index}>
              {" > "}
              <span>{item.name + ""}</span>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Breadcrumb;
