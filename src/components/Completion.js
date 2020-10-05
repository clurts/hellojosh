/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
const Completion = ({ percentage }) => {
    const [comClass, setComClass] = useState(null);

    useEffect(() => {
        if (percentage <= 99) setComClass("threequarters");
        if (percentage <= 74) setComClass("half");
        if (percentage <= 25) setComClass("onequarter");
        if (percentage == 0) setComClass(null);
    }, [comClass, percentage]);
    const style = css`
        width: 40px;
        height: 40px;
        box-sizing: border-box;
        border-width: 2px;
        border: solid black;
        transform: rotate(45deg);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.threequarters {
            border-top-color: transparent;
        }
        &.half {
            border-top-color: transparent;
            border-right-color: transparent;
        }
        &.onequarter {
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
        }
        &.notstarted {
            border-color: transparent;
        }
    `;
    const stylePercentage = css`
        font-size: 0.8125rem;
        transform: rotate(-45deg);
    `;
    return (
        <div css={style} className={comClass && comClass}>
            <p css={stylePercentage}>{percentage}%</p>
        </div>
    );
};

export default Completion;
