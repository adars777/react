import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card">
      <div className="res-img">
        <img
          src={`${CDN_URL}/${cloudinaryImageId}`}
        />
      </div>
      <div className="res-detail">
        <div className="left">
          <h3 className="res-name">{name}</h3>
          <p className="cuisine">{cuisines.join(", ")}</p>
        </div>
        <div className="right">
          <p className="rating">{avgRating}⭐</p>
          <p className="cost">{costForTwo}</p>
          <p className="dil-time">{deliveryTime} min</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
