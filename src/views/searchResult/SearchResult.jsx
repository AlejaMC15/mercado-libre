import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Car from "../../images/ic_shipping.png";
import "./SearchResult.scss";

const SearchResult = (props) => {
  const location = useLocation();
  const { getListItems, data } = props;

  console.log(location.state, data);

  useEffect(() => {
    if (location.state !== undefined) {
      getListItems(location.state);
    } else {
      console.log("error");
    }
  }, [location.state]);

  return (
    <div className="containerSearchResult">
      {data?.results?.length > 0 &&
        data?.results?.map((item, index) => {
          return (
            <div className="containerCard" key={index}>
              <div className="imgPriceDescription">
                <img className="imgProduct" src={item?.thumbnail} alt="..." />
                <div className="imgAndDescription">
                  <div className="price">
                    {item?.price} <img className="imgCar" src={Car} alt="car" />{" "}
                  </div>
                  <div className="description">{item?.title}</div>
                </div>
              </div>
              <div className="place">{item?.address?.state_name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResult;
