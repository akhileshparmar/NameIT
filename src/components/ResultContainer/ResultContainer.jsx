import "./ResultContainer.css";
import NameCard from "./../NameCard/NameCard";

import React from "react";

const ResultContainer = ({ SuggestedNames }) => {
  const result = SuggestedNames.map((SuggestedName) => {
    return <NameCard key={SuggestedName} SuggestedName={SuggestedName} />;
  });

  return <div className="results-container">{result}</div>;
};

export default ResultContainer;
