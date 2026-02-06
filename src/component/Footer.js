import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterMenu = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin-right: 20px;
`;

const FooterBold = styled(FooterMenu)`
    font-weight: 600;
`;

const Footertxt = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const Companytxt = styled(Footertxt)`
    font-weight: 400;
`;

export default function Footer() {
  return (
    <div style={{width: '100%',height:'240px', backgroundColor: '#F4EBD0', margin: '240px auto 0', paddingBottom: '20px'}}>
      <div style={{width: '1200px', margin: '0 auto', padding: '10px 0'}}>
        <FooterMenu to='/brand'>브랜드 소개</FooterMenu>
        <FooterMenu to='/'>이용약관</FooterMenu>
        <FooterBold to='/'>개인정보처리방침</FooterBold>
        <FooterMenu to='/'>제휴문의</FooterMenu>
        <FooterMenu to='/'>창업문의</FooterMenu>
      </div>
      <div style={{width:'1200px',display: 'flex', margin:'30px auto 20px'}}>
        <div style={{width: '40%'}}>
            <h3>고객센터</h3>
            <p style={{margin: '10px 0', fontSize:'24px', fontWeight: '600', color: '#FF6B00'}}>1566-3800</p>
            <Footertxt>평일 08:30~17:30 / 토요일 08:30~12:00</Footertxt>
            <Footertxt>점심시간 12:00~13:00</Footertxt>
            <Footertxt>일요일, 공휴일은 휴무입니다.</Footertxt>
        </div>
        <div style={{width: '60%'}}>
            <h3 style={{marginBottom:'10px'}}>채선당 도시락 & 샐러드</h3>
            <Companytxt>서울특별시 노원구 동일로 1602 3F (상계동 1021-14번지)</Companytxt>
            <Companytxt>대표 김익수</Companytxt>
            <Companytxt>사업자등록번호 127-81-90373</Companytxt>
            <Companytxt>[통합물류센터] 경기도 남양주시 진건읍 독정로 성지3길 30 (용정리 67번지)</Companytxt>
            <Footertxt style={{marginTop: '20px'}}>Copyright ©2021 CHESUNDANG All Rights Reserved.</Footertxt>
        </div>
      </div>
    </div>
  )
}
