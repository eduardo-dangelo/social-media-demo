import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import LoginUser from '../../components/LoginUser';

const LoginContainer = styled.div`
  height: 100%;
  position: relative;
  //border: 1px dashed red;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LoginBox = styled.div`
  border: 1px solid #282c34;
  border-radius: 0;
  overflow: hidden;
  //padding: 15px;
  min-width: 400px;
  min-height: 150px;
  margin: 30px 15px;
  background: rgba(255,255,255,0.6);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: .3s ease;
  
  &:hover {
    background: rgba(255,255,255,1);
    box-shadow: 0 2px 12px rgba(0,0,0,0.2);
  }
`;

const BoxHeader = styled.div`
  background: #282c34;
  color: gray;
  padding: 10px 15px;
  width: 100%;
`;

const BoxContent = styled.div`
  padding: 15px;
`;

class Login extends PureComponent {
  render() {
    return (
      <LoginContainer>
        <LoginBox>
          <BoxHeader>
            <FaUser/>
            Login
          </BoxHeader>
          <BoxContent>
            <LoginUser/>
          </BoxContent>
        </LoginBox>
      </LoginContainer>
    );
  }
}

export default Login;