import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Routes, Route, Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './store.js';

import * as Styled from './MainPageStyled.js';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import data from '../data/data.js';
import reviewData from '../data/reviewData.js';
import './swiper.css';
import Custom from './Custom.js';
import Best from './Best.js';

import { Pagination, Navigation, Autoplay } from 'swiper';

export default function MainPage() {
  const [mds] = useState(data.filter(md => md.isMD));
  const [reviews] = useState(reviewData);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setIsModalOpen(true);
  }

  const mdGroup = [];
  for(let i=1; i<mds.length; i +=3){
    mdGroup.push(mds.slice(i, i + 3));
  }

  const reviewGroup = [];
  for(let i=0; i< reviews.length; i += 4){
    reviewGroup.push(reviews.slice(i, i + 4));
  }

  useEffect(() => {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);
  return (
    <>
      <Styled.StyleSwiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="bannerSwiper"
      >
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/banner01.png"} style={{width:'100%', height:'550px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/banner02.png"} style={{width:'100%', height:'550px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/banner03.png"} style={{width:'100%', height:'550px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/banner04.png"} style={{width:'100%', height:'550px'}} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/images/banner05.png"} style={{width:'100%', height:'550px'}} />
          </SwiperSlide>
      </Styled.StyleSwiper>
      {/* main_visual */}

      <Styled.MdProduct>
          <h3 style={{fontSize: '28px'}}>MD추천</h3>
        <Styled.MdProductWrap>
          {mds.length > 0 &&(
            <Styled.MdBigProduct>
              <Styled.ProductLink to={`/detail/${mds[0].id}`} style={{border: 'none'}}>
                <Styled.ProductImg src={mds[0].productImg} style={{width: '489px'}} />
                <Styled.ProductName className='productName'>{mds[0].name}</Styled.ProductName>
                <p style={{color: '#8B8273', fontWeight: '300'}}>{mds[0].subTitle}</p>
                <Styled.ProductPrice>{mds[0].price.toLocaleString()}원</Styled.ProductPrice>
              </Styled.ProductLink>
              <Styled.MainCartBtn onClick={() => handleAddItem({id: mds[0].id, img: mds[0].productImg, name: mds[0].name, subtitle: mds[0].subTitle, price: mds[0].price, count: 1 })}>
                <img src={process.env.PUBLIC_URL + "/images/shopping_cart.png"} style={{width: '35px', height: '35px'}}/>
              </Styled.MainCartBtn>
          </Styled.MdBigProduct>
          )}
          <Styled.MDSwiper
            slidesPerView={1}
            speed={700}
            slidesPerGroup={1}
            direction="vertical"
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="MDSwiper"
            >
            {mdGroup.map((group, index)=> (
              <SwiperSlide key={index}>
                {group.map((md) => (
                  <div style={{position: 'relative'}}>
                  <Styled.ProductLink key={md.id} to={`/detail/${md.id}`} style={{display:'flex', marginBottom: '20px'}}>
                    <Styled.ProductImg src={md.productImg} style={{width:'184px', height:'200px', marginRight: '20px'}} />
                    <div>
                      <Styled.ProductName className='productName'>{md.name}</Styled.ProductName>
                      <p style={{color: '#8B8273', fontWeight: '300'}}>{md.subTitle}</p>
                      <Styled.ProductPrice>{md.price.toLocaleString()}원</Styled.ProductPrice>
                    </div>
                  </Styled.ProductLink>
                  <Styled.CartBtn onClick={() => handleAddItem({id: md.id, img: md.productImg, name:md.name, subtitle: md.subTitle, price: md.price, count: 1})}>
                    <img src={process.env.PUBLIC_URL + "/images/shopping_cart.png"} style={{width: '35px', height: '35px'}}/>
                  </Styled.CartBtn>
                </div>
                ))}
              </SwiperSlide>
            ))}
          </Styled.MDSwiper>
        </Styled.MdProductWrap>
      </Styled.MdProduct>
      {/* MD_Section */}

      <Custom />
      <Best />
      <div style={{width: '1200px', margin: '200px auto 0', position:'relative'}}>
        <h3 style={{fontSize: '28px', marginBottom: '20px'}}>사용자 후기</h3>
        <div className='review_prev'>
          <img src={process.env.PUBLIC_URL + '/images/prev_btn.png'} alt="" />
        </div>
        <div className='review_next'>
          <img src={process.env.PUBLIC_URL + '/images/next_btn.png'} alt="" />
        </div>
        <Styled.ReviewSwiper
          loop={true}
          loopedSlides={2}
          speed={800} 
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.review_prev',
            nextEl: '.review_next',
          }}
          modules={[Autoplay, Navigation]}
          className="ReviewSwiper"
        >
          {reviewGroup.map((group, index) => (
            <Styled.ReviewSlide key={index}>
            {group.map(review =>(
              <Styled.ReviewBox key={review.id}>
                <img src={review.reviewImg} style={{width: '285px', height: '285px', backgroundColor: '#F4EBD0', borderRadius: '5px'}}/>
                <div style={{padding: '0 5px'}}>
                  {[1, 2, 3, 4].map(star => (
                    <img key={star} src={process.env.PUBLIC_URL + "/images/star.png"} style={{width: '10px', height: '10px'}} />
                  ))}
                </div>
                <p style={{fontSize: '14px', margin:'10px 0 20px', padding: '0 5px'}}>{review.reviewTxt}</p>
                <p style={{color: '#8B8273', fontWeight: '300', borderTop: '1px solid #8B8273', padding: '5px'}}>{review.productName}</p>
              </Styled.ReviewBox>
            ))}
          </Styled.ReviewSlide>
          ))}
        </Styled.ReviewSwiper>
      </div>
      {isModalOpen && (
        <div style={{width:'100%', height:'100%', position: 'fixed', top: '0', left: '0', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '1000'}}>
          <Styled.CartModal>
            <div style={{fontSize:'20px'}}>
              <p>장바구니에 담았습니다.</p>
              <p>바로 확인 하시겠습니까?</p>
            </div>
            <div style={{display: 'flex', marginTop: '50px'}}>
              <Styled.ContinueBtn onClick={() => setIsModalOpen(false)}>쇼핑 계속하기</Styled.ContinueBtn>
              <Styled.CartMoveBtn to={'/cart'}>장바구니로 이동</Styled.CartMoveBtn>
            </div>
          </Styled.CartModal>
        </div>
      )}
    </>
  )
}
