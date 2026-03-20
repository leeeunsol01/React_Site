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

const SignP = styled.p`
    width: 80px;
    margin-right: 20px;
`;

const SignInput = styled.input`
    width: 350px;
    height: 30px;
    border: 1px solid #8B8273;
    border-radius: 5px;
    padding: 0 10px;
`;

const AddressInput = styled(SignInput)`
    width: 100px;
    height: 30px;
    margin-right: 20px;
`;

const AddressBtn = styled.button`
    border: none;
    background-color: #243B55;
    color: white;
    width: 85px;
    height: 32px;
    border-radius: 6px;
    cursor: pointer;
`;

const TellInput = styled(SignInput)`
    width: 90px;
    height: 30px;
    margin-right: 20px;
    &:last-child{
        margin-right: 0;
    }
`;

const SignBtn = styled.button`
    width: 350px;
    height: 50px;
    border: none;
    background-color: #243B55;
    border-radius: 5px;
    color: white;
    display: block;
    margin: 60px auto 0;
    cursor: pointer;
`;

export default function SignUp() {
  return (
    <div style={{width: '1200px', margin: '0 auto'}}>
        <div style={{marginTop:'20px'}}>
            <BreadCrumb to='/'>홈</BreadCrumb>
            <BreadCrumb to={'/sign'}>회원가입</BreadCrumb>
        </div>
        <h3 style={{fontSize: '32px', margin: '40px 0 60px', textAlign: 'center'}}>회원가입</h3>
        <div style={{width: '590px', margin: '0 auto', border: '1px solid #8B8273', padding: '40px 0 20px'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
                <SignP>아이디</SignP>
                <SignInput />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px'}}>
                <SignP>비밀번호</SignP>
                <SignInput />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
                <SignP>주소</SignP>
                <AddressInput />
                <AddressInput />
                <AddressBtn>우편번호</AddressBtn>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px'}}>
                <SignP></SignP>
                <SignInput />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
                <SignP>휴대폰 번호</SignP>
                <TellInput />
                <TellInput />
                <TellInput />
            </div>
        </div>
        <SignBtn>회원가입</SignBtn>
    </div>
  )
}
