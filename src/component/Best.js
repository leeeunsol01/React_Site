import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './store.js';
import styled from 'styled-components';

import data from './data';

const BestProductFlex = styled.div`
    position: relative;
    &:nth-child(odd){
        margin-right: 20px;
    }
`

const BestProduct = styled(Link)`
    border-bottom: 1px solid #8B8273;
    padding-bottom: 20px;
    margin-bottom: 20px;
    display: flex;
    text-decoration: none;
    overflow: hidden;
    .ranking{
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: #FF6B00;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        text-align: center;
        line-height: 30px;
        top: 10px;
        left: 10px;
        z-index: 1000;
    }
    &:hover .productImg{
        transform: scale(1.1);
    }
`;

const BestCartBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #243B55;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    position: absolute;
    bottom: 50px;
    left: 206px;
    transition: all 0.2s ease;
    &:hover{
        background-color: rgba(36, 59, 85, 0.7);
    }
`;

const ImgBox = styled.div`
    width: 183px;
    height: 183px;
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


export default function Best() {
    const bestTop = [...data]
    .sort((a, b) => {
        return(b.defaultScore + b.cartCount) - (a.defaultScore + a.cartCount);
    }).slice(0, 6);

    const [bests] = useState(bestTop);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        setIsModalOpen(true);
    }
  return (
      <div style={{width: '1200px', margin: '200px auto 0'}}>
        <h3>베스트</h3>
        
        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap'}}>
            {bests.map((best, index) => (
                <BestProductFlex key={best.id}>
                    <BestProduct to={`/detail/${best.id}`} style={{width: '590px'}}>
                        {index < 3 &&(
                            <div className='ranking'>
                                {index + 1}
                            </div>
                        )}
                        <ImgBox>
                            <img src={best.productImg} className='productImg' style={{width: '183px', height: '183px', backgroundColor: '#F4EBD0', borderRadius: '5px', transition: 'transform 0.3s ease'}} />
                        </ImgBox>
                        <div style={{marginLeft: '20px', color:'black'}}>
                            <p style={{fontSize: '18px', fontWeight:'500'}}>{best.name}</p>
                            <p style={{margin: '10px 0',color: '#8B8273', fontWeight: '300'}}>{best.subTitle}</p>
                            <p style={{fontSize: '24px', fontWeight: '600'}}>{best.price.toLocaleString()}원</p>
                        </div>
                    </BestProduct>
                    <BestCartBtn onClick={() => handleAddItem({id: best.id, img: best.productImg, name:best.name, subtitle: best.subTitle, price: best.price, count: 1})}>
                        <img src={process.env.PUBLIC_URL + "/images/shopping_cart.png"} style={{width: '35px', height: '35px'}}/>
                    </BestCartBtn>
                </BestProductFlex>
            ))
        }
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
