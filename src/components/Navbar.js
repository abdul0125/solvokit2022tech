import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Popover from "@mui/material/Popover";
import { Typography, Popper, Box, TextField } from "@mui/material";

import SettingIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import "./Navbar.css";
import { Input, Avatar, Button } from "@mui/material";
import NavOptions from "./component/NavOptions";
import Logout from "./component/Logout";
import AlertDialog from "./component/LogoutAlertBox";
import AlertDialogSlide from "./component/Profile";

import { searchQuestions } from "../api/index.js";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  aske,
  setAske,
  askc,
  setAskc,
  searchData,
  setSearchData,
  user,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const askExpertFun = () => {
    // navigate('/')
    if (askc) {
      setAskc(!askc);
    }
    setAske(!aske);
    console.log(aske);
  };
  const askCommunityFun = () => {
    // navigate('/')
    if (aske) {
      setAske(!aske);
    }
    setAskc(!askc);
    console.log(askc);
  };

  const searchFunCall = async () => {
    //transform search quesry to pass into searchQuestion
    // if(searchQuery){
    //   const qry = searchQuery.split(" ");
    //   console.log(qry)
    // }
    await searchQuestions(searchQuery)
      .then((e) => {
        console.log(e);
        setSearchData(e.data);
        console.log(searchData);
      })
      .catch(console.error());
  };
 
  const handelKeyPress = (e) => {
    if (e.keyCode == 13) {
      searchFunCall();
      console.log("this is workin on front end", searchQuery);
    }
  };

  return (
    <div className="Navbar">
      <div className="NavbarLeft">
        <SearchIcon />
        <Input
          id="Search-Input"
          disableUnderline
          placeholder="Search any Question"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={handelKeyPress}
        />
      </div>
      <div className="NavbarRight">
        <Button
          style={{
            color: "white",
            backgroundColor: "#ffb020",
            marginRight: 20,
          }}
          onClick={askExpertFun}
        >
          <div className="big">Ask Expert</div>
          <div className="sm">A E</div>
        </Button>

        <Button
          style={{
            color: "white",
            backgroundColor: "#14b8a6",
            marginLeft: 20,
            marginRight: 40,
          }}
          onClick={askCommunityFun}
        >
          <div className="big">Ask Community</div>
          <div className="sm">A C</div>
        </Button>
        {/* <NotificationsIcon style={{ marginRight: 18 }} onClick={handleClick} /> */}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            The content of the Popover.The content of the Popover.The content of
            the Popover.
          </Typography>
          <Typography sx={{ p: 2 }}>
            The content of the Popover.The content of the Popover.
          </Typography>
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>

        {/* <NavOptions style={{ marginRight: 18 }} /> */}
        {/* <AccountBoxIcon style={{ marginRight: 18 }} onClick={handleClick} /> */}
        <AlertDialogSlide user={user}/>
        {/* <Avatar
          style={{ marginRight: 10 }}
          alt="Remy Sharp"
          sx={{ width: 45, height: 45 }}
          src="/static/images/avatar/1.jpg"
          onClick={handleClickPoper}
        /> */}
        <AlertDialog />
        {/* <Logout/> */}
      </div>
    </div>
  );
};

export default Navbar;
