import React from 'react';
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../api';





// import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';


// const clientId =
// '925153524005-hvdvlaka8eqn6idalnu510p7v0n4a04r.apps.googleusercontent.com';
//   // '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Login() {
  
const navigate = useNavigate();


  const getProfile = async (token)=>{
    console.log(token);
    const FullProfile = await getUserProfile(token);
    console.log("FullProfile",FullProfile);
    localStorage.setItem('FullProfile',JSON.stringify(FullProfile?.data))



  }
  
  const onSuccess = async(res) => {
    // console.log("sucess login",res);
    let userObj = jwt_decode(res.credential);
    console.log("user Object",userObj);

    
    const token = res?.credential;

    localStorage.setItem('profile',JSON.stringify(userObj))
    localStorage.setItem('token',JSON.stringify(token))
    const _p = await getProfile(token);
    console.log('Login Success: currentUser:',res, _p);
    navigate('/')
    
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    
  };
  

  return (
    <div>
      {/* <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      /> */}
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
      />
    </div>
  );
}

export default Login;























// import React from 'react';

// import { useNavigate } from 'react-router-dom';


// import { GoogleLogin } from 'react-google-login';
// // refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

// import { getUserProfile } from '../../api';

// const clientId =
// '925153524005-hvdvlaka8eqn6idalnu510p7v0n4a04r.apps.googleusercontent.com';
//   // '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

// function Login() {
  
// const navigate = useNavigate();


//   const getProfile = async (token)=>{
//     console.log(token);
//     const FullProfile = await getUserProfile(token);
//     // console.log(FullProfile);
//     localStorage.setItem('FullProfile',JSON.stringify(FullProfile?.data))



//   }
  
//   const onSuccess = (res) => {
//     const result = res?.profileObj;
//     // const token = res?.tokenObj;
//     const token = res?.tokenId;
//     // console.log("res",res);
//     // console.log("res.tokenObj",res.tokenObj);
//     // console.log("res.tokenObj.tokenId",res.tokenId);


//     localStorage.setItem('profile',JSON.stringify(res?.profileObj))
//     getProfile(token);




//     console.log('Login Success: currentUser:', res?.profileObj);
//     // navigate('/')
//     // history.push('/');
//     navigate('/')
//     // alert(
//     //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
//     // );
//     refreshTokenSetup(res);
//   };

//   const onFailure = (res) => {
//     console.log('Login failed: res:', res);
//     alert(
//       `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
//     );
//   };
  

//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Sign in with Google"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         style={{ marginTop: '100px' }}
//         isSignedIn={true}
//       />
//     </div>
//   );
// }

// export default Login;

