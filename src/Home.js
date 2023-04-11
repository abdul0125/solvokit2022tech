import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";
import QuestionFeeds from "./components/QuestionFeeds";
import Communities from "./components/Communities";
import Bookmarks from "./components/Bookmarks";
import MyQuestions from "./components/MyQuestions";

import ExpertScreen from "./components/ExpertScreen";

import { getFullProfile } from "../src/api/index.js";

const Home = () => {
  const [aske, setAske] = useState(false);
  const [askc, setAskc] = useState(false);
  const [isloggedin, setIsloggedin] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  const [searchData, setSearchData] = useState([]);

  const naviagte = useNavigate();

  // const profile = JSON.parse(window.localStorage.getItem("profile"));
  const token = JSON.parse(window.localStorage.getItem("token"));
  const [userBookmarks, setUserBookmarks] = useState(null);
  const [userCommunities, setUserCommunities] = useState(null);
  const [userQuestions, setUserQuestions] = useState(null);
  const [user, setUser] = useState({
    mobile:"",
    college:""
  });

  const getProfileData = async () => {
    const userCurrentData = await getFullProfile(token).then((e) => {
      // setUserFullProfile(e.data);
      // console.log();
      console.log("e.data", e.data[0]);
      setUserBookmarks(e.data[0].bookmarks);
      setUserCommunities(e.data[0].communities);
      setUserQuestions(e.data[0].myQuestions);
      setUser({...user,mobile:e.data[0].mobile,college:e.data[0].college,id:e.data[0]._id})
    });
    // console.log(userCurrentData.data[0]);
    // setUserFullProfile(userCurrentData.data[0]);
  };

  useEffect(() => {
    if(!token){
      naviagte('/auth')
      return
    }
    getProfileData();
  }, []);

  return (
    // <ExpertScreen/>

    <>
      <Sidebar user={user} />

      <Navbar
        aske={aske}
        setAske={setAske}
        askc={askc}
        setAskc={setAskc}
        searchData={searchData}
        setSearchData={setSearchData}
        user={user}
      />
      <div className="AppBody">
        <Routes>
          <Route
            path="/"
            element={
              <QuestionFeeds
                bookmarks={userBookmarks}
                aske={aske}
                askc={askc}
                searchData={searchData}
                setSearchData={setSearchData}
              />
            }
          />
          <Route
            path="/communities"
            element={<Communities userCommunities={userCommunities} />}
          />
          <Route
            path="/bookmarks"
            element={<Bookmarks bookmarks={userBookmarks} />}
          />
          <Route
            path="/myquestions"
            element={
              <MyQuestions
                myQuestions={userQuestions}
                bookmarks={userBookmarks}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default Home;
