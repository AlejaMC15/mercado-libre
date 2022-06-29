import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Car from "../../images/ic_shipping.png";
import "./SearchResult.scss";

const SearchResult = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getListItems, data, loading } = props;

  useEffect(() => {
    if (location.state !== undefined) {
      getListItems(location.state);
    } else {
      console.log("error");
    }
  }, [location.state]);

  return (
    <div className="containerSearchResult">
      {!loading ? (
        data?.results?.length > 0 &&
        data?.results?.map((item, index) => {
          if (index < 4) {
            return (
              <div
                className="containerCard"
                key={index}
                onClick={() =>
                  navigate(`/items/${item?.id}`, { state: item?.id })
                }
              >
                <div className="containerDetail">
                  <div className="imgPriceDescription">
                    <img
                      className="imgProduct"
                      src={item?.thumbnail}
                      alt="imgProduct"
                    />
                    <div className="imgAndDescription">
                      <div className="price">
                        {item?.price}
                        <img className="imgCar" src={Car} alt="car" />
                      </div>
                      <div className="description">{item?.title}</div>
                    </div>
                  </div>
                  <div className="place">{item?.address?.state_name}</div>
                </div>
                <hr className="hr" />
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default SearchResult;
