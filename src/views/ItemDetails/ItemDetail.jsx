import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import FormatPrice from "../../utils/formatPrice";
import { Helmet } from "react-helmet";
import "./ItemDetail.scss";

const ItemDetail = (props) => {
  const location = useLocation();
  const {
    getDetailItem,
    dataItem,
    getDescription,
    descriptionItem,
    loading,
    data,
    error,
  } = props;

  useEffect(() => {
    if (location.state !== undefined) {
      getDetailItem(location.state);
    } else {
      console.log(error);
    }
  }, [location.state]);

  useEffect(() => {
    getDescription(location.state);
  }, [location.state]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{dataItem?.title}</title>
        <meta name="description" content={descriptionItem?.plain_text} />
        <meta name="keywords" content={dataItem?.title} />
        <meta name="og:image" content={dataItem?.pictures[0]?.secure_url} />
        <meta name="og:title" content={dataItem?.title} />
        <meta name="og:description" content={descriptionItem?.plain_text} />
      </Helmet>

      <Breadcrumb categories={data?.filters[0]?.values[0]?.path_from_root} />
      {!loading ? (
        <div className="containerItemDetail">
          <div className="bg">
            <div className="sectionOne">
              <div className="imgItem">
                <img src={dataItem?.pictures[0]?.secure_url} alt="imgItem" />
              </div>
              <div className="detailItem">
                <div className="condition">
                  {
                    dataItem?.attributes.find(
                      (item) => item.id === "ITEM_CONDITION"
                    ).value_name
                  }{" "}
                  - {dataItem?.sold_quantity} vendidos
                </div>

                <div className="title">{dataItem?.title}</div>

                <div className="price">
                  {FormatPrice(Math.round(dataItem?.base_price))}
                  <sup>00</sup>
                </div>
                <button>Comprar</button>
              </div>
            </div>
            <div className="containerDescription">
              <div>
                <span>Descrpción del producto</span>
              </div>
              <div className="description">{descriptionItem?.plain_text}</div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default ItemDetail;
