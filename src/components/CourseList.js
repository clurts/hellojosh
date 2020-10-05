/** @jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import Course from "./Course";

const CourseList = (props) => {
    const style = css`
        list-style: none;
        padding: 0;
    `;
    const styleLi = css`
        margin: 1em 0;
    `;

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3000/data/${props.type}.json`)
            .then((response) => response.json())
            .then((result) => setData(result[props.type]));
    }, [props.type]);

    console.log(data);

    return (
        <ul css={style}>
            {data &&
                data.map((course) => (
                    <li css={styleLi} key={course.id}>
                        <Course
                            logo="react"
                            title={course.name}
                            teacher={course.teacher}
                            duration={course.duration}
                            rating={course.rating}
                        />
                    </li>
                ))}
        </ul>
    );
};

export default CourseList;
