    import React from 'react'
    import { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import styled from 'styled-components';

    import storeData from './findData';

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

    const SearchBox = styled.div`
        height: 50px;
        display: flex;
        align-items: center;
        border-top: 1px solid #8B8273;
        background-color: white;
        padding: 25px 30px;
    `;

    const SelectStyle = styled.select`
        width: 140px;
        height: 50px;
        border: 1px solid #8B8273;
        padding: 10px;
        cursor: pointer;
        margin-right: 20px;
    `;

    const SearchInput = styled.input`
        width: 240px;
        height: 50px;
        border: 1px solid #8B8273;
        padding: 0 10px;
        cursor: pointer;
        margin-right: 20px;
    `;

    const FindBtn = styled.button`
        width: 170px;
        height: 50px;
        border: none;
        background-color: #243B55;
        color: white;
        cursor: pointer;
    `;

    const KakaoMap = styled.div`
        width: 1200px;
        height: 500px;
        margin-bottom: 50px;
        img {
            max-width: none !important;
            height: auto !important;
        }
    `;

    const StoreFlex = styled.div`
        display: flex; 
        flex-wrap: wrap; 
    `;

    const StoreBox = styled.div`
        width: 567px;
        height:631px; 
        padding: 10px;
        border: 1px solid #8B8273;
        border-radius: 5px;
        background-color:  #243B55; 
        margin-right: 20px;
        margin-top: 20px;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
        &.show {
            opacity: 1;
            transform: translateY(0);
        }
        &:nth-child(even) {
            margin-right: 0;
        }
    `;

    export default function FindPage() {
        const city = ['서울', '부산', '인천', '강원', '경기', '경남', '경북', '전남', '전북', '제주', '충남', '충북'];
        const [selectCity, setSelectCity] = useState('');
        const [search, setSearch] = useState('');
        const [fillterData, setFillterData] = useState([]);

        useEffect(() => {
            setFillterData(storeData);
        }, []);

        const handleSearch = () => {
            const result = storeData.filter((store) => {
                const isCityEmpty = selectCity === '' || selectCity === '시/도 선택';
                const matchCity = isCityEmpty || selectCity === '' || store.city === selectCity;
                const isSearchEmpty = search === '';
                const matchSearch = isSearchEmpty || store.name.includes(search) || store.address.includes(search);
                return matchCity && matchSearch;
            });
            setFillterData(result);
        };

        useEffect(() => {
            if (!window.kakao) return;

            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                    level: 10,
                };

                const map = new window.kakao.maps.Map(container, options);
                map.relayout();
            });
        }, []);

        useEffect(()=> {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        entry.target.classList.add('show');
                    }
                });
            },
            {threshold: 0.1}
        );
        const items = document.querySelectorAll('.storeShow');
        items.forEach(item => observer.observe(item));

        return() => observer.disconnect();
        }, [fillterData]);

    return (
        <div style={{width: '1200px', margin:'0 auto 200px'}}>
        <div style={{marginTop:'20px'}}>
            <BreadCrumb to='/'>홈</BreadCrumb>
            <BreadCrumb to='/find'>매장 찾기</BreadCrumb>
        </div>
        <h3 style={{fontSize: '24px', margin: '20px 0 40px', textAlign: 'center'}}>매장 찾기</h3>
        <SearchBox>
            <SelectStyle onChange={(e) => setSelectCity(e.target.value)}>
                <option>시/도 선택</option>
                {city.map((city) => (
                    <option>{city}</option>
                ))}
            </SelectStyle>
            <SearchInput placeholder='검색어 입력' value={search} onChange={(e) => setSearch(e.target.value)} />
            <FindBtn onClick={handleSearch} onKeyDown={(e) => {if (e.key === 'Enter') handleSearch();}}>매장 찾기</FindBtn>
        </SearchBox>
        <KakaoMap id="map"></KakaoMap>
        <StoreFlex>
                {fillterData.length > 0? (
                    fillterData.map((store, index) => (
                        <StoreBox key={index} className='storeShow'>
                            <img src={store.storeImg} style={{width: '567px', height:'481px', display: 'block', margin: '0 auto'}} />
                            <div style={{color: 'white', padding: '20px'}}>
                                <h3>{store.name}</h3>
                                <div style={{display: 'flex', margin: '10px 0'}}>
                                    <p style={{fontWeight: '600', marginRight: '20px'}}>주소</p>
                                    <p>{store.address}</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p style={{fontWeight: '600', marginRight: '20px'}}>전화</p>
                                    <p>{store.tell}</p>
                                </div>
                            </div>
                        </StoreBox>
                    ))
                ) : ( <div style={{ width: '100%', textAlign: 'center', padding: '100px 0', fontSize: '20px', color: '#8B8273' }}>
                            검색 결과가 없습니다.
                        </div>
                )}
        </StoreFlex>
        </div>
    )
    }
