import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* margin-bottom: 10vh; */
  position: relative;
  /* min-height: 100vh; */
  height: 100vh;
  padding: 80px 40px;
`;

export const BGImage = styled.div`
  background: url("/images/login-background.jpg");
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const Logos = styled.div`
  max-width: 650px;
`;

export const LogoOne = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const SignUp = styled.button`
  padding: 25px 0px;
  background-color: #0063e5;
  border: none;
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin-top: 10px;
`;

export const LogoTwo = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;
`;
