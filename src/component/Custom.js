import React from 'react'
import { useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import * as Styled from './CustomStyled.js';
import custom from './customData.js';

export default function Custom() {
  const {ref, inView} = useInView({
    threshold: 0.3,
  });

  const [isCustom, setIsCustom] = useState(false);
  const [currentStep, setCurrentStep] = useState('rice');
  const [selection, setSelection] = useState({
    rice: null,
    main: null,
    side01: null,
    side02: null,
    side03: null,
    side04: null
  });

  const handlStart = () => {
    setIsCustom(true);
    setCurrentStep('rice');
  }

  const slots = [
    { key: 'rice', Component: Styled.RiceSlot, label: '밥 메뉴를 담아주세요.', prev: null },
    { key: 'main', Component: Styled.MainSlot, label: '메인 메뉴를 담아주세요.', prev: 'rice'},
    { key: 'side01', Component: Styled.SideSlot01, label: '사이드 메뉴를 담아주세요.', prev: 'main'},
    { key: 'side02', Component: Styled.SideSlot02, label: '사이드 메뉴를 담아주세요.', prev: 'side01'},
    { key: 'side03', Component: Styled.SideSlot03, label: '사이드 메뉴를 담아주세요.', prev: 'side02'},
    { key: 'side04', Component: Styled.SideSlot04, label: '사이드 메뉴를 담아주세요.', prev: 'side03'},
  ]

  const handlReset = () => {
    setSelection({
      rice: null,
      main: null,
      side01: null,
      side02: null,
      side03: null,
      side04: null
    });
    setCurrentStep('rice');
  }

  const selectMenu = (key, path)=> {
    setSelection({
      ...selection,
      [key]: path
    })
  }

  let currentMenuList = custom[currentStep];
  if(currentStep === 'side01' || currentStep === 'side02'){
    currentMenuList = custom.side01;
  }else if(currentStep === 'side03' || currentStep === 'side04'){
    currentMenuList = custom.side02;
  }

  const Recommended = {kcal: 2100, carb: 300, protein: 65, fat: 50 };
  const nutritionSpecs = [
    {label : '열량', key: 'kcal', unit: 'kcal', recommended: Recommended.kacl},
    {label : '탄수화물', key: 'carb', unit: 'g', recommended: Recommended.carb},
    {label : '단백질', key: 'protein', unit: 'g', recommended: Recommended.protein},
    {label : '지방', key: 'fat', unit: 'g', recommended: Recommended.fat}
  ]

  const totals = useMemo(() =>{
    let nutritionTotal = { kcal: 0, carb: 0, protein: 0, fat: 0 };
    
    Object.values(selection).forEach(path => {
      if(path && path.nutrition){
        nutritionTotal.kcal += path.nutrition.kcal;
        nutritionTotal.carb += path.nutrition.carb;
        nutritionTotal.protein += path.nutrition.protein;
        nutritionTotal.fat += path.nutrition.fat;
      }
    });
    return nutritionTotal;
  },[selection]);

  return (
    <Styled.CustomBox>
        <Styled.LunchBox ref={ref} isMode={isCustom} inView={inView}>
          <Styled.CustomTitle isMode={isCustom}>
            <p style={{color: '#FF6B00', fontSize: '32px', fontWeight: '500'}}>당신만의 도시락을 만들어보세요.</p>
            <Styled.MakeBtn onClick={handlStart}>커스텀 도시락 만들기</Styled.MakeBtn>
          </Styled.CustomTitle>
          <img className='completion' src={
            isCustom ? process.env.PUBLIC_URL + '/images/empty_img.png'
            : process.env.PUBLIC_URL + '/images/customBox.png'}
            style={{width:'590px', transition: 'all 0.8s ease'}}
          />
          {isCustom && (
            <>
            {slots.map(({key, Component, label, prev}) => (
              <Component key={key} onClick={() => {
                if(!prev || selection[key] || selection[prev]){
                  setCurrentStep(key);
                }
              }}>
                {selection[key] ? (
                  <img src={selection[key].customImg} style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px'}} />
                ) : ( (!prev || selection[prev]) && label
                )}
              </Component>
            ))}
            </>
          )}
        </Styled.LunchBox>
        <Styled.SidePanel isMode={isCustom}>
          {isCustom && (
            <div style={{height: '300px'}}>
              <h3 style={{fontSize: '20px'}}>
                {currentStep === 'rice' ? '밥' : currentStep === 'main' ? '메인' : '사이드'} 메뉴
              </h3>
              <Styled.MenuBox>
                {currentMenuList?.map((menu) => (
                  <Styled.MenuBtn key={menu.id} onClick={()=> selectMenu(currentStep, menu)} $isSelected= {selection[currentStep]?.id === menu.id}>
                    {menu.name}
                  </Styled.MenuBtn>
                ))}
              </Styled.MenuBox>
            </div>
          )}
          <div style={{height: '300px'}}>
            <h3 style={{fontSize: '20px'}}>영양분 <span>하루 권장량 대비%</span></h3>
            {nutritionSpecs.map((spec) => (
              <Styled.GraphFelx>
                <p style={{width:'80px', fontWeight: '500'}}>{spec.label}({spec.key})</p>
                <Styled.GraphBar>
                  <Styled.BarFill $percent={(totals[spec.key] / Recommended.kcal) * 100}/>
                </Styled.GraphBar>
                <Styled.TotalBox>
                  <p>Total {spec.label} : <span style={{fontSize: '18px'}}>{totals[spec.key]}</span>{spec.unit}</p>
                </Styled.TotalBox>
                <div>{spec.recommended}{spec.unit}</div>
              </Styled.GraphFelx>
            ))}
          </div>
        </Styled.SidePanel>
        {isCustom && (
          <Styled.ResetBtn onClick={handlReset}>초기화</Styled.ResetBtn>
        )}
    </Styled.CustomBox>
  )
}
