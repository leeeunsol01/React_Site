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
        },
        {
            id: 102,
            name: '곤드레 나물밥',
            customImg: process.env.PUBLIC_URL + '/images/CustomGondreHerbRice.png',
            price: 1500,
            nutrition : {
                kcal: 335,
                carb: 65,
                protein: 7,
                fat: 4
            }
        },
        {
            id: 103,
            name: '차돌깍두기 볶음밥',
            customImg: process.env.PUBLIC_URL + '/images/CustomBeefKimchiFriedRice.png',
            price: 3000,
            nutrition : {
                kcal: 820,
                carb: 95,
                protein: 26,
                fat: 36
            }
        },
        {
            id: 104,
            name: '김치볶음밥',
            customImg: process.env.PUBLIC_URL + '/images/CustomKimchiFriedRice.png',
            price: 2000,
            nutrition : {
                kcal: 750,
                carb: 100,
                protein: 20,
                fat: 28
            }
        },
        {
            id: 105,
            name: '스팸김치볶음밥',
            customImg: process.env.PUBLIC_URL + '/images/CustomSpamKimchiFriedRice.png',
            price: 2500,
            nutrition : {
                kcal: 850,
                carb: 100,
                protein: 22,
                fat: 36
            }
        },
        {
            id: 106,
            name: '치즈김치볶음밥',
            customImg: process.env.PUBLIC_URL + '/images/CustomCheeseKimchiFriedRice.png',
            price: 2800,
            nutrition : {
                kcal: 900,
                carb: 95,
                protein: 24,
                fat: 40
            }
        },
        {
            id: 107,
            name: '소불고기김치볶음밥',
            customImg: process.env.PUBLIC_URL + '/images/CustomBeefBulgogiKimchiFriedRice.png',
            price: 3200,
            nutrition : {
                kcal: 880,
                carb: 98,
                protein: 30,
                fat: 34
            }
        },
        {
            id: 108,
            name: '참치야채비빔밥',
            customImg: process.env.PUBLIC_URL + '/images/CustomTunaVeggieBibimbap.png',
            price: 2500,
            nutrition : {
                kcal: 650,
                carb: 95,
                protein: 28,
                fat: 18
            }
        },
    ],
    main: [
        {
            id: 201,
            name: '제육볶음',
            customImg: process.env.PUBLIC_URL + '/images/CustomSpicyPork.png',
            price: 3000,
            nutrition : {
                kcal: 360,
                carb: 18,
                protein: 24,
                fat: 22
            }
        },
        {
            id: 202,
            name: '간장제육',
            customImg: process.env.PUBLIC_URL + '/images/CustomSoySaucePork.png',
            price: 2800,
            nutrition : {
                kcal: 340,
                carb: 16,
                protein: 24,
                fat: 20
            }
        },
        {
            id: 203,
            name: '간장제육(저당)',
            customImg: process.env.PUBLIC_URL + '/images/CustomSoySaucePork.png',
            price: 3200,
            nutrition : {
                kcal: 300,
                carb: 8,
                protein: 25,
                fat: 18
            }
        },
        {
            id: 204,
            name: '소불고기',
            customImg: process.env.PUBLIC_URL + '/images/CustomBulgogi.png',
            price: 4000,
            nutrition : {
                kcal: 350,
                carb: 14,
                protein: 26,
                fat: 22
            }
        },
        {
            id: 205,
            name: '불고기',
            customImg: process.env.PUBLIC_URL + '/images/CustomBulgogi.png',
            price: 3800,
            nutrition : {
                kcal: 350,
                carb: 16,
                protein: 24,
                fat: 24
            }
        },
        {
            id: 206,
            name: '떡갈비 2pc',
            customImg: process.env.PUBLIC_URL + '/images/CustomHamburgerSteak.png',
            price: 3500,
            nutrition : {
                kcal: 480,
                carb: 32,
                protein: 28,
                fat: 26
            }
        },
        {
            id: 207,
            name: '닭가슴살',
            customImg: process.env.PUBLIC_URL + '/images/CustomChickenBreast.png',
            price: 2500,
            nutrition : {
                kcal: 165,
                carb: 2,
                protein: 31,
                fat: 3
            }
        },
        {
            id: 208,
            name: '연어구이',
            customImg: process.env.PUBLIC_URL + '/images/CustomSmokedSalmon.png',
            price: 4500,
            nutrition : {
                kcal: 280,
                carb: 0,
                protein: 25,
                fat: 20
            }
        },
        {
            id: 209,
            name: '등심 돈까스',
            customImg: process.env.PUBLIC_URL + '/images/CustomPorkCutletBox.png',
            price: 4000,
            nutrition : {
                kcal: 840,
                carb: 50,
                protein: 44,
                fat: 35
            }
        },
        {
            id: 210,
            name: '탕수육',
            customImg: process.env.PUBLIC_URL + '/images/CustomSweetSourPork.png',
            price: 3000,
            nutrition : {
                kcal: 380,
                carb: 40,
                protein: 14,
                fat: 18
            }
        },
        {
            id: 211,
            name: '새우튀김',
            customImg: process.env.PUBLIC_URL + '/images/CustomShrimp.png',
            price: 3500,
            nutrition : {
                kcal: 420,
                carb: 26,
                protein: 24,
                fat: 22
            }
        },
        {
            id: 212,
            name: '치킨 가라아게',
            customImg: process.env.PUBLIC_URL + '/images/CustomChicken.png',
            price: 3200,
            nutrition : {
                kcal: 420,
                carb: 12,
                protein: 26,
                fat: 32
            }
        },
        {
            id: 213,
            name: '계란말이',
            customImg: process.env.PUBLIC_URL + '/images/CustomEgg.png',
            price: 1500,
            nutrition : {
                kcal: 190,
                carb: 4,
                protein: 12,
                fat: 14
            }
        },
    ],
    side01: [
        {
            id: 301,
            name: '닭가슴살 샐러드',
            customImg: process.env.PUBLIC_URL + '/images/CustomChickenBreastSalad.png',
            price: 3000,
            nutrition : {
                kcal: 280,
                carb: 18,
                protein: 32,
                fat: 6
            }
        },
        {
            id: 302,
            name: '리코타치즈 샐러드',
            customImg: process.env.PUBLIC_URL + '/images/CustomRicottaCheeseSalad.png',
            price: 3500,
            nutrition : {
                kcal: 420,
                carb: 22,
                protein: 18,
                fat: 30
            }
        },
        {
            id: 303,
            name: '양송이 스프',
            customImg: process.env.PUBLIC_URL + '/images/CustomMushroomSoup.png',
            price: 1000,
            nutrition : {
                kcal: 200,
                carb: 22,
                protein: 7,
                fat: 10
            }
        },
    ],
    side02: [
        {
            id: 304,
            name: '김치',
            customImg: process.env.PUBLIC_URL + '/images/CustomKimchi.png',
            price: 500,
            nutrition : {
                kcal: 15,
                carb: 3,
                protein: 1,
                fat: 0
            }
        },
        {
            id: 305,
            name: '무말랭이',
            customImg: process.env.PUBLIC_URL + '/images/CustomRadish.png',
            price: 500,
            nutrition : {
                kcal: 50,
                carb: 12,
                protein: 1,
                fat: 0
            }
        },
        {
            id: 306,
            name: '콩자반',
            customImg: process.env.PUBLIC_URL + '/images/CustomBeans.png',
            price: 500,
            nutrition : {
                kcal: 90,
                carb: 10,
                protein: 4,
                fat: 4
            }
        },
        {
            id: 307,
            name: '멸치볶음',
            customImg: process.env.PUBLIC_URL + '/images/Customanchovies.png',
            price: 500,
            nutrition : {
                kcal: 120,
                carb: 4,
                protein: 10,
                fat: 7
            }
        },
    ]
}

export default custom;