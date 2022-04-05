import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewCard = ({ review }) => {
  const { name, rating, comments } = review;
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </div>
        <div className="card-body">
          <p className="card-text">{comments}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
