/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ txt, type, cornerSize }) => {
    const variants = {
        primary: "black",
        secondary: "red",
        succes: "green",
    };
    console.log(variants[type]);
    const corners = {
        small: "0.125rem",
        medium: "0.25rem",
        large: "1.5rem",
    };

    const style = css`
        font-size: 0.8125rem;
        font-weight: 700;
        width: 7.5rem;
        height: 2.5rem;
        border-radius: ${cornerSize ? corners[cornerSize] : "0.5rem"};
        background-color: ${type ? variants[type] : variants.primary};
        border: none;
        color: white;
        font-family: Roboto, sans-serif;

        .red {
            background-color: red;
        }
    `;
    return <button css={style}>{txt}</button>;
};

export default Button;
