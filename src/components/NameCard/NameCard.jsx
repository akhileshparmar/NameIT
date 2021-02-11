import React from "react";
import "./NameCard.css";

const NameCard = ({ SuggestedName }) => {
  return (
    <div className="result-name-card">
      <p className="result-name">{SuggestedName}</p>
    </div>
  );
};

export default NameCard;
