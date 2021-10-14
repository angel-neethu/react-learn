import PropTypes from "prop-types";
import Button from "./Button";
import "./Header.css";

const Header = ({ tittle, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={headingStyle}>{tittle}</h1>
      {/* {props.name} */}
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  name: "Angel",
};

Header.propTypes = {
  tittle: PropTypes.string.isRequired,
  value: PropTypes.number,
};

const headingStyle = {
  //   color: "red",
};

export default Header;
