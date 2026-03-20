import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

export const StyleSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next{
    width: 44px;
    heigth: 50px;
    color: transparent;
    background-size: cover;
    &:hover{
      filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));
    }
  } 
  .swiper-button-prev{
    top: auto;
    bottom: 20px;
    left: 50%;
    transform: translateX(-600px);
    background-image: url(${process.env.PUBLIC_URL + '/images/prev_btn.png'});
  }
  .swiper-button-next{
    top: auto;
    right: auto;
    bottom: 20px;
    left: 50%;
    transform: translateX(-540px);
    background-image: url(${process.env.PUBLIC_URL + '/images/next_btn.png'});
  }
`;

export const MdProduct = styled.div`
  width: 1200px;
  margin: 120px auto 0;
`;

export const MdProductWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const MdBigProduct = styled.div`
  width: 489px;
  margin-right: 20px;
  position: relative;
`;

export const ProductLink = styled(Link)`
  color: black;
  text-decoration: none;
  border: 1px solid #F4EBD0; box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  &:hover .productName{
    text-decoration: underline;
  }
`;

export const ProductImg = styled.img`
  background-color: #F4EBD0;
  border-radius: 5px;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
`;

export const CartBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: #243B55;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;
  bottom: 20px;
  left: 206px;
  transition: all 0.2s ease;
  &:hover{
      background-color: rgba(36, 59, 85, 0.7);
  }
`;

export const MainCartBtn = styled(CartBtn)`
  bottom: 100px;
  left: 0;
`

export const MDSwiper = styled(Swiper)`
  width: 691px;
  height: 676px;
`;

export const ReviewSwiper = styled(Swiper)`
  width : 1200px;
`;

export const ReviewSlide = styled(SwiperSlide)`
  display: flex;
`;

export const ReviewBox = styled.div`
  border: 1px solid #8B8273;
  border-radius: 5px;
  margin-right: 16px;
`;

export const CartModal = styled.div`
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

export const ContinueBtn = styled.button`
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

export const CartMoveBtn = styled(Link)`
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
