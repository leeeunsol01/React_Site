import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './store.js';
import styled from 'styled-components';

import data from './data';

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

const SidePanel = styled.div`
    width: 285px;
    height: 300px;
    position: sticky;
    top: 80px;
    left: 0;
    border-top: 1px solid #8B8273;
    margin-right: 20px;
`;

const MenuTitle = styled(NavLink)`
    width: fit-content;
    font-weight: 600;
    margin: 10px 0;
    display: block;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease;
    &.active{
        background-color: #FF6B00;
        color: white;
        padding: 10px;
        border-radius: 5px;
    }
`;

const ProductPanel = styled.div`
    width: 895px;
    border-top: 1px solid #8B8273;
`;

const SubProductBox = styled.div`
    width: 285px;
    height: 490px;
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
    &.show {
        opacity: 1;
        transform: translateY(0);
    }

    &:nth-child(3n){
        margin-right: 0;
    }
`;

const SubProduct = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover .productImg{
        transform: scale(1.1);
    }
`;

const ImgBox = styled.div`
    width: 285px;
    height: 285px;
    overflow: hidden;
    border-radius: 5px;
    background-color: #F4EBD0;
    flex-shrink: 0;
`;

const CartModal = styled.div`
  width: 670px;
  height: 280px;
  border: 1px solid #8B8273;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CartBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #243B55;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.2s ease;
    &:hover{
        background-color: rgba(36, 59, 85, 0.7);
    }
`;

const ContinueBtn = styled.button`
  width: 285px;
  height: 60px;
  background-color: #F4EBD0;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.3);
  }
`;

const CartMoveBtn = styled(Link)`
  display: block;
  width: 285px;
  height: 60px;
  background-color: #243B55;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  line-height: 60px;
  &:hover{
    box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.3);
  }
`;


export default function SubPage() {
    const {category} = useParams();
    const dispatch = useDispatch();
    const menus = ['전체', '간편 도시락', '스페셜 도시락', '컵밥', '샐러드'];
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleAddItem = (item) => {
        dispatch(addItem(item));
        setIsModalOpen(true);
    }

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

    const items = document.querySelectorAll('.subProductItem');
    items.forEach(item => observer.observe(item));

    return() => observer.disconnect();
    },[category]);

  return (
    <div style={{width: '1200px', margin:'0 auto 200px'}}>
      <div style={{marginTop:'20px'}}>
        <BreadCrumb to='/'>홈</BreadCrumb>
        <BreadCrumb to='/sub/:category'>{category}</BreadCrumb>
      </div>
      <div style={{marginTop: '30px', display: 'flex'}}>
        <SidePanel>
            {menus.map((menu,index) => (
                <MenuTitle key={index} to={`/sub/${menu}`}>{menu}</MenuTitle>
            ))}
        </SidePanel>
        <ProductPanel>
            <div style={{margin:'20px 0', fontSize:'24px', fontWeight:'500'}}>{category}</div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {data.filter(sub => category === '전체' ? true : sub.category === category)
                .map(sub => (
                    <SubProductBox className='subProductItem'>
                        <SubProduct key={sub.id} to={`/detail/${sub.id}`}>
                            <ImgBox>
                                <img src={sub.productImg} className='productImg' style={{width:'285px', height:'285px', backgroundColor: '#F4EBD0', borderRadius: '5px', marginBottom: '10px', transition: 'transform 0.3s ease'}} />
                            </ImgBox>
                            <p style={{marginTop: '10px', fontSize: '18px', fontWeight: '500'}}>{sub.name}</p>
                            <p style={{fontWeight: '300', color: '#8B8273', margin: '10px 0'}}>{sub.subTitle}</p>
                            <p style={{fontSize: '24px', fontWeight: '600'}}>{sub.price.toLocaleString()}원</p>
                        </SubProduct>
                        <CartBtn onClick={() => handleAddItem({id: sub.id, img: sub.productImg, name:sub.name, subtitle: sub.subTitle, price: sub.price, count: 1})}>
                            <img src={process.env.PUBLIC_URL + "/images/shopping_cart.png"} style={{width: '35px', height: '35px'}}/>
                        </CartBtn>
                    </SubProductBox>
                ))}
            </div>
        </ProductPanel>
      </div>
      {isModalOpen && (
            <div style={{width:'100%', height:'100%', position: 'fixed', top: '0', left: '0', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '1000'}}>
                <CartModal>
                    <div style={{fontSize:'20px'}}>
                    <p>장바구니에 담았습니다.</p>
                    <p>바로 확인 하시겠습니까?</p>
                    </div>
                    <div style={{display: 'flex', marginTop: '50px'}}>
                    <ContinueBtn onClick={() => setIsModalOpen(false)}>쇼핑 계속하기</ContinueBtn>
                    <CartMoveBtn to={'/cart'}>장바구니로 이동</CartMoveBtn>
                    </div>
                </CartModal>
            </div>
        )}
     </div>
  )
}
