/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "./Button";
import CourseTitle from "./CourseTitle";
import Detail from "./Detail";

const Course = ({ logo, title, teacher, duration, rating }) => {
    const style = css`
        height: 5em;
        background-color: #f5f5f7;
        border-radius: 0.875em;
        padding-left: 0.5em;
        padding-right: 1.5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    return (
        <div css={style}>
            <CourseTitle logo={logo} title={title} teacher={teacher} />
            <Detail icon="clock" detail={duration} />
            <Detail icon="fire" detail={rating} />
            <Button txt="View course" />
        </div>
    );
};

export default Course;
