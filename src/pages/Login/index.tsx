import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import icon from '../../assets/google-icon.svg';

import { Container, FormContainer, Content, Background } from './styles';

const Login: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="Bico" />

      <FormContainer>
        <h1>LOGIN</h1>
        <form>
          <div className="inputMail">
            <FiMail size={20}/>
            <input name='email' placeholder='Email'/>
          </div>
          <div className="inputPassword">
            <FiLock size={20}/>
            <input name='password' placeholder='Senha' type='password'/>
          </div>
          <a href="forgot">Esqueci a senha</a>

          <button type='submit'>LOGIN</button>
        </form>
      </FormContainer>

      <p>Logar com</p>
      <button id="buttonGoogle"type='submit'><img src={icon}/></button>
    </Content>
  </Container>
);

export default Login;
