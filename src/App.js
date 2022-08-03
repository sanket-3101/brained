import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import App from "./Pages/Splash/App";
import Login from "./Pages/Login/Login";
import Sessions from "./Pages/Sessions/index";
import SessionList from "./Pages/Sessions/Sessionlist";
import DashboardPage from "./Pages/Dashboard/Dashboard";
import Live from "./Pages/Live/live";
import SessionsAdd from "./Pages/Sessions/SessionsAdd";
import Report from "./Pages/Reports/report";
import io from "socket.io-client";
import { NotificationManager } from "react-notifications";
import { useSelector, useDispatch } from "react-redux";
import { setBlinkData } from "./redux/action/BlinkAction";
import { setLiveData } from "./redux/action/SessionAction";
import Quiz from "./Pages/Quiz/quiz";
import OverAll from "./Pages/OverAll";
import Blink from "./Pages/Blink";
import ReportNew from "./Pages/ReportNew";
import axios from "axios";
import Subject from "./Pages/Subject";
import Chapter from "./Pages/Chapter";
import User from "./Pages/User";
function AppRoutes() {
  const { sessionDetails, livedata } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(async () => {
    checkInitial();
  }, []);

  const checkInitial = async () => {
    const details = await localStorage.getItem("userDetails");

    if (details) {
      const new_details = JSON.parse(details);
      axios.defaults.headers.common.profileId = new_details.id;
    } else {
      navigate("/user");
    }
  };
  const setNewData = (focusval) => {
    console.log("focus data ==>", focusval, livedata);
    let temp = livedata;
    const index = livedata.findIndex(
      (item) => item.deviceid === focusval.deviceid
    );
    console.log("index ==>", index);
    if (index != -1) {
      temp[index] = focusval;
    } else {
      if (temp.length === 0) {
        temp.push(focusval);
      } else {
        temp[temp.length] = focusval;
      }
    }
    dispatch(setLiveData([...temp]));
    // setLiveData([...temp]);
  };
  const handleBlinkData = (data) => {
    dispatch(setBlinkData(data));
  };

  useEffect(() => {
    console.log("Effect Called ===>", sessionDetails);
    let socket;
    if (sessionDetails) {
      console.log("url ==>", sessionDetails.url);
      socket = io(sessionDetails.url);
      // console.log(socket);

      socket.on("connect", function () {
        console.log("Socket Connected ==>", socket.connected); // true
      });

      // To join the room
      socket.emit("join", {
        username: "Sejpalsinh",
        room: sessionDetails.session_id,
      });
      // Will get data in {'deviceid': deviceid,'sessionid': sessionid,'focus':focus} format
      socket.on("focusval", (focusval) => {
        // setLoader(false);
        setNewData(focusval);
      });
      socket.on("blinkval", function (blinkval) {
        handleBlinkData(blinkval);
      });
      return () => {
        socket.on("disconnect", () => {
          console.log(socket.connected); // false
        });
      };
      // conosle.log('Ses')
    } else {
      // setLoader(false);
      // NotificationManager.error("No Session Available!!");
    }
  }, [sessionDetails]);
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboardpage" element={<DashboardPage />} />
      <Route path="/sessions" element={<Sessions />} />
      <Route path="/sessions/:id" element={<SessionsAdd />} />
      <Route path="/live" element={<Live />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/report" element={<ReportNew />} />
      <Route path="/daily-report" element={<Report />} />
      <Route path="/overall" element={<OverAll />} />
      <Route path="/blink" element={<Blink />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/chapter" element={<Chapter />} />
    </Routes>
  );
}

export default AppRoutes;
