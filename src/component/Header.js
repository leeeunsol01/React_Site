import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import data from './data';

const HeaderBox = styled.header`
    background-color: white;
    border-bottom: 1px solid #8B8273;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const HeaderWrap = styled.div`
    width:1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between ;
    align-items: center;
`;

const HeaderLeft = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GnbBox = styled.div`
    width: 110px;
    padding: 15px 20px;
    background-color: white;
    border: 1px solid #8B8273;
    border-radius: 5px;
    position: absolute;
    top: 80px;
    left: -80px;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
`;

const GnbMenuLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: black;
    padding: 10px 0;
    font-weight: 400;
    line-height: 20px;
    &:hover{
        font-weight: 500;
        text-decoration: underline;
    }
`;

const Category = styled(Link)`
    height: 80px;
    line-height: 80px;
    font-weight: 500;
    text-decoration: none;
    color: black;
    margin-left: 20px;
    cursor: pointer;
    position: relative;
    &:hover{
        font-weight: 600;
        color: #FF6B00;
        ${GnbBox}{
            opacity: 1;
            visibility: visible;
        }
    }
`;

const StyledLink = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: black;
    margin-left: 20px;
    cursor: pointer;
    &:hover{
        font-weight: 600;
        color: #FF6B00;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`;

const SearchImg = styled.button`
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
`;

const SearchBox = styled.div`
    position: absolute;
    top: 80px;
    right: 21%;
    background-color: white;
    border: 1px solid #8B8273;
    border-radius: 5px;
    padding: 20px 40px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out;
    &.open {
        opacity: 1;
        visibility: visible;
    }
`;

const SearchInput = styled.input`
    width: calc(100% - 20px);
    height: 40px;
    border: 1px solid #8B8273;
    border-radius: 5px;
    padding: 0 10px;    
    margin-bottom: 20px;
`;

const SearchInputLink = styled(Link)`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #eee;
    text-decoration: none;
    color: black;
`;

const SearchLink = styled(Link)`
    text-decoration: none;
    color: black;
`;


export default function Header() {
    const [search, setSearch] = useState('');
    const [isSearchOpen, setIsSearchOpne] = useState(false);
    const searchRef = useRef(null);

    const closeSearch = () => {
        setIsSearchOpne(false);
        setSearch('');
    }

    useEffect(() => {
        const handleOutside = (e) => {
            if(searchRef.current && !searchRef.current.contains(e.target) && !e.target.closest('button')){
                setIsSearchOpne(false);
                setSearch('');
            }
        };
        if(isSearchOpen){
            document.addEventListener('mousedown', handleOutside);
        }
        return()=>{
            document.removeEventListener('mousedown', handleOutside);
        };
    }, [isSearchOpen]);

    const filterMenus= data.filter((item) => item.name.includes(search));
  return (
    <HeaderBox>
        <HeaderWrap>
            <HeaderLeft>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} style={{width: '211px', height: '35px'}} />
                </Link>
                <Category to='/sub/전체'>카테고리
                    <GnbBox>
                        <GnbMenuLink to='/sub/전체'>전체</GnbMenuLink>
                        <GnbMenuLink to='/sub/간편 도시락'>간편 도시락</GnbMenuLink>
                        <GnbMenuLink to='/sub/스페셜 도시락'>스페셜 도시락</GnbMenuLink>
                        <GnbMenuLink to='/sub/컵밥'>컵밥</GnbMenuLink>
                        <GnbMenuLink to='/sub/샐러드'>샐러드</GnbMenuLink>
                    </GnbBox>
                </Category>
                <StyledLink to='/brand'>브랜드 소개</StyledLink>
                <StyledLink to='/find'>매장 찾기</StyledLink>
                <StyledLink to='/notice'>공지사항</StyledLink>
            </HeaderLeft>
            <HeaderRight>
                <SearchImg onClick={(e) => setIsSearchOpne(!isSearchOpen)}>
                    <img src={process.env.PUBLIC_URL + '/images/zoom.png'} style={{width: '20px', height: '20px'}}/>
                </SearchImg>
                <SearchBox ref={searchRef} className={isSearchOpen ? 'open' : ''}>
                    <SearchInput type="text" placeholder='메뉴를 검색하세요.' value={search} onChange={(e) => setSearch(e.target.value)}/>
                        {search && (
                            <>
                                <div style={{border: '1px solid #ddd', borderRadius: '10px', maxHeight: '300px', overflow: 'auto'}}>
                                    {filterMenus.length > 0 ? (
                                        filterMenus.map((menu, i ) => (
                                            <SearchInputLink key={i} to={`/detail/${menu.id}`} onClick={closeSearch}>
                                                {menu.name}
                                            </SearchInputLink>
                                        ))
                                    ) : (
                                    <p style={{padding: '10px', color: '#FF6B00'}}>찾으시는 메뉴가 없습니다.</p>
                                    )}
                                </div>
                            </>
                        )}
                        <p style={{fontSize: '18px', marginTop: '20px', borderBottom: '1px solid #8B8273', paddingBottom: '10px', marginBottom: '10px'}}>인기 검색어</p>
                        <div style={{display: 'flex'}}>
                            <div style={{marginRight: '60px'}}>
                                {data.slice(0, 5).map((item,index) => (
                                    <div key={item.id} style={{display: 'flex', padding:'10px 0'}}>
                                        <p style={{marginRight: '5px'}}>{index + 1}.</p>
                                        <SearchLink to={`/detail/${item.id}`} onClick={closeSearch}>{item.name}</SearchLink>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {data.slice(5, 10).map((item,index) => (
                                    <div key={item.id} style={{display: 'flex', padding:'10px 0'}}>
                                        <p style={{marginRight: '5px'}}>{index + 6}.</p>
                                        <SearchLink to={`/detail/${item.id}`} onClick={closeSearch}>{item.name}</SearchLink>
                                    </div>
                                ))}
                            </div>
                        </div>
                </SearchBox>
                <StyledLink to='/login'>로그인</StyledLink>
                <StyledLink to='/sign'>회원가입</StyledLink>
                <StyledLink to='/cart'>장바구니</StyledLink>
            </HeaderRight>
        </HeaderWrap>
    </HeaderBox>
  )
}
