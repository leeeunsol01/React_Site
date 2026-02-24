import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, addCount, subCount } from './store'
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

const CustomChkBox = styled.input.attrs({type: 'checkbox'})`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #8B8273;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    &:checked {
        background-color: #FF6B00;
    }
    &:checked::after {
        content: '';
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);        
        width: 5px; 
        height: 10px; 
        border: solid #fff;
        border-width: 0 2.5px 2.5px 0;
    }
`;

const CountBtn = styled.button`
    width: 37px;
    height: 37px;
    font-size: 24px;
    border: 1px solid #8B8273;
    background-color: white;
    color: #8B8273;
    cursor: pointer;
`;

const DeleteBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
`;

const GraphBar = styled.div`
width: 300px;
height: 20px;
border-radius: 5px;
background-color: #E2E8F0;
margin: 0 10px 0 0;
overflow: hidden;
`;

const BarFill = styled.div`
height: 100%;
background-color: #FF6B00;
border-radius: 5px;
width: ${props => props.$percent}%;
transition: width 0.5s ease;
`;

const BuyBtn = styled.button`
    width: 285px;
    height: 60px;
    border: none;
    background-color: #243B55;
    border-radius: 5px;
    color: white;
    display: block;
    margin: 120px auto 0;
    cursor: pointer;
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

export default function CartPage() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [modalType, setModalType] = useState(null);

    const [checkedList, setCheckedList] = useState(state.cart.map(item => item.id));
    useEffect(() => {
        setCheckedList(state.cart.map(item => item.id));
    }, [state.cart.length]);

    const handleAllCheck = (checked) => {
        if(checked){
            setCheckedList(state.cart.map(item => item.id));
        }else{
            setCheckedList([]);
        }
    }
    const handleSingleCheck = (checked, id) => {
        if(checked){
            setCheckedList(prev => [...prev, id]);
        }else{
            setCheckedList(prev => prev.filter(el => el !== id));
        }
    }

    useEffect(() => {
        document.body.style.overflow = modalType? 'hidden' : 'unset';
    }, [modalType]);

    const checkedPrice = state.cart.filter(item => checkedList.includes(item.id))
        .reduce((total, item) => total + (item.price * item.count), 0);

    const totalCount = state.cart.filter(item => checkedList.includes(item.id))
        .reduce((total, item) => total + item.count, 0);

    const handleBuyClick = () => {
        if (checkedList.length === 0) {
            setModalType('empty');
        } else {
            setModalType('buy');
        }
    };

return (
    <div style={{width: '1200px', margin: '0 auto'}}>
    <div style={{marginTop:'20px'}}>
        <BreadCrumb to='/'>홈</BreadCrumb>
        <BreadCrumb to={'/cart'}>장바구니</BreadCrumb>
    </div>
    <h3 style={{fontSize: '32px', margin: '40px 0 80px', textAlign: 'center'}}>장바구니</h3>
        <div style={{display: 'flex', justifyContent: 'space-between', textAlign: 'center', borderBottom: '1px solid #8B8273', paddingBottom: '20px'}}>
            <div style={{width: '152px', display: 'flex', alignItems:'center'}}>
                <CustomChkBox checked={state.cart.length > 0 && checkedList.length === state.cart.length} onChange={(e) => handleAllCheck(e.target.checked)} />
                <p style={{marginLeft: '10px'}}>전체 선택</p>
            </div>
            <p style={{width: '628px'}}>상품명</p>
            <p style={{width: '125px'}}>수량</p>
            <p style={{width: '180px'}}>주문금액</p>
        </div>
        {state.cart.length === 0 && (
            <div style={{height: '141px', textAlign:'center', lineHeight: '141px', color: '#8B8273'}}>장바구니에 담은 상품이 없습니다.</div>
        )}
        {state.cart.map((item, index) => (            
            <div key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', padding: '20px 0', borderBottom: '1px solid #E2E8F0'}}>
                <CustomChkBox checked={checkedList.includes(item.id)} onChange={(e) => handleSingleCheck(e.target.checked, item.id)} />
                <img src={item.img} style={{width: '100px', height: '100px', backgroundColor: '#F4EBD0', borderRadius: '5px'}} />
                <div style={{width: '628px'}}>
                    <p style={{fontWeight:'600', marginBottom: '10px'}}>{item.name}</p>
                    <p style={{fontSize:'14px', fontWeight:'300', color: '#8B8273'}}>{item.subtitle}</p>
                </div>
                <div style={{display: 'flex'}}>
                    <CountBtn onClick={() => dispatch(subCount(item.id))}>-</CountBtn>
                    <div style={{width: '50px', lineHeight: '34px', textAlign:'center', fontSize: '14px', borderTop: '1px solid #8B8273', borderBottom: '1px solid #8B8273'}}>{item.count}</div>
                    <CountBtn onClick={() => dispatch(addCount(item.id))}>+</CountBtn>
                </div>
                <p style={{width: '180px', fontSize: '18px', fontWeight: '600', textAlign:'end', transform: 'translateX(-30px)'}}>{(item.price * item.count).toLocaleString()}원</p>
                <DeleteBtn onClick={() => dispatch(deleteItem(item.id))}>
                    <img src={process.env.PUBLIC_URL + '/images/close_btn.png'} style={{width: '15px', height: '15px'}}/>
                </DeleteBtn>
            </div>
        ))}
        <div style={{height: '100px', backgroundColor: '#F4EBD0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <GraphBar>
                    <BarFill $percent={(checkedPrice / 40000) * 100}/>
                </GraphBar>
                <p style={{fontSize: '14px'}}>택배 무료배송</p>
            </div>
            <p style={{fontSize: '14px'}}>결제 예상금액<span style={{fontSize:'32px', fontWeight: '600', color: '#FF6B00', marginLeft: '20px'}}>{checkedPrice.toLocaleString()}</span><span style={{fontSize:'20px', color: '#FF6B00'}}>원</span></p>
        </div>
        <BuyBtn onClick={handleBuyClick}>구매하기</BuyBtn>
        {(modalType === 'empty' || modalType === 'buy' || modalType === 'complete') && (
            <div style={{width:'100%', height:'100%', position: 'fixed', top: '0', left: '0', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '1000'}}>
                <CartModal>
                <div style={{fontSize:'20px'}}>
                    {modalType === 'empty' ? (
                        <>
                            <p>상품을 선택해주세요.</p>
                        </>
                    ) : modalType === 'buy' ? (
                        <>
                            <p>선택하신 {totalCount}개의 상품을 결제하시겠습니까?</p>
                            <p>총 상품 금액: {checkedPrice.toLocaleString()}원</p>
                        </>
                    ) : (
                        <p>결제가 완료되었습니다.</p>
                    )}
                </div>
                <div style={{display: 'flex', marginTop: '50px'}}>
                    {modalType === 'empty' ? (
                        <ContinueBtn onClick={() => setModalType(null)}>확인</ContinueBtn>
                    ) : modalType === 'buy' ? (
                        <>
                            <ContinueBtn onClick={() => setModalType(null)}>취소</ContinueBtn>
                            <ContinueBtn onClick={() => setModalType('complete')} style={{ backgroundColor: '#243B55', color: 'white' }}>결제하기</ContinueBtn>
                        </>
                    ) : (
                        <ContinueBtn onClick={() => setModalType(null)} style={{ backgroundColor: '#243B55', color: 'white' }}>확인</ContinueBtn>
                    )}
                </div>
                </CartModal>
            </div>
        )}
    </div>
    )
}
