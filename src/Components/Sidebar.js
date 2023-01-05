import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrap = styled.div`
  background-color: gray;
  height: 100%;
  position: fixed;
  width: 15%;
`;

function Sidebar({ name, to, onClick }) {
  return (
    <Wrap>
      <h2>PortFolio</h2>
      <ul>
        <li key={name}>
          <Link onClick={onClick} to={to}>
            {name}
          </Link>
        </li>
      </ul>
    </Wrap>
  );
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;
