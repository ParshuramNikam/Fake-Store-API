import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import PageHead from './PageHead';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingScreen = ({loading}) => {
    return (
        <>
            <PageHead title={'Fake Store API'}/>
            <section className='w-screen h-screen flex justify-center items-center'>
                <MoonLoader color={"#4A90E2"} loading={loading} css={override} size={100} />
            </section>
        </>
    )
}

export default LoadingScreen
