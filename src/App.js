import React, { Fragment, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import Button from "./components/Button";
import CourseCounter from "./components/CourseCounter";
import Detail from "./components/Detail";
import CourseTitle from "./components/CourseTitle";
import Course from "./components/Course";
import Notification from "./components/Notification";
import Hello from "./components/Hello";
import Premium from "./components/Premium";

library.add(faFire, faClock, faReact, faBell);

function App() {
    const [msg, setMsg] = useState(1);
    console.log(msg);
    return (
        <Fragment>
            <h1>Hej...</h1>
            <CourseCounter no="11" txt="courses completed" />
            <CourseCounter no="4" txt="courses in progress" />
            <br />
            <br />
            <br />
            <Hello firstname="Josh" />
            <br />
            <br />
            <input
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <br />
            <br />
            <br />
            <Premium isPremium={false} />
            <br />
            <br />
            <br />
            <Notification unread={msg} />
            <br />
            <br />
            <br />
            <Course
                logo="react"
                title="Mastering React"
                teacher="Carsten Lund"
                duration="17h 59m"
                rating="5.0"
            />
        </Fragment>
    );
}

export default App;
