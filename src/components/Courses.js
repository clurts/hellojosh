/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Router } from "@reach/router";
import CourseLink from "./CourseLink";
import CourseList from "./CourseList";

const Courses = () => {
    const styleHeadline = css`
        margin: 0;
    `;
    return (
        <div>
            <h2 css={styleHeadline}>Courses</h2>

            <nav>
                <CourseLink to="./">All Courses</CourseLink>
                <CourseLink to="newest">Newest</CourseLink>
                <CourseLink to="top">Top Rated</CourseLink>
                <CourseLink to="popular">Most popular</CourseLink>
            </nav>

            <Router>
                <CourseList path="/" type="all" />
                <CourseList path="newest" type="newest" />
                <CourseList path="top" type="top" />
                <CourseList path="popular" type="popular" />
            </Router>
        </div>
    );
};

export default Courses;
