/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";

const MyCourses = () => {
    const [current, setCurrent] = useState(0);
    let array = ["first", "second", "third", "fourth"];
    return (
        <div>
            <h1>{array[current]}</h1>
            <button onClick={() => setCurrent(current + 1)}>Frem</button>
        </div>
    );
};

export default MyCourses;
