import { CDN_URL } from "../utils/constants";
import { resObj } from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className = "res-logo" alt= "res-logo" src={CDN_URL+ cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating} starts</h3>
      <h3>{costForTwo/ 100} FOR TWO</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
