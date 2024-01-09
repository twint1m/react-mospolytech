import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  FORM_ROUTE,
  UNIVERSITY_ROUTE,
  HOME_ROUTE,
  ORDER_ROUTE,
} from "../Routes/configs";
import { useAuth } from "../hooks/useAuth";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import { Navigation } from "./Navbar.styled";
import { ChangeThemeIcon } from "./icons/ChangeThemeIcon";

const Button = styled.button`
  color: --text-color;
  width: 150px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const ChangeThemeButton = styled.button`
  color: --text-color;
  width: 70px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

const NavigationHeader = styled.header``;

export const Navbar: React.FC = () => {
  const { isAuth, handleLogin, handleLogout } = useAuth();
  const { changeTheme } = useCurrentTheme();

  return (
    <NavigationHeader>
      <Navigation displayFlex="flex">
        <NavLink className={"link"} to={HOME_ROUTE}>
          Главная
        </NavLink>
        <NavLink className={"link"} to={UNIVERSITY_ROUTE}>
          Универститеты
        </NavLink>
        <NavLink className={"link"} to={FORM_ROUTE}>
          Форма
        </NavLink>
        {isAuth && (
          <NavLink className={"link"} to={ORDER_ROUTE}>
            Заказы
          </NavLink>
        )}
        <Button onClick={isAuth ? handleLogout : handleLogin}>
          {!isAuth ? "Войти" : "Выйти"}
        </Button>
        <ChangeThemeButton onClick={() => changeTheme()}>
          <ChangeThemeIcon />
        </ChangeThemeButton>
      </Navigation>
    </NavigationHeader>
  );
};