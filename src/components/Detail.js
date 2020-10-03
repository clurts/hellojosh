/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = ({ icon, detail }) => {
    const style = css`
        display: flex;
    `;
    const styleParagraph = css`
        margin: 0 0 0 0.5em;
    `;
    return (
        <span css={style}>
            <FontAwesomeIcon icon={icon} />
            <p css={styleParagraph}>{detail}</p>
        </span>
    );
};

export default Detail;
