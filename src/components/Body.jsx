import { LoginBox } from "./LoginBox";
import styled from "styled-components";
import { SignupBox } from "./SignupBox";


export function Body({ display, handleDisplay, handleChange, number, signup, handleSignup }) {

  return (
    <Layout>
      <Welcome>Welcome to Yatra!</Welcome>

      {signup ? (<><Please>We just need a few more details to create your Yatra account</Please>
        <SignupBox number={number} /></>) : (<><Please>Please Login/Register using your Email/Mobile to continue</Please><LoginBox
          handleDisplay={handleDisplay}
          handleChange={handleChange}
          number={number}
          handleSignup={handleSignup}
        /></>)}

    </Layout>
  );
}

const Layout = styled.div`
  width: 62%;
  margin: 2% auto;
`;

const Welcome = styled.div`
  text-align: center;
  font-size: 24px;
`;

const Please = styled.div`
  margin: 1% 0%;
  text-align: center;
`;
