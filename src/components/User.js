/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import Courses from "./Courses";
import Hello from "./Hello";
import MyCourses from "./MyCourses";

const User = () => {
    return (
        <Fragment>
            <Hello />
            <MyCourses />
            <Courses />
        </Fragment>
    );
};

export default User;
