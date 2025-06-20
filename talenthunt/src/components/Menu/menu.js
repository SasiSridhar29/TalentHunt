import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
// import userLogout from "../../auth/userLogout";
import { useDispatch } from "react-redux";
import { handleLoginTabIndex, logoutUser } from "../../redux/actions";
import { auth } from "../../firebase";
import { ASPIRANT } from "../../redux/actionType";

export default function MenuSimple() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {};
  const createHandleMenuClick = async (menuItem) => {
    if (menuItem !== "logout") {
      navigate(menuItem);
    } else {
      dispatch(handleLoginTabIndex(ASPIRANT));
      await auth.signOut();
      navigate("/");
    }
  };

  return (
    <Dropdown>
      <MenuButton id="account">ACCOUNT DETAILS</MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={() => createHandleMenuClick("profile")}>
          Profile
        </MenuItem>
        <MenuItem id="search" onClick={() => createHandleMenuClick("search")}>
          Search
        </MenuItem>
        <MenuItem id="logout" onClick={() => createHandleMenuClick("logout")}>
          Log out
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
 
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  &:last-of-type {
    border-bottom: none;
  }
  &:focus {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#5319AC"};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[50]};
  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
     color: ${theme.palette.mode === "dark" ? grey[200] : "#5319AC"};
  }
  &:active {
    background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
  }
  `
);
