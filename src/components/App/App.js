import "./App.css";
import Header from "./../Header/Header";
import SearchBox from "./../Searchbox/SearchBox";
import ResultContainer from "./../ResultContainer/ResultContainer";
import React, { useState } from "react";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const [headerExpanded, setheaderExpanded] = useState(true);
  const [SuggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setheaderExpanded(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  };

  return (
    <>
      <Header headerExpanded={headerExpanded} />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultContainer SuggestedNames={SuggestedNames} />
    </>
  );
};

export default App;
