/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react"
import Courses from "../components/Courses";
import Hello from "../components/Hello";
import MyCourses from "../components/MyCourses";
import { UserContext } from "../contexts/UserContext"

const Home = () => {
    const {user} = useContext(UserContext)
    const style = css`
        max-width: 83em;
        height: 200px;
        margin:0 auto;
        display: grid;
        grid-template-columns: 1fr 4.75fr 3.5fr;
        grid-gap:3vw;
    `;
    const divStyle = css`
    background-color: black;
    `;
    const styleSection = css`
        & > * {
            margin-bottom: 1.5em;
        }
    `;

    return user && (
        <div css={style}>
            <div css={divStyle}>

            </div>
            <section css={styleSection}>
                <Hello user={user.firstname} />
                <MyCourses />
                <Courses />
            </section>
            <section css={divStyle}>
            
            </section>
        </div>
    );
};

export default Home;
