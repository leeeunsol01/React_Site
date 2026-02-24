import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import noticeData from '../data/noticeData';

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

const ListLink = styled(Link)`
    display: block;
    width: 360px;
    height: 50px;
    text-decoration: none;
    border: 1px solid #8B8273;
    color: black;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
    margin: 0 auto;
    transition: all 0.3s ease;
    &:hover{
        background-color: #FF6B00;
        color: white;
    }
`;


export default function NoticeDetail() {
    const {id} = useParams();
    const notice = noticeData.find(item => item.id === Number(id));
  return (
    <div style={{width: '1200px', margin: '0 auto'}}>
        <div style={{marginTop:'20px'}}>
            <BreadCrumb to='/'>홈</BreadCrumb>
            <BreadCrumb to={'/notice'}>공지사항</BreadCrumb>
        </div>
        <h3 style={{fontSize: '32px', margin: '20px 0 40px'}}>공지사항</h3>
        <div key={notice.id} style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #8B8273', padding: '20px 0', margin: '20px 0'}}>
            <h3>{notice.title}</h3>
            <p style={{color: '#8B8273'}}>{notice.day}</p>
        </div>
        <div style={{whiteSpace: 'pre-line', margin: '40px 0 60px', borderBottom: '1px solid #8B8273', paddingBottom: '40px'}}>
            {notice.txt}
        </div>
        <ListLink to={'/notice'}>목록보기</ListLink>
    </div>
  )
}
