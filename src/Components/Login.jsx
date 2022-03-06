import React, { useEffect } from "react";
import {
  selectUserName,
  setUserLoginDetails,
  setSignOutState,
} from "../feature/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";

//style component
import {
  Container,
  Content,
  BGImage,
  Logos,
  LogoOne,
  SignUp,
  Description,
  LogoTwo,
} from "./Styles Compoennts/Login";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);

  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       setUser(user);
  //       history.push("/home");
  //     }
  //   });
  // }, [userName]);

  const handleAuth = () => {
    // if (!userName) {
    //   auth
    //     .signInWithPopup(provider)
    //     .then((result) => setUser(result.user))
    //     .catch((error) => console.log(error));
    // } else if (userName) {
    //   auth
    //     .signOut()
    //     .then(() => {
    //       dispatch(setSignOutState());
    //       history.push("/");
    //     })
    //     .catch((error) => console.log(error));
    // }
    history.push("/home");
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Container>
      <Content>
        <Logos>
          <LogoOne src="/images/cta-logo-one.svg" alt="logo one" />
          <SignUp onClick={handleAuth}>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <LogoTwo src="/images/cta-logo-two.png" alt="logo two" />
        </Logos>
        <BGImage />
      </Content>
    </Container>
  );
}
