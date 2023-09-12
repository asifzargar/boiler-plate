import Dashboard from "../../assets/dashboard.png";
import * as React from "react";
import Inventory from "../../assets/inventory.png";
import Projects from "../../assets/Projects.png";
import ClickedDashboard from "../../assets/clickedDashboard.png";
import ClickedInventory from "../../assets/clickedInventory.png";
import ClickedProjects from "../../assets/clickedProjects.png";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavigationArrow from "../../assets/NavigationArrow.svg";
import NavigationOpenIcon from "../../assets/NavigationOpenIcon.svg";

import {
  DrawerHeader,
  MobileBox,
  TabletBox,
  LogoText,
  StyledListItem,
  ListItemText,
  BurgerButton,
  // StyledCollapse,
  // SublistBtn,
  // BulletPoint,
  StyledIconsLabels,
} from "./shared-layout.style";
import Logo from "../../assets/logo.png";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import path from "path";
import { theme } from "../../constants/theme.constants";
const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRight: "none",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 2px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
  marginLeft: "0.5rem",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  overflowX: "hidden",
  borderRight: "none",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiPaper-root": {
      ...openedMixin(theme),
      borderRight: "none",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiPaper-root": {
      ...closedMixin(theme),
      borderRight: "none",
    },
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(true);
  const [sublistItem, setSublistItem] = React.useState<string>("");
  const paths = [
    {
      path: "",
      text: "Dashboard",
    },
    {
      path: "inventory",
      text: "Inventory",
    },
    {
      path: "projects",
      text: "Projects",
      subItems: true,
      sublist: [
        {
          subpath: "projects/project",
          subText: "Projects",
        },
        {
          subpath: "projects/work-order",
          subText: "Work Order",
        },
        {
          subpath: "projects/receipts",
          subText: "Receipts",
        },
      ],
    },
  ];

  const icons = [Dashboard, Inventory, Projects];
  const iconsClicked = [ClickedDashboard, ClickedInventory, ClickedProjects];

  const toggleHandler = () => {
    setOpen((oldState) => !oldState);
  };

  let navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      style={open ? { marginLeft: "270px" } : { marginLeft: "72px" }}
    >
      <Box sx={{ display: "flex", paddingTop: "3rem" }}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <img src={Logo} alt="logo" width={"80%"} height={50} />
          </DrawerHeader>
          <MobileBox
            sx={
              !open
                ? { position: "fixed", top: "70px", left: "10px" }
                : { position: "fixed", top: "25px", left: "210px" }
            }
          >
            <BurgerButton
              variant="text"
              onClick={toggleHandler}
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {open ? (
                <img src={NavigationArrow} alt="navidation-burger" />
              ) : (
                <img src={NavigationOpenIcon} alt="navidation-burger" />
              )}
            </BurgerButton>
          </MobileBox>
          <List style={{ marginTop: "1rem" }}>
            {paths.map(({ text, path, sublist, subItems }, index) => {
              let pathToMatch = location.pathname.split("/")[1];
              return (
                <>
                  <StyledListItem
                    key={text}
                    className={
                      path === pathToMatch
                        ? "active"
                        : text === sublistItem
                        ? "active"
                        : ""
                    }
                    sx={{
                      display: "block",
                      marginBottom:
                        open || (!open && path == "projects") ? null : "1rem",
                      backgroundColor:
                        path == "projects" ? "#fff !important" : null,
                    }}
                    onClick={() => {
                      // if (path !== "projects") {
                      navigate(path);
                      // }
                      if (sublistItem === "") {
                        setSublistItem(text);
                      } else {
                        setSublistItem("");
                      }
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {!open && path == "library" ? (
                          <span
                            style={{ display: "flex", marginLeft: "1.7rem" }}
                          >
                            {path != pathToMatch ? (
                              <img
                                src={icons[index]}
                                alt="icon"
                                width={24}
                                height={24}
                              />
                            ) : (
                              <img
                                src={iconsClicked[index]}
                                alt="icon"
                                width={24}
                                height={24}
                              />
                            )}
                            {/* {path == pathToMatch ? (
                            <img
                              src={LibraryOpenIconSelected}
                              height={16}
                              width={16}
                              style={{ marginLeft: "0.6rem" }}
                            />
                          ) : (
                            <img
                              src={NavigationOpenIcon}
                              height={16}
                              width={16}
                              style={{ marginLeft: "0.6rem" }}
                            />
                          )} */}
                          </span>
                        ) : (
                          <>
                            {path != pathToMatch ? (
                              <img
                                src={icons[index]}
                                alt="icon"
                                width={24}
                                height={24}
                              />
                            ) : (
                              <img
                                src={iconsClicked[index]}
                                alt="icon"
                                width={24}
                                height={24}
                              />
                            )}
                          </>
                        )}
                      </ListItemIcon>
                      {open && (
                        <ListItemText
                          alignItems="center"
                          display="flex"
                          width="100%"
                          justifyContent="space-between"
                          sx={{
                            color:
                              subItems && text === sublistItem
                                ? `${theme.palette.primary.main} !important`
                                : "",
                          }}
                          className={
                            path === pathToMatch
                              ? "active"
                              : text === sublistItem
                              ? "active"
                              : ""
                          }
                        >
                          {text}
                          {subItems &&
                            (text === sublistItem ? (
                              <ExpandLess />
                            ) : (
                              <ExpandMore />
                            ))}
                        </ListItemText>
                      )}
                    </ListItemButton>
                  </StyledListItem>
                  {text === sublistItem &&
                    sublist?.map(({ subText, subpath }, index) => {
                      let pathToMatch = location.pathname.split("/");
                      return (
                        <StyledListItem
                          key={index}
                          className={
                            `${pathToMatch[1]}/${pathToMatch[2]}` === subpath
                              ? "active"
                              : ""
                          }
                          sx={{ display: "block" }}
                          // style={`${pathToMatch[1]}/${pathToMatch[2]}` === "library/questions" ? { marginTop: "-10px" } : { marginTop: "0px" }}
                          onClick={() => {
                            navigate(subpath);
                          }}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            {open ? (
                              <ListItemIcon
                                sx={{
                                  minWidth: 0,
                                  mr: open ? 3 : 1,
                                  justifyContent: "center",
                                }}
                              >
                                {`${pathToMatch[1]}/${pathToMatch[2]}` ===
                                subpath
                                  ? // <img src={TabOpenSubListSelected} />
                                    ""
                                  : // <img src={TabOpenSubListBullet} />
                                    ""}
                              </ListItemIcon>
                            ) : (
                              <span
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                }}
                              >
                                <ListItemIcon
                                  sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 1,
                                    justifyContent: "center",
                                  }}
                                >
                                  {`${pathToMatch[1]}/${pathToMatch[2]}` ===
                                  subpath
                                    ? // <img src={subListIconsSelected[index]} />
                                      ""
                                    : // <img src={subListIcons[index]} />
                                      ""}
                                </ListItemIcon>
                                {!open ? (
                                  <StyledIconsLabels
                                    style={
                                      `${pathToMatch[1]}/${pathToMatch[2]}` ===
                                      subpath
                                        ? {
                                            marginTop: "0.1rem",
                                            color: "#007B55",
                                            minWidth: 0,
                                            marginRight: "5px",
                                          }
                                        : {
                                            marginTop: "0.1rem",
                                            color: "#919EAB",
                                            minWidth: 0,
                                            marginRight: "5px",
                                          }
                                    }
                                  >
                                    {/* {subListLabels[index]} */}
                                  </StyledIconsLabels>
                                ) : null}
                              </span>
                            )}
                            {open ? (
                              <ListItemText
                                className={
                                  `${pathToMatch[1]}/${pathToMatch[2]}` ===
                                  subpath
                                    ? "active"
                                    : ""
                                }
                              >
                                {subText}
                              </ListItemText>
                            ) : (
                              ""
                            )}
                          </ListItemButton>
                        </StyledListItem>
                      );
                    })}
                </>
              );
            })}
          </List>
        </Drawer>
        <Outlet />
      </Box>
    </Box>
  );
}
