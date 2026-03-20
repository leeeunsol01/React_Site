import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadCrumb = styled(Link)`
    text-decoration: none;
    color: #8B8273;
    font-size: 14px;
    font-weight: 300;
    margin-right: 20px;
    position: relative;
    &::before{
        content: '>';
        position: absolute;
        top: 0px;
        right: -15px;
    }
    &:last-child::before{
        content: none;
    }
`;

const LoignInput = styled.input`
    width: 350px;
    height: 50px;
    padding: 0 10px;
    border: 1px solid #8B8273;
    border-radius: 5px;
    display: block;
    margin: 0 auto 20px;
`;  

const LoginBtn = styled.button`
    width: 370px;
    height: 50px;
    border: none;
    background-color: #243B55;
    border-radius: 5px;
    color: white;
    display: block;
    margin: 0 auto 20px;
    cursor: pointer;
`;

const SignLink = styled(Link)`
    text-decoration: none;
    color: #8B8273;
`;

export default function Login() {
  return (
    <div style={{width: '1200px', margin: '0 auto'}}>
        <div style={{marginTop:'20px'}}>
            <BreadCrumb to='/'>홈</BreadCrumb>
            <BreadCrumb to={'/login'}>로그인</BreadCrumb>
        </div>
        <h3 style={{fontSize: '32px', margin: '40px 0 60px', textAlign: 'center'}}>로그인</h3>
        <div>
            <LoignInput placeholder='아이디' />
            <LoignInput placeholder='비밀번호' />
        </div>
        <LoginBtn>로그인</LoginBtn>
        <ul style={{listStyle:'none', display: 'flex', justifyContent:'center', fontSize: '14px', color: '#8B8273'}}>
            <li>아이디 찾기</li>
            <li style={{margin: '0 20px'}}>비밀번호 찾기</li>
            <li><SignLink to={'/sign'}>회원가입</SignLink></li>
        </ul>
    </div>
  )
}
