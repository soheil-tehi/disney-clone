import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

export const Logo = styled.div`
  width: 80px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-right: auto;
  margin-left: 25px;
  align-items: center;
  height: 100%;
  @media (max-width: 300px) {
    margin-left: 0px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    @media (max-width: 470px) {
      padding: 0 5px;
    }

    img {
      width: 20px;
      height: 20px;
      min-width: 20px;
    }

    span {
      align-items: center;
      position: relative;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        height: 2px;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        opacity: 0;
        left: 0px;
        bottom: -6px;
        width: auto;
        height: 2px;
      }

      @media (max-width: 850px) {
        display: none;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1;
        visibility: visible;
      }
    }
  }

  /* @media (max-width: 768px){
        display: none;
    } */
`;

export const Login = styled.a`
  /* background-color: rgba(0, 0, 0, 0.6); */
  /* padding: 8px 16px; */
  /* height:40px ;
  text-transform: uppercase; */
  /* letter-spacing: 1.5px; */
  /* border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;  */

  /* &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  } */
`;

export const UserImg = styled.img`
  height: 100%;
  border-radius: 15px;
  @media (max-width: 270px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 245px) {
    display: none;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 50px;
  right: -22px;
  text-align: center;
  background: rgba(19, 19, 19);
  border: 1px solid red;
  border-radius: 4px;
  /* padding: 10px; */
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  width: 96px;
  opacity: 0;
  /* transition: all ease 0.2s; */

  &:hover {
    background-color: #ccc;
    color: rgba(19, 19, 19);
  }
`;

export const SignOut = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 0.5s;
    }
  }
`;
