/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = css`
    padding-left: 5.5em;
    height: 4em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    figure {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        height: 4em;
        width: 4em;
        border-radius: 0.5em;
    }
    h3 {
        font-size: 1em;
        margin: 0;
    }
    p {
        font-size: 0.8125em;
        margin: 0;
    }
`;
const CourseTitle = ({ logo, title, teacher }) => {
    return (
        <article css={style}>
            <figure>
                <FontAwesomeIcon icon={["fab", `${logo}`]} size="3x" />
            </figure>
            <h3>{title}</h3>
            <p>by {teacher}</p>
        </article>
    );
};

export default CourseTitle;
