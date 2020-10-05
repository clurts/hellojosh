/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "@reach/router";

const style = css`
    text-decoration: none;
    font-family: "Baloo Bhai 2", cursive;
    font-weight: bold;

    &:not(last-of-type) {
        margin-right: 2em;
    }
`;

const CourseLink = (props) => (
    <Link
        css={style}
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                style: {
                    color: isCurrent ? "black" : "grey",
                },
            };
        }}
    />
);
export default CourseLink;
