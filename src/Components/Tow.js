import React from "react";
import ThemeContext from "../Context/ThemeContext";

const Tow = () => {
  return (
    <div>
      <ThemeContext.Consumer>
        {({ theme }) => (
          // fragmant
          <>
            <h1 style={{ color: theme === "dark" ? "white" : "black" }}>
              hi from two
            </h1>
            <p>theme: {theme} </p>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

export default Tow;
