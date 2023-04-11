import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';


import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import ExpertScreen from "../src/components/ExpertScreen";

import LoginScreen from "./components/LoginScreen";
import Home from "./Home";

const App = () => {
  const profile = JSON.parse(window.localStorage.getItem("profile"));
  const [isloggedin, setIsloggedin] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  useEffect(() => {
    setIsloggedin(JSON.parse(localStorage?.getItem("profile")));
  }, []);

  return (
    // <ExpertScreen/>
    <Router>
      {/* Server */}
      {/* <GoogleOAuthProvider clientId="925153524005-hvdvlaka8eqn6idalnu510p7v0n4a04r.apps.googleusercontent.com"> */}
      {/* Local Host */}
      <GoogleOAuthProvider clientId="925153524005-62air23cner9cv43ojtic6leqrtm0kak.apps.googleusercontent.com">
      <Routes>
        {/* <Route exact path="/">
          {false ? <Navigate to="/" /> : <LoginScreen />}
        </Route> */}
        <Route path="/auth" element={<LoginScreen />} />
        <Route path="/*" element={<Home />} />
      </Routes>
        </GoogleOAuthProvider>;
    </Router>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import { Routes, Route,useHistory, Link, BrowserRouter as Router } from "react-router-dom";

// import "./App.css";
// import QuestionFeeds from "./components/QuestionFeeds";
// import Communities from "./components/Communities";
// import Bookmarks from "./components/Bookmarks";
// import MyQuestions from "./components/MyQuestions";
// import LoginScreen from "./components/LoginScreen";
// import ExpertScreen from "./components/ExpertScreen";

// const App = () => {
//   const [aske, setAske] = useState(false);
//   const [askc, setAskc] = useState(false);
//   const [isloggedin,setIsloggedin]=useState(JSON.parse(localStorage.getItem('profile')));

//   useEffect(()=>{
//     const user = isloggedin?.name

//     setIsloggedin(JSON.parse(localStorage.getItem('profile')))
//   },[localStorage.getItem('profile')]);

//   return (
//     <Router>
//       <>
//       {
//         isloggedin?(
//           <>
//         <Sidebar />

//         <Navbar aske={aske} setAske={setAske} askc={askc} setAskc={setAskc} />
//         <div className="AppBody">
//           <Routes>
//             <Route
//               path="/"
//               element={<QuestionFeeds aske={aske} askc={askc}  />}
//             />
//             <Route path="/communities" element={<Communities  />} />
//             <Route path="/bookmarks" element={<Bookmarks  />} />
//             <Route path="/myquestions" element={<MyQuestions  />} />
//             <Route path="/auth" element={<LoginScreen/>}/>
//           </Routes>
//         </div>

//           </>
//         ):(
//           <LoginScreen/>
//           // <ExpertScreen/>
//         )
//       }
//       </>
//     </Router>
//   );
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import {
//   Routes,
//   Route,
//   useHistory,
//   Link,
//   BrowserRouter as Router,
// } from "react-router-dom";

// import "./App.css";
// import QuestionFeeds from "./components/QuestionFeeds";
// import Communities from "./components/Communities";
// import Bookmarks from "./components/Bookmarks";
// import MyQuestions from "./components/MyQuestions";
// import LoginScreen from "./components/LoginScreen";
// import ExpertScreen from "./components/ExpertScreen";
// import { getFullProfile } from "../src/api/index.js";

// const App = () => {
//   const [aske, setAske] = useState(false);
//   const [askc, setAskc] = useState(false);
//   const [isloggedin, setIsloggedin] = useState(
//     JSON.parse(localStorage.getItem("profile"))
//   );

//   const [searchData, setSearchData] = useState([]);

//   const profile = JSON.parse(window.localStorage.getItem("profile"));
//   const [userBookmarks,setUserBookmarks]=useState(null);
//   const [userCommunities,setUserCommunities]=useState(null);
//   const [userQuestions,setUserQuestions]=useState(null);

//   const getProfileData = async()=>{
//     const userCurrentData = await getFullProfile(profile.googleId).then((e)=>{
//       // setUserFullProfile(e.data);
//       // console.log();
//       console.log("e.data",e.data[0]);
//       setUserBookmarks(e.data[0].bookmarks)
//       setUserCommunities(e.data[0].communities)
//       setUserQuestions(e.data[0].myQuestions)
//     });
//     // console.log(userCurrentData.data[0]);
//     // setUserFullProfile(userCurrentData.data[0]);

//   }

//   useEffect(()=>{
//     getProfileData();
//   },[])

//   useEffect(() => {

//     setIsloggedin(JSON.parse(localStorage.getItem("profile")));
//   }, []);

//   // console.log(isloggedin)
//   if(isloggedin===null){
//     return (<LoginScreen/>)
//   }

//   return (
//     // <ExpertScreen/>
//     <Router>
//       <>
//         <Sidebar />

//         <Navbar aske={aske} setAske={setAske} askc={askc} setAskc={setAskc} searchData={searchData} setSearchData={setSearchData}  />
//         <div className="AppBody">
//           <Routes>
//             <Route
//               path="/"
//               element={<QuestionFeeds bookmarks={userBookmarks} aske={aske} askc={askc} searchData={searchData} setSearchData={setSearchData}/>}
//             />
//             <Route path="/communities" element={<Communities userCommunities={userCommunities}/>} />
//             <Route path="/bookmarks" element={<Bookmarks bookmarks={userBookmarks}/>} />
//             <Route path="/myquestions" element={<MyQuestions myQuestions={userQuestions} bookmarks={userBookmarks}/>} />
//             <Route path="/auth" element={<LoginScreen />} />
//           </Routes>
//         </div>
//       </>
//     </Router>
//   );
// };

// export default App;
