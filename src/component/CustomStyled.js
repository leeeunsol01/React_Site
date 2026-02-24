import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CustomBox = styled.div`
  width: 1200px;
  height: 800px;
  margin: 200px auto 0;
  background-color: rgba(244, 235, 208, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CustomTitle = styled.div`
  display: flex;
  width: 650px;
  opacity: ${props => props.isMode ? 0 : 1};
  transition: all 0.5s ease;
`;

export const CustomTitle2 = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${props => props.isMode ? 1 : 0};
  transition: all 0.5s ease;
`;

export const LunchBox = styled.div`
  width: ${props => props.isMode ? "calc(50% - 10px)" : "100%"};
  height: 100%;
  transition: all 0.5s ease;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-right: ${props => props.isMode ? "20px" : "0"};
  .completion{
    transform: ${props => props.inView ? "scale(1)" : "scale(0.9)"};
    opacity: ${props => props.inView ? 1 : 0};
  }
`;

export const MakeBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #243B55;
  color: white;
  padding: 12px 24px;
  margin-left: 20px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover{
    transform: translateY(-5px);
  }
`;

export const RiceSlot = styled.div`
  position: absolute;
  top: 47%;
  left: 4.5%;
  width: 281px;
  height: 260px;
  border-radius: 5px;
  text-align: center;
  line-height: 260px;
  color: white;
  cursor:pointer;
`;

export const MainSlot = styled.div`
  position: absolute;
  top: 47.5%;
  left: 56%;
  width: 224px;
  height: 245px;
  border-radius: 5px;
  text-align: center;
  line-height: 260px;
  color: white;
  cursor:pointer;
`;

export const SideSlot01 = styled.div`
  position: absolute;
  top: 27%;
  left: 5%;
  width: 164px;
  height: 128px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor:pointer;
`;

export const SideSlot02 = styled.div`
  position: absolute;
  top: 27.8%;
  left: 35.5%;
  width: 137px;
  height: 110px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor:pointer;
`;

export const SideSlot03 = styled.div`
  position: absolute;
  top: 27%;
  left: 62.5%;
  width: 83px;
  height: 133px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor:pointer;
`;

export const SideSlot04 = styled.div`
  position: absolute;
  top: 27%;
  left: 80%;
  width: 83px;
  height: 133px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor:pointer;
`;

export const SidePanel = styled.div`
  width: ${props => props.isMode ? "calc(50% - 10px)" : "0%"};
  height: 100%;
  opacity: ${props => props.isMode ? 1 : 0};
  transform: ${props => props.isMode ? "translateX(0)" : "translateY(20px)"};
  transition: all 0.5s ease;
  padding: 50px 0;
  box-sizing: border-box;
  pointer-events: ${props => props.isMode ? 'auto' : 'none'};
`;

export const MenuBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const MenuBtn = styled.button`
  background-color: ${props => props.$isSelected ? '#243B55' : 'white'};
  color: ${props => props.$isSelected ? 'white' : 'black'};
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const TotalBox = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid #8B8273;
  border-radius: 5px;
  display:none;
`;

export const GraphBar = styled.div`
  width: 400px;
  height: 30px;
  border-radius: 10px;
  background-color: white;
  margin: 0 20px;
  overflow: hidden;
  cursor: pointer;
`;

export const GraphFelx = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;
  &:hover{
    ${GraphBar}{
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    }
    ${TotalBox}{
      display: block;
    }
  }
`;

export const BarFill = styled.div`
  height: 100%;
  background-color: #FF6B00;
  border-radius: 10px;
  width: ${props => props.$percent}%;
  transition: width 0.5s ease;
`;

export const ResetBtn = styled.button`
  background-color: #FF6B00;
  border: none;
  color:white;
  font-weight: 500;
  padding: 15px 20px;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  left: 45%;
  transform: translateX(-50%);
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const CartBtn = styled.button`
  background-color: #243B55;
  border: none;
  color: white;
  font-weight: 500;
  padding: 15px 20px;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  left: 55%;
  transform: translateX(-50%);
  transition: all 0.5s ease;
  cursor: pointer;
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
  z-index: 10000;
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
    box-shadow: 4px 4px 12px 1px rgba(0, 0, 0, 0.2);
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