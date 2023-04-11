import React, { useEffect, useState } from "react";
import SidebarOption from "./component/SidebarOption";
import PeopleIcon from "@mui/icons-material/People";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from "@mui/icons-material/Quiz";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Button from "react";
import ExpertHelp from "./ExpertHelp";
import { Grid } from "@mui/material";
import Logo from '../images/Logo.png'
import Icon from '../images/Icon.png'

function Sidebar({user}) {
  const [more, setMore] = useState(false);
  const moreOptions = () => {
    setMore(!more);
    console.log(more);
  };

  // useEffect(() => {
  //   window.addEventListener("resize", (e) => console.log(e));
  // }, []);
  return (
    <div className="Sidebar" >
      <img
      id="1"
      src={Logo}
      style={{height:80,width:250,objectFit:'cover',paddingTop:30}}
      />
      <img
      id="image2"
      src={Icon}
      style={{height:100,width:100,objectFit:'cover',paddingTop:30}}
      />

      <br />

      <div className="SidebarOptions">
        <Link to="/" style={{ textDecoration: "none" }}>
          <SidebarOption Icon={DashboardIcon} title="Dashboard" />
        </Link>

        <Link to="/communities" style={{ textDecoration: "none" }}>
          <SidebarOption
            Icon={PeopleIcon}
            title="Communities"
            link="/communities"
          />
        </Link>

        <Link to="myquestions" style={{ textDecoration: "none" }}>
          <SidebarOption
            Icon={QuizIcon}
            title="My Questions"
            link="myquestions"
          />
        </Link>

        <Link to="bookmarks" style={{ textDecoration: "none" }}>
          <SidebarOption
            Icon={BookmarksIcon}
            title="Bookmarks"
            link="bookmarks"
          />
        </Link>

        <ExpertHelp Icon={LocalLibraryIcon} title="Expert Help" user={user}/>

        {more ? (
          <ExpertHelp Icon={AssignmentIcon} title="Assignment Help" user={user}/>
        ) : null}

        {more ? (
          <ExpertHelp Icon={EngineeringIcon} title="Project Help" user={user}/>
        ) : null}

        <div onClick={moreOptions}>
          <SidebarOption Icon={UnfoldMoreIcon} title={more ? "Less" : "More"} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
