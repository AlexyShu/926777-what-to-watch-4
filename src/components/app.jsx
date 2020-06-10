import React from "react";
import Main from "./main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieCard} = props;
  return <div>
    <Main movieCard = {movieCard} />
  </div>;
};

export default App;
