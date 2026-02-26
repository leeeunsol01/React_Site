// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styled from 'styled-components';

import Header from './component/Header';
import MainPage from './component/MainPage';
import SubPage from './component/SubPage';
import BrandPage from './component/BrandPage';
import FindPage from './component/FindPage';
import NoticePage from './component/NoticePage';
import Login from './component/Login';
import SignUp from './component/SignUp';
import CartPage from './component/CartPage';
import DetailPage from './component/DetailPage';
import Footer from './component/Footer';
import NoticeDetail from './component/NoticeDetail';

const Content = styled.div`
  flex: 1;
`;

function ScrollTo(){
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const QuickgoTop = () => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: 0,
    ease: 'power2.out'
  });
};

const QuickgoBottom = () => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: document.body.scrollHeight,
    ease: 'power2.out'
  });
};


function QuickMenu(){
  const QuickTop = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-bottom: 20px;
    border: none;
    background-color: transparent;
    transition: all 0.3s ease;
    &:hover{
      filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));
    }
  `;

  const QuickDown = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-bottom: 20px;
    border: none;
    background-color: transparent;
    transition: all 0.3s ease;
    &:hover{
      filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));
    }
  `;
  
  return(
    <div style={{display: 'flex', flexDirection: 'column', position: 'fixed', bottom: '20px', right: '20px'}}>
      <QuickTop onClick={QuickgoTop}>
        <img src={process.env.PUBLIC_URL + '/images/quick_top.png'} style={{width: '50px', height: '50px'}}/>
      </QuickTop>
      <QuickDown onClick={QuickgoBottom}>
        <img src={process.env.PUBLIC_URL + '/images/quick_down.png'} style={{width: '50px', height: '50px'}} />
      </QuickDown>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollTo />
      <Content>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/sub/:category' element={<SubPage />}/>
          <Route path='/brand' element={<BrandPage />} />
          <Route path='/find' element={<FindPage />} />
          <Route path='/notice' element={<NoticePage />} />
          <Route path='/notice/:id' element={<NoticeDetail />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/sign' element={<SignUp/>} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/detail/:id' element={<DetailPage/>} />
        </Routes>
      </Content>
      <QuickMenu/>
      <Footer/>
    </div>
  );
}

export default App;
