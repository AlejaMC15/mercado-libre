import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ItemDetail.scss";

const ItemDetail = (props) => {
  const location = useLocation();
  const { getDetailItem, dataItem, getDescription, descriptionItem, loading } =
    props;

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
    <>
      {!loading ? (
        <div className="containerItemDetail">
          <div className="sectionOne">
            <div className="imgItem">
              <img src={dataItem?.thumbnail} alt="imgItem" />
            </div>
            <div className="detailItem">
              <div>
                {
                  dataItem?.attributes.find(
                    (item) => item.id === "ITEM_CONDITION"
                  ).value_name
                }{" "}
                - {dataItem?.sold_quantity} vendidos
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
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default ItemDetail;
