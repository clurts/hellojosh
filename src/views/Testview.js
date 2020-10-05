/** @jsx jsx */
import { Fragment, useState } from "react";
import { jsx } from "@emotion/core";
import CourseCounter from "../components/CourseCounter";
import Course from "../components/Course";
import Notification from "../components/Notification";
import Hello from "../components/Hello";
import Premium from "../components/Premium";

const Testview = () => {
    const [msg, setMsg] = useState(1);
    return (
        <Fragment>
            <h1>Hej...</h1>
            <CourseCounter no="11" txt="courses completed" />
            <CourseCounter no="4" txt="courses in progress" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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
};

export default Testview;
