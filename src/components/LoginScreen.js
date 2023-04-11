import React from "react";
import "./LoginScreen.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { List, ListItem, ListItemText } from "@mui/material";
import { GoogleLogin } from 'react-google-login';
import Login from "./component/Login";
import Logout from "./component/Logout";
import Logo from '../images/Logo.png';




const LoginScreen = () => {



  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <img
          src={Logo}
          style={{height:60,width:200,objectFit:'cover'}}

          />
        
        </div>

        <div className="headerRight">
          
          
          <Login />
        </div>
      </div>
      <div className="body">
        <div className="bodyPart1">

        <img src="https://media.istockphoto.com/vectors/young-people-group-reading-books-study-learning-knowledge-and-vector-vector-id1206750602?k=20&m=1206750602&s=612x612&w=0&h=nOBI0vsqpURdDZ1dmcn9bys2Z_5gaIuAl1pfFujZiMk=" />
        <div>
        <h1>Now learn in communities</h1>
        <h2>We are building a community learning platform</h2>
        <p style={{fontFamily:'cursive',fontSize:18}}>Here you can get help in your assignment, homework,project or anything else,<br/>
          this is a platform where we can help others and get help from others without loosing any penny.

        </p>
        </div>
        </div>
        <div className="bodyPart2">
          <div>

          <h1>List of communities on this platform</h1>
          <List>
            <ListItem>
            <ListItemText primary='Mechanical Engineers'/>
            </ListItem>
            <ListItem>
            <ListItemText primary='Calculus and Stats'/>
            </ListItem>
            <ListItem>
            <ListItemText primary='IT Group'/>
            </ListItem>
            <ListItem>
            <ListItemText primary='Applied Science'/>
            </ListItem>
            <ListItem>
            <ListItemText primary='and many more...'/>
            </ListItem>

          </List>
          </div>
          <img
          src="https://cdn.pixabay.com/photo/2020/05/20/03/50/gears-5193383_960_720.png"
          />

          <div></div>

        </div>

      </div>

      <div className="footer">
        <div className="FooterBody">
          <div className="left">
          <img
          src={Logo}
          style={{height:80,width:280,objectFit:'cover'}}

          />
          </div>
          <div className="middle">
            <h2>Important Links</h2>
            <h4>Terms And Conditions</h4>
            <h4>PrivacyPolicy</h4>
            <h4>AboutUs</h4>
            <h4>Contact us</h4>
          </div>
          <div className="right">
            <h2>Connect With Us </h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FacebookIcon style={{ marginRight: 10 }} />
              <h5>Facebook</h5>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <InstagramIcon style={{ marginRight: 10 }} />
              <h5>Instagram</h5>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <YouTubeIcon style={{ marginRight: 10 }} />
              <h5>Youtube</h5>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <LinkedInIcon style={{ marginRight: 10 }} />
              <h5>LinkedIn</h5>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          Copyright
          <CopyrightIcon style={{ margin: 5 }} />
          2022
          <h5 style={{ margin: 5 }}>Solvokit.com</h5>
          All rights reserved
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
