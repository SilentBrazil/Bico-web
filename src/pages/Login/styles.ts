import styled from 'styled-components';
import { shade } from 'polished';

import backgroundLogin from '../../assets/background-login.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  place-content: center;

  width: 100%;
  max-width: 750px;

  img {
    position: absolute;
    left: 90.41%;
    right: 4.17%;
    top: 4.71%;
    bottom: 85.65%;
  }

  #buttonGoogle {
    background: #FFF;
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: none;
    color: #000;
    left: 715px;
    top: 535px;
    box-shadow: 0px 2px 2px #000;
    transition: background-color 0.4s;


    &:hover{
      background: ${shade(0.06, '#FFF')};
    }

    img{
      position: relative;
      left: 0px;
      top: 3px;
    }
  }

  p {
    position: relative;
    top: 25px;
    left: -240px;
  }
`;

export const Background = styled.div`

  height: 100%;
  flex: 1;
  background: url(${backgroundLogin}) no-repeat center;
  background-size: cover;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    position: relative;
    right: 212px;
    bottom: 24px;
    font-weight: bold;
    font-size: 38px;
    line-height: 56px;
    color: #FBA216;
  }

  form{
    display: flex;
    flex-direction: column;
    position: relative;
    right: 28px;
    width: 450px;
    bottom: 50px;

    .inputMail {
      margin-top: 55px;
      width: 100%;
      color: #8B8b8b;
      box-shadow: 0px 1px 0px 0px #000000;
      display: flex;
      align-items: center;
      height: 60px;

      input {
        border: 0;

      }

      svg {
        margin-right: 12px;
      }
    }

    .inputPassword {
      margin-top: 18px;
      width: 100%;
      color: #8B8b8b;
      box-shadow: 0px 1px 0px 0px #000000;
      display: flex;
      align-items: center;
      height: 60px;

      input {
        border: 0;

      }

      svg {
        margin-right: 12px;
      }
    }
    a {
        position: relative;
        top: 9px;
        margin-left: 320px;

        font-size: 20px;
        text-decoration: none;
        line-height: 28px;

        color: #FBA216;
      }
    }

    button {
      position: relative;
      background-color: #FBA216;
      height: 51px;
      width: 170px;
      border-radius: 6px;
      border: 0;
      top: 50px;
      margin-left: 282px;

      /*Text Button*/
      color: #FFFFFF;
      font-size: 20px;
      font-weight: bold;

      transition: background-color 0.4s;

      &:hover{
        background: ${shade(0.06, '#FBA216')};
      }

    }

`;
