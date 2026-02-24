import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import notice from '../data/noticeData';

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

const NoticeBox = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E2E8F0;
    line-height: 80px;
`;

const NoticeLink = styled(Link)`
    width: 900px;
    text-decoration: none;
    color: black;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 10px;
`;

const PaginationBtn = styled(Link)`
    width: 40px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    border: 1px solid #8B8273;
    background-color: ${props => props.active ? '#FF6B00' : 'white'};
    color: ${props => props.active ? 'white' : '#FF6B00'};
    cursor: pointer;
`;

export default function NoticePage() {
    const [searchParms] = useSearchParams();
    const currentPage = Number(searchParms.get('page')) || 1;
    const pageItem = 8;

    const indexOfLastItem = currentPage * pageItem;
    const indexOfFirstItem = indexOfLastItem - pageItem;
    const currentItems = notice.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(notice.length / pageItem);
  return (
    <div style={{width: '1200px', margin: '0 auto'}}>
      <div style={{marginTop:'20px'}}>
        <BreadCrumb to='/'>홈</BreadCrumb>
        <BreadCrumb to='/notice'>공지사항</BreadCrumb>
      </div>
      <h3 style={{fontSize: '24px', textAlign: 'center', margin: '20px 0 40px'}}>공지사항</h3>
      <div style={{borderTop: '1px solid #8B8273'}}>
        <div>
            {currentItems.map((notice) => (
                <NoticeBox key={notice.id}>
                    <p style={{width: '80px', fontSize: '18px', color: '#FF6B00'}}>{notice.no}</p>
                    <NoticeLink to={`/notice/${notice.id}`}>{notice.title}</NoticeLink>
                    <p style={{width: '120px', textAlign:'end', color: '#8B8273'}}>{notice.day}</p>
                </NoticeBox>
            ))}
        </div>
      </div>
      <Pagination>
        {Array.from({length: totalPages}, (_, index) => (
            <PaginationBtn key={index + 1} to={`?page=${index + 1}`} active={currentPage === index + 1}>
                {index + 1}
            </PaginationBtn>
        ))}
    </Pagination>
    </div>
  )
}
