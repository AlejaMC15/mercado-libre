import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ItemDetail.scss";

const ItemDetail = (props) => {
  const location = useLocation();
  const { getDetailItem, dataItem, getDescription, descriptionItem } = props;

  useEffect(() => {
    if (location.state !== undefined) {
      getDetailItem(location.state);
    } else {
      console.log("error");
    }
  }, [location.state]);

  console.log(dataItem, descriptionItem, "dataItem");

  useEffect(() => {
    getDescription(location.state);
  }, [location.state]);

  return (
    <div className="containerItemDetail">
      <div className="sectionOne">
        <div>
          <img src={dataItem?.thumbnail} alt="imgItem" />
        </div>
        <div className="detailItem">
          <div>
            {dataItem?.condition} - {dataItem?.sold_quantity} vendidos
          </div>

          <div>{dataItem?.title}</div>

          <div>{dataItem?.base_price}</div>
          <button>Comprar</button>
        </div>
      </div>
      <div>
        <div>
          <span>Descrpción del producto</span>
        </div>
        <div>{descriptionItem?.plain_text}</div>
      </div>
    </div>
  );
};

export default ItemDetail;
