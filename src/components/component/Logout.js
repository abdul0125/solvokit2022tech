import React from "react";
// import { GoogleLogout } from "react-google-login";
import { Button } from "@mui/material";
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";


// const clientId =
// '925153524005-hvdvlaka8eqn6idalnu510p7v0n4a04r.apps.googleusercontent.com';
  // "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();
  const onSuccess = () => {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    console.log("Logout made successfully");
    navigate('/auth')

   
  };
  const onFailure = (e) =>{
    console.log("error while logout",e)
  }
  const LogoutUser = () =>{
    
    googleLogout();
    localStorage.removeItem('profile');
    console.log("Logout made successfully");
    navigate('/auth')
  }

  return (
    <div
      style={{
        opacity: 0,
        position: "absolute",
        overflow: 'hidden',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      ></GoogleLogout> */}
      <Button onClick={LogoutUser}>
        Logout
      </Button>
    </div>
  );
}

export default Logout;
