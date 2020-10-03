/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CourseCounter = ({ no, txt }) => {
    const style = css`
        background-color: #f5f5f7;
        padding: 1em 1em;
        border-radius: 1.5em;
        display: flex;
        align-items: center;

        h2 {
            font-size: 4em;
            margin: 0 0.25em 0 0;
        }

        p {
            width: 100px;
            line-height: 1.7;
        }
    `;

    return (
        <section css={style}>
            <h2>{no}</h2>
            <p>{txt}</p>
        </section>
    );
};

export default CourseCounter;
