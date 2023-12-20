import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  ORDER_ROUTE,
} from "../Routes/configs";
import { useAuth } from "../Hooks/useAuth";
import { useCurrentTheme } from "../Hooks/useCurrentTheme";

const Navigation = styled.nav`
  height: max-content;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const ChangeThemeButton = styled.button`
  width: 70px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();

  const { currentTheme, setCurrentTheme } = useCurrentTheme();

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
    console.log(currentTheme);
  };

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };

  return (
    <header>
      <Navigation>
        <NavLink className={"link"} to={HOME_ROUTE}>
          Главная
        </NavLink>
        <NavLink className={"link"} to={ABOUT_ROUTE}>
          О нас
        </NavLink>
        <NavLink className={"link"} to={CONTACTS_ROUTE}>
          Контакты
        </NavLink>
        {isAuth && (
          <NavLink className={"link"} to={ORDER_ROUTE}>
            Заказы
          </NavLink>
        )}
        <Button onClick={handleLogin}>{!isAuth ? "Войти" : "Выйти"}</Button>
        <ChangeThemeButton onClick={() => changeTheme()}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Lager_94" data-name="Lager 94" transform="translate(0)">
              <path
                id="Path_70"
                data-name="Path 70"
                d="M12.516,4.509A12,12,0,0,0,22.3,19.881,12.317,12.317,0,0,0,24,20a11.984,11.984,0,0,0,3.49-.514,12.1,12.1,0,0,1-9.963,8.421A12.679,12.679,0,0,1,16,28,12,12,0,0,1,12.516,4.509M16,0a16.5,16.5,0,0,0-2.212.15A16,16,0,0,0,16,32a16.526,16.526,0,0,0,2.01-.123A16.04,16.04,0,0,0,31.85,18.212,16.516,16.516,0,0,0,32,15.944,1.957,1.957,0,0,0,30,14a2.046,2.046,0,0,0-1.23.413A7.942,7.942,0,0,1,24,16a8.35,8.35,0,0,1-1.15-.08,7.995,7.995,0,0,1-5.264-12.7A2.064,2.064,0,0,0,16.056,0Z"
                fill="black"
              />
            </g>
          </svg>
        </ChangeThemeButton>
      </Navigation>
    </header>
  );
};
