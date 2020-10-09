/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Course from "./Course";

const MyCourses = () => {
    const [current, setCurrent] = useState(0);
    const [watching, setWatching] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/data/watching.json")
            .then((response) => response.json())
            .then((result) => setWatching(result.watching));
    }, []);

    if (watching) console.log(watching);

    const forwardClick = () => {
        current === watching.length - 1
            ? setCurrent(0)
            : setCurrent(current + 1);
        //setCurrent(current + 1);
        //if (current === array.length - 1) setCurrent(0);
    };
    const backwardClick = () => {
        current === 0
            ? setCurrent(watching.length - 1)
            : setCurrent(current - 1);
        //setCurrent(current - 1);
        //if (current === 0) setCurrent(array.length - 1);
    };
    const style = css`
        display: flex;
    `;
    const styleButton = css`
        border: none;
        background-color: transparent;
        padding: 0;

        &:first-of-type {
            margin-left: 1em;
            margin-right: 1em;
        }
    `;
    return (
        watching && (
            <div css={style}>
                <Course
                    logo="react"
                    title={watching[current].name}
                    teacher={watching[current].teacher}
                    completion={watching[current].completion}
                />
                <button css={styleButton} onClick={backwardClick}>
                    <FontAwesomeIcon
                        icon={["far", "arrow-alt-circle-left"]}
                        size="3x"
                    />
                </button>
                <button css={styleButton} onClick={forwardClick}>
                    <FontAwesomeIcon
                        icon={["far", "arrow-alt-circle-right"]}
                        size="3x"
                    />
                </button>
            </div>
        )
    );
};

export default MyCourses;
