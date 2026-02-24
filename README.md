# 🍱 채선당 도시락&샐러드
채선당 도시락&샐러드 공식 사이트가 브랜드 소개 중심으로 구성되어 있어, 사용자들이 직접 상품을 구매할 수 있는 판매 사이트 형태로 리뉴얼했습니다.

## 🛠️ 기술스택
- React
- Redux Toolkit
- React Router
- Styled-components

## 📌 주요기능
- 장바구니 상태 관리 및 수량 실시간 반영
- 체크된 장바구니 데이터를 기반으로 그래프 값 동적 업데이트 구현
- 검색어 기반 상품 필터링 기능 구현
- 도시락 커스터마이징 기능 (선택에 따른 동적 이미지 변경)

## 📦 컴포넌트 구조
<pre>
chaesundang/
  ├── src/
  │ ├── component/            # 재사용 가능한 컴포넌트
  │   ├── Best.js             # Best 페이지
  │   ├── Footer.js           # Footer 기본 틀
  │   ├── Header.js           # 공용 Header
  │   ├── BrandPage.js        # 브랜드소개 페이지
  │   ├── CartPage.js         # 장바구니 페이지
  │   ├── Custom.js           # 나만의 도시락 만들기 콘텐츠
  │   ├── CustomStyled.js     # 나만의 도시락 만들기 styled-components
  │   ├── DetailPage.js       # 상세 페이지
  │   ├── FindPage.js         # 매장 찾기 페이지
  │   ├── Loign.js            # 로그인 페이지
  │   ├── MainPage.js         # 메인 페이지
  │   ├── MainPageStyled.js   # 메인 페이지 styled-components
  │   ├── NoticeDetail.js     # 공지사항 상세 페이지
  │   ├── NoticePage.js       # 공지사항 페이지
  │   ├── ProductBox.js       # 상품 기본 틀
  │   ├── SignUp.js           # 회원가입 페이지
  │   ├── store.js            # 장바구니 상태관리
  │   ├── SubPage.js          # 서브 페이지
  │   └── swiper.css          # swiper 스타일
  └── data/ 
      ├── data.js             # 모든 상품의 데이터
      ├── customData.js       # 나만의 도시락 만들기 데이터
      ├── findData.js         # 매장 찾기 데이터
      ├── noticeData.js       # 공지사항 데이터
      └── reviewData.js       # 리뷰 데이터
</pre>

## 🧠 설계 및 구현 과정
### 1. 장바구니 상태 관리 및 수량 실시간 반영
- **cart slice**: 상품 추가/삭제, 수량 조절 기능
- 전역 상태를 기반으로 Header에 총 상품 수량을 실시간 반영

| 장바구니 수량 실시간 반영 |
|:--:|
|  ![장바구니 수량 실시간 반영](img/HeaderCount.gif)  |

#### store.js
```javascript
const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action){ ... },
        deleteItem(state, action){ ... },
        ...
    }
});
```

#### Header.js
```jsx
// 장바구니에 저장된 정보가져옴
const cart = useSelector((state) => state.cart);

// reduce()를 활용하여 총 수량 계산
const totalCount = cart.reduce((total, item) => total + item.count, 0);
```

### 2. 체크된 장바구니 데이터를 기반으로 그래프 값 동적 업데이트 구현
- 체크된 상품만 필터링하여 총 금액을 계산하고, 기준 금액 대비 퍼센트로 변환
- 계산된 값을 그래프 컴포넌트에 전달하여 실시간으로 시각적 반영

| 장바구니 데이터를 기반으로 그래프 |
|:--:|
|  ![장바구니 데이터를 기반으로 그래프](img/CartGraph.gif)  |

#### CartPage.js
```jsx
// 체크된 장바구니 상품 id를 상태로 관리
const [checkedList, setCheckedList] = useState(state.cart.map(item => item.id));

// 장바구니 데이터가 변경되면 체크리스트 동기화
useEffect(() => {
    setCheckedList(state.cart.map(item => item.id));
}, [state.cart.length]);

// 선택된 상품만 filter()로 추출 후, reduce()를 활용해 총 금액 계산
const checkedPrice = state.cart.filter(item => checkedList.includes(item.id))
    .reduce((total, item) => total + (item.price * item.count), 0);

// 계산된 총 금액을 기준 금액(40,000원)과 비교해 퍼센트로 변환
<BarFill $percent={(checkedPrice / 40000) * 100}/>
```
### 3. 데이터 분리
- 상품, 커스터마이징, 매장, 공지사항 데이터를 파일별로 분리하여 관리
- data.js에 defaultScore와 cartCount 값을 설계하여 장바구니 추가 수에 따라 Best 영역 랭킹이 동적으로 변경되도록 구현
- customData.js의 price 속성을 기반으로 선택된 상품의 총 금액을 계산하도록 구조 설계

#### data.js
```javascript
const products = [
  {
        id: 6,
        category: '스페셜 도시락',
        name: '고추장제육 도시락',
        subTitle: '화끈한 불향과 매콤한 유혹, 지친 하루에 에너지를 더하다',
        price: 10600,
        productImg: process.env.PUBLIC_URL + '/images/SpicyPorkBox.png',
        detailImg: process.env.PUBLIC_URL + '/images/SpicyPorkBox_Detail.png',
        isMD: false,
        defaultScore: 800,
        cartCount: 150,       
        nutrition: {
            kcal: 900,
            carb: 95,
            protein: 33,
            fat: 38,
        }
    },
    {
        id: 7,
        category: '스페셜 도시락',
        name: '등심돈까스 도시락',
        subTitle: '바삭한 튀김옷 속 꽉 찬 고기, 정통 돈까스의 든든함',
        price: 11200,
        productImg: process.env.PUBLIC_URL + '/images/PorkCutletBox.png',
        detailImg: process.env.PUBLIC_URL + '/images/PorkCutletBox_Detail.png',
        isMD: true,
        defaultScore: 400,
        cartCount: 250,
        nutrition: {
            kcal: 1050,
            carb: 110,
            protein: 32,
            fat: 48,
        }
    },
];
```

#### customData.js
```javascript
const custom = {
    rice: [
        {
            id: 101,
            name: '흰쌀밥',
            customImg: process.env.PUBLIC_URL + '/images/WhiteRice.png',
            price: 1000,
            nutrition : {
                kcal: 300,
                carb: 67,
                protein: 6,
                fat: 0.6
            }
        }
    ...
    ],
  main: [],
  ...
};
```

#### 

### 4. 검색어 기반 상품 필터링 기능 구현
- 검색어 상태관리하고, filter()를 활용해 부분 일치하는 상품을 실시간으로 추출
- 입력값 변경 시 즉시 렌더링되도록 구현하여 사용자 편의성 향상

| 검색어 기반 필터링 |
|:--:|
|  ![검색어 기반 필터링](img/Search.gif)  |

```jsx
// 검색어 상태관리
const [search, setSearch] = useState('');

// filter()와 includes()를 사용하여 입력값과 일치하는 상품 실시간 필터링
const filterMenus= data.filter((item) => item.name.includes(search));
```

### 5. 도시락 커스터마이징 기능
- 단계별 선택 구조(rice, main, side)로 상태 설계
- 선택된 메뉴의 price 및 nutrition 정보를 합산하여 총 영양값 계산하여 그래프로 변환
- useMemo를 활용하여 selection 변경 시에만 재계산되도록 최적화
- 선택된 메뉴를 조합하여 하나의 커스텀 상품 객체로 생성 후 장바구니에 추가

| 도시락 커스터마이징 기능 |
|:--:|
|  ![도시락 커스터마이징 기능](img/Custom.gif)  |

```jsx
// 단계별(rice, main, side) 선택 구조를 객체 형태로 상태 관리
const [selection, setSelection] = useState({
  rice: null,
  main: null,
  side01: null,
  side02: null,
  side03: null,
  side04: null
});

// 선택된 상품의 가격 및 영양 합산
// 선택된 상품이 변경될 때만 재계산되도록 useMemo 사용
const totals = useMemo(() =>{
let resualtTotal = { kcal: 0, carb: 0, protein: 0, fat: 0, price: 0 };

Object.values(selection).forEach(path => {
  if(path){
    resualtTotal.price += path.price;
  }

  if(path && path.nutrition){
    resualtTotal.kcal += path.nutrition.kcal;
    resualtTotal.carb += path.nutrition.carb;
    resualtTotal.protein += path.nutrition.protein;
    resualtTotal.fat += path.nutrition.fat;

  }
});
  return resualtTotal;
},[selection]);

// 완성 시 장바구니에 선택된 상품들의 이름을 나열
const customItem = {
  id: Date.now(),
  name: '나만의 커스텀 도시락',
  price: totals.price,
  subtitle: Object.values(selection)
    .filter(Boolean)
    .map(item => item.name)
    .join(' + ')
};
dispatch(addItem(customItem));
