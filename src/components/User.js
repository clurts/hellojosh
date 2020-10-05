/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment } from "react";
import Courses from "./Courses";
import Hello from "./Hello";

import Graph from "./Graph";
import MyCourses from "./MyCourses";

const User = ({ firstname }) => {
    console.log(firstname);
    return (
        <Fragment>
            <Hello firstname={firstname} />
            <Graph />
            <MyCourses />
            <Courses />
        </Fragment>
    );
};

export default User;
