import React from "react";
import ThemeContext from "../Context/ThemeContext";

class ToggleThemeBtn extends React.Component {
  componentDidUpdate() {
    console.log(this.context.theme);
  }
  render() {
    return (
      <div>
        <button onClick={this.context.toggleTheme}>
          Toggle theme to {this.context.theme === "dark" ? "light" : "dark"}
        </button>
      </div>
    );
  }
}
ToggleThemeBtn.contextType = ThemeContext;
// const ToggleThemeBtn = (props) => {

export default ToggleThemeBtn;
