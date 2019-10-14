import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { logOutRequest } from "../actions";

const Header = (props) => {
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;
  console.log(`Usuario existente: ${hasUser}`);
  const handleLogout = (props) => {
    props.logOutRequest({});
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {/* <img
            src={Object.keys(user).length > 0 ? gravatar(user.email) : userIcon}
            alt=""
          /> */}
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to="/">{user.name}</Link>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <Link to="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = () => {
  logOutRequest;
};

// export default Header;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
