/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import userDrawing from "../img/user.svg";

const Hello = ({ user }) => {

    const style = css`
        height: 10em;
        padding-left: 2em;
        background-color: #f5f5f7;
        border-radius: 0.875em;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
    const styleImg = css`
        position: absolute;
        bottom: 0;
        left: 21.25em;
    `;
    const styleHeadline = css`
        font-size: 2.25em;
        margin: 0;
    `;
    const styleGreeting = css`
        margin: 0;
    `;
    return (
        <article css={style}>
            <h1 css={styleHeadline}>Hello {user}!</h1>
            <p css={styleGreeting}>It’s good to see you again.</p>
            <img
                src={userDrawing}
                css={styleImg}
                alt="Sample user illustration"
            />
        </article>
    );
};

export default Hello;
