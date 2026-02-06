import React from 'react'
import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './store.js';
import styled from 'styled-components';

import data from './data';
import review from './reviewData';
import { useEffect } from 'react';

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

const CountBox = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #8B8273;
    border-bottom: 1px solid #8B8273;
    margin: 104px 0 20px;
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

const CartBtn = styled.button`
    width: 285px;
    height: 60px;
    font-weight: 600;
    border: none;
    background-color: #F4EBD0;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: #243B55;
        color: white;
    }
`;

const BuyBtn = styled.button`
    width: 285px;
    height: 60px;
    font-weight: 600;
    border: none;
    background-color: #243B55;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: #FF6B00;
        color: white;
    }
`;

const TabMenu = styled.button`
    width: 223px;
    height: 60px;
    font-weight: ${props => props.active ? '600' : '500'};
    border: none;
    background-color: white;
    cursor: pointer;
    border-bottom : ${props => props.active ? '3px solid #243B55' : 'none'};
    box-sizing: border-box;
    &:hover{
        color: rgba(0, 0, 0, 0.7);
    }
`;

const MoreBtn = styled.button`
    border: none;
    background-color: #243B55;
    color: white;
    border-radius: 5px;
    display: block;
    margin: 40px auto 0;
    padding: 15px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: #FF6B00;
        color: white;
    }
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

const WriteBtn = styled.button`
    display: block;
    border: none;
    background-color: #F4EBD0;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
`;

const WriteModal = styled.div`
    width: 630px;
    height: 550px;
    border: 1px solid #8B8273;
    border-radius: 5px;
    padding: 20px 20px 30px;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ChkBtn = styled.button`
    border: none;
    background-color: #243B55;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    padding: 15px 25px;
    display: block;
    margin: 20px auto;
    cursor: pointer;
`;

export default function DetailPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = data.find((d) => d.id === Number(id));

    const [count, setCount] = useState(1);
    const [activeTab, setActiveTab] = useState('정보');
    const [visibleReview, setVisibleReview] = useState(4);
    const [visibleQna, setVisibleQna] = useState(4);
    const [modalType, setModalType] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nutritions = [
        {label : '열량', key: 'kcal', unit: 'kcal'},
        {label : '탄수화물', key: 'carb', unit: 'g'},
        {label : '단백질', key: 'protein', unit: 'g'},
        {label : '지방', key: 'fat', unit: 'g'}
    ]

    useEffect(() => {
        document.body.style.overflow = modalType? 'hidden' : 'unset';
    }, [modalType]);

    const infoRef = useRef(null);
    const reviewRef = useRef(null);
    const qnaRef = useRef(null);
    const handleTab = (ref, tabName) => {
        ref.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
        setActiveTab(tabName);
    }

    const handleAddItem = (item) => {
        dispatch(addItem(item));
        setIsModalOpen(true);
    }

  return (
    <div style={{width: '1200px', margin: '0 auto 200px'}}>
      <div style={{marginTop:'20px'}}>
        <BreadCrumb to='/'>홈</BreadCrumb>
        <BreadCrumb to={`/sub/${detail.category}`}>{detail.category}</BreadCrumb>
        <BreadCrumb to={`/detail/${detail.id}`}>{detail.name}</BreadCrumb>
      </div>
      <div style={{display: 'flex', margin: '20px 0 60px'}}>
        <div>
            <img src={detail.productImg} style={{width: '590px', height: '590px', backgroundColor: '#F4EBD0', borderRadius: '5px'}} />
        </div>
        <div key={detail.id} style={{width: '590px', marginLeft: '20px'}}>
            <h3 style={{fontSize: '24px'}}>{detail.name}</h3>
            <p style={{color: '#8B8273', fontSize: '18px', fontWeight: '300', margin: '10px 0 20px 0'}}>{detail.subTitle}</p>
            <p style={{fontSize: '30px', fontWeight: '600', marginBottom: '30px'}}>{detail.price.toLocaleString()}원</p>
            <div style={{display: 'flex'}}>
                <p style={{marginRight: '60px'}}>배송비</p>
                <div>
                    <p>3,000원 / 40,000원 이상 구매 시 무료배송</p>
                    <p>선택 상품에 따라 비용이 달라질 수 있습니다.</p>
                    <p>도서산간 지역 배송 불가</p>
                </div>
            </div>
            <CountBox>
                <p>상품 수량</p>
                <div style={{display: 'flex'}}>
                    <CountBtn onClick={() => setCount(count <= 1 ? 1 : count - 1)}>-</CountBtn>
                    <div style={{width: '50px', lineHeight: '34px', textAlign:'center', fontSize: '14px', borderTop: '1px solid #8B8273', borderBottom: '1px solid #8B8273'}}>{count}</div>
                    <CountBtn onClick={() => setCount(count + 1)}>+</CountBtn>
                </div>
            </CountBox>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '45px'}}>
                <p style={{fontWeight: '500'}}>총 상품 금액</p>
                <h3 style={{fontSize: '24px'}}>{(detail.price * count).toLocaleString()}원</h3>
            </div>
            <div>
                <CartBtn onClick={() => handleAddItem({id: detail.id, img: detail.productImg, name:detail.name, subtitle: detail.subTitle, price: detail.price, count: count})}>장바구니 담기</CartBtn>
                <BuyBtn>바로 구매</BuyBtn>
            </div>
        </div>
      </div>
      <div style={{width: '1200px',display: 'flex', justifyContent:'center', position:'sticky', top: '80px', left: '0', backgroundColor:'white',borderBottom: '1px solid #8B8273'}}>
        <TabMenu active={activeTab === '정보'} onClick={() => handleTab(infoRef, '정보')}>상품 정보</TabMenu>
        <TabMenu active={activeTab === '후기'} onClick={() => handleTab(reviewRef, '후기')}>상품 후기</TabMenu>
        <TabMenu active={activeTab === '문의'} onClick={() => handleTab(qnaRef, '문의')}>상품 문의</TabMenu>
      </div>
      <div ref={infoRef} style={{scrollMarginTop: '200px'}}>
        <img src={detail.detailImg} style={{width: '996px', margin: '60px auto', display: 'flex'}} />
        <table border={1} width={590} height={450} style={{margin: '0 auto', borderCollapse: 'collapse'}}>
            <th height={75} colSpan={2} style={{lineHeight: '75px', fontSize: '20px'}}>영양 성분</th>
            {nutritions.map((item, index) => (
                <tr key={index} style={{textAlign: 'center'}}>
                    <td width={150}>{item.label}</td>
                    <td>{detail.nutrition.kcal}{item.unit}</td>
                </tr>
            ))}
        </table>
      </div>
      <div ref={reviewRef} style={{margin: '120px 0', borderTop : '1px solid #8B8273', paddingTop: '20px', scrollMarginTop: '140px'}}>
        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', marginBottom: '60px'}}>
            <h3 style={{fontSize: '24px'}}>상품 후기</h3>
            <WriteBtn onClick={() => setModalType('리뷰')}>글쓰기</WriteBtn>
        </div>
            {review.slice(0, visibleReview).map((review) => (
                <div key={review.id} style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '20px', marginBottom: '20px'}}>
                    <p style={{width: '55px' ,marginRight: '10px'}}>{review.userName}님</p>
                    <div>
                        {[1, 2, 3, 4, 5].map(star => (
                            <img key={star} src={process.env.PUBLIC_URL + '/images/star.png'} style={{width: '20px', height: '20px'}} />
                        ))}
                    </div>
                    <p style={{width: '885px', marginLeft: '40px'}}>{review.reviewTxt}</p>
                    <p style={{color: '#8B8273'}}>{review.day}</p>
                </div>
            ))}
        {review.length > visibleReview && (
            <MoreBtn onClick={() => setVisibleReview(visibleReview + 4)}>더보기</MoreBtn>
        )}
      </div>
      <div ref={qnaRef} style={{margin: '120px 0', borderTop : '1px solid #8B8273', paddingTop: '20px', scrollMarginTop: '140px'}}>
        <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', marginBottom: '60px'}}>
            <h3 style={{fontSize: '24px'}}>상품 문의</h3>
            <WriteBtn onClick={() => setModalType('문의')}>글쓰기</WriteBtn>
        </div>
            {Array.from({length: visibleQna}).map((_,index) => (
                <div key={index} style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '20px', marginBottom: '20px'}}>
                    <p style={{width: '55px' ,marginRight: '10px'}}>익명님</p>
                    <div style={{display: 'flex', width: '1098px', marginLeft: '20px'}}>
                        <img src={process.env.PUBLIC_URL + '/images/lock.png'} style={{width: '25px', height: '25px', marginRight: '10px'}} />
                        <p>비밀글 입니다.</p>
                    </div>
                </div>
            ))}
        {8 > visibleQna && (
            <MoreBtn onClick={() => setVisibleQna(visibleQna + 4)}>더보기</MoreBtn>
        )}
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
        {modalType && (
            <div style={{width: '100%', height: '100%', position: 'fixed', top: '0', left: '0', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                <WriteModal onClick={(e) => e.stopPropagation()}>
                    <h3>{modalType} 제목</h3>
                    <input type="text" style={{width: '100%', height: '40px', margin: '20px 0 40px', border: '1px solid #8B8273', borderRadius: '5px'}} />
                    <h3>{modalType} 내용</h3>
                    <textarea maxLength={200}style={{resize:'none' ,width: '100%', height: '300px', border: '1px solid #8B8273', borderRadius: '5px', marginTop: '20px'}}></textarea>
                    <ChkBtn onClick={() => setModalType(null)}>확인</ChkBtn>
                </WriteModal>
            </div>
        )}
    </div>
  )
}
