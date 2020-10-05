/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import brainbook from "../img/brainbook.svg";
import Button from "./Button";

const Premium = ({ isPremium }) => {
    const style = css`
        width: 27.5em;
        padding: 1.5em 1.5em 1em;
        background-color: #f5f5f7;
        border-radius: 0.825em;
        position: relative;
    `;
    const styleHeadline = css`
        font-size: 1.5em;
        margin: 0;
    `;
    const styleText = css`
        margin-top: 0.5em;
    `;
    const styleImg = css`
        position: absolute;
        bottom: 2em;
        right: 4em;
    `;

    return isPremium ? (
        <article css={style}>
            <h1 css={styleHeadline}>Thanks for Your support!</h1>
            <p css={styleText}>
                We are happy for you <br /> to be part of the club.
            </p>
            <Button type="secondary" cornerSize="large" txt="Donate $$$" />
            <img css={styleImg} src={brainbook} alt="" />
        </article>
    ) : (
        <article css={style}>
            <h1 css={styleHeadline}>Learn even more!</h1>
            <p css={styleText}>
                Unlock premium features <br /> only for $9.99 per month.
            </p>
            <Button txt="Go Premium" type="secondary" cornerSize="large" />
            <img css={styleImg} src={brainbook} alt="" />
        </article>
    );
};

export default Premium;
