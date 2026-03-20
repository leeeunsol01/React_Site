import React from 'react'
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

const ScrollBox = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    scroll-snap-align: start;
    scroll-snap-stop: always;
`;

const FontSzie = styled.p`
    font-size: 24px;
`;

const FontWhite = styled(FontSzie)`
    color: white;
`;

const AnimatedBox = styled.div`
    width: 100%;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s ease;
    transition-delay: ${props => props.delay || '0s'};
    ${props => props.isVisible && css`
        opacity: 1;
        transform: translateY(0);
    `}
`;

const FadeSection = ({children, style, delay}) => {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });
    return(
        <AnimatedBox ref={ref} isVisible={inView} style={style} delay={delay}>
            {children}
        </AnimatedBox>
    )
}


export default function BrandPage() {
  return (
    <div className='scroll_container'>
        <ScrollBox style={{width: '100%',backgroundColor: '#F4EBD0'}}>
            <FadeSection style={{width: '1200px', height: 'calc(100vh - 80px)', backgroundColor: '#F4EBD0', margin:'0 auto', display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} style={{width: '715px', height: '120px', marginBottom: '100px'}} />
                <FontSzie style={{marginBottom: '50px'}}>바쁜 일상 속에서도 제대로 된 한 끼를 전하고 싶었습니다.</FontSzie>
                <FontSzie>우리 도시락 브랜드는 신선한 재료와 균형 잡힌 영양,</FontSzie>
                <FontSzie>그리고 정성을 기본으로 합니다.</FontSzie>
                <FontSzie style={{fontWeight: '600',color: '#FF6B00', marginTop: '50px'}}>언제나 최선을 다하는 채선당 도시락&샐러드가 되겠습니다.</FontSzie>
            </FadeSection>
        </ScrollBox>
        <ScrollBox style={{width: '100%', height: 'calc(100vh - 80px)', margin:'0 auto', display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', position:'relative'}}>
            <img src={process.env.PUBLIC_URL + '/images/Brand_img01.png'} style={{width: '100%', height: 'calc(100vh - 80px)'}} />
            <FadeSection style={{position: 'absolute', bottom: '50px', left: '200px'}}>
                <h1 style={{marginBottom: '40px', color: 'white'}}>든든한 점심 <span style={{color: '#FF6B00'}}>도시락</span></h1>
                <FontWhite>출근길, 학교, 회의 자리, 특별한 날까지</FontWhite>
                <FontWhite>언제 어디서나 믿고 선택할 수 있는 도시락.</FontWhite>
                <FontWhite>당신의 하루에 든든한 만족을 더합니다.</FontWhite>
            </FadeSection>
        </ScrollBox>
        <ScrollBox style={{width: '100%', height: 'calc(100vh - 80px)', margin:'0 auto', display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', position:'relative'}}>
            <img src={process.env.PUBLIC_URL + '/images/Brand_img02.png'} style={{width: '100%', height: 'calc(100vh - 80px)'}} />
            <FadeSection style={{position: 'absolute', bottom: '50px', left: '200px'}}>
                <h1 style={{marginBottom: '40px', color: 'white'}}>가볍고 건강한 <span style={{color: '#FF6B00'}}>도시락</span></h1>
                <FontWhite>매일 먹어도 부담 없는 집밥 같은 맛,</FontWhite>
                <FontWhite>눈으로 먼저 즐길 수 있는 깔끔한 구성,</FontWhite>
                <FontWhite>누구에게나 안심하고 권할 수 있는 품질을 약속드립니다.</FontWhite>
            </FadeSection>
        </ScrollBox>
        <ScrollBox style={{width: '1200px', height: '100vh', margin:'0 auto', display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
            <FadeSection delay='0s'>
                <h1 style={{marginBottom: '50px'}}><span style={{color: '#FF6B00'}}>채선당</span> 도시락&샐러드는</h1>
                <FontSzie>깊어지는 불황 속에서</FontSzie>
                <FontSzie>가성비를 추구하는 소비자들을 위해</FontSzie>
                <FontSzie>합리적인 가격과 믿을 수 있는 품질을 최우선으로 생각합니다.</FontSzie>
            </FadeSection>
            <FadeSection delay='0.1s'>
                <FontSzie style={{marginTop: '50px'}}>신선한 재료와 정성스러운 조리로</FontSzie>
                <FontSzie>매일 먹어도 부담 없는 한 끼,</FontSzie>
                <FontSzie>누구나 만족할 수 있는 도시락과 샐러드를 제공하겠습니다.</FontSzie>
            </FadeSection>
            <FadeSection delay='0.2s'>
                <FontSzie style={{marginTop: '50px'}}>불필요한 것은 덜어내고</FontSzie>
                <FontSzie>맛과 영양은 그대로 담아</FontSzie>
                <FontSzie>현명한 선택이 될 수 있도록 노력합니다.</FontSzie>
            </FadeSection>
        </ScrollBox>
    </div>
  )
}
