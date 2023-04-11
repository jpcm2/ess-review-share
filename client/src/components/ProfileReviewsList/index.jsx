import React, { useState, useEffect } from "react";
import "./style.css";
import Review from "./Review";
import api from "../../services/api";



const ProfileReviewsList = (props) => {

  const [userReviews, setUserReviews] = useState();
  const userId = localStorage.getItem("userId");
  
  useEffect(() => {
      const getUserReviews = async () => {
          try {
            const response = await api.get(`review/${userId}`);
            setUserReviews(response.data);
          } catch (error) {
            alert("Erro ao pegar reviews do usuário");
          }
        };
        getUserReviews();
    }, []);

  return (
    <div className="list-reviews-section">

      {props.data.reviews?.length ? (props.data.reviews.map((review) => (
            <Review review={review} />
          ))) : (
            <h2>This user hasn't registered any reviews yet.</h2>
          )}

    </div>
  );
};

export default ProfileReviewsList;
