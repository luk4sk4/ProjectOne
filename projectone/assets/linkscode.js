





/*  

{
url: '',
precio:'',
marca: '',
imagen1: '',
imagen2: '',
imagen3: ''
imagen4: ''
}.



      */

let paquete = [
  {
    url: 'https://www.zara.com/es/es/jersey-lana-x-harry-lambert-p00077390.html?v1=294389616&v2=2298056',
    precio: '49,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_2_1_1.jpg?ts=1699358004437',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_6_1_1.jpg?ts=1699457498004',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_2_2_1.jpg?ts=1699358006542',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_2_3_1.jpg?ts=1699358000958'
  },
  {
    url: 'https://www.zara.com/es/es/cardigan-cropped-x-harry-lambert-p00077391.html?v1=294552898&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_1_1_1.jpg?ts=1699358002808',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_2_1_1.jpg?ts=1699358005696',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_2_2_1.jpg?ts=1699358006540',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_2_5_1.jpg?ts=1699358006777'
  },
  {
    url: 'https://www.zara.com/es/es/jersey-rayas-x-harry-lambert-p00077392.html?v1=295370167&v2=2298056',
    precio:'49,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_1_1_1.jpg?ts=1699358002395',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_2_1_1.jpg?ts=1699358006982',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_2_2_1.jpg?ts=1699358007861',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_6_1_1.jpg?ts=1699457498498'
  },
  {
    url: 'https://www.zara.com/es/es/polo-punto-con-lana-brushed-p05755397.html?v1=293381760&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_1_1_1.jpg?ts=1699270681323',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_1_1.jpg?ts=1699270681486',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_2_1.jpg?ts=1699270681730',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_6_1_1.jpg?ts=1698916400066'
  },
  {
    url: 'https://www.zara.com/es/es/jersey-lana-x-harry-lambert-p00077390.html?v1=294389616&v2=2298056',
    precio: '49,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_2_1_1.jpg?ts=1699358004437',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_6_1_1.jpg?ts=1699457498004',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_2_2_1.jpg?ts=1699358006542',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/0077/390/611/2/w/750/0077390611_2_3_1.jpg?ts=1699358000958'
  },
  {
    url: 'https://www.zara.com/es/es/cardigan-cropped-x-harry-lambert-p00077391.html?v1=294552898&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_1_1_1.jpg?ts=1699358002808',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_2_1_1.jpg?ts=1699358005696',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_2_2_1.jpg?ts=1699358006540',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/0077/391/700/2/w/750/0077391700_2_5_1.jpg?ts=1699358006777'
  },
  {
    url: 'https://www.zara.com/es/es/jersey-rayas-x-harry-lambert-p00077392.html?v1=295370167&v2=2298056',
    precio:'49,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_1_1_1.jpg?ts=1699358002395',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_2_1_1.jpg?ts=1699358006982',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_2_2_1.jpg?ts=1699358007861',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/0077/392/800/2/w/750/0077392800_6_1_1.jpg?ts=1699457498498'
  },
  {
    url: 'https://www.zara.com/es/es/polo-punto-con-lana-brushed-p05755397.html?v1=293381760&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_1_1_1.jpg?ts=1699270681323',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_1_1.jpg?ts=1699270681486',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_2_1.jpg?ts=1699270681730',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_6_1_1.jpg?ts=1698916400066'
  },
  {
    url: 'https://www.zara.com/es/es/polo-punto-con-lana-brushed-p05755397.html?v1=293381760&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_1_1_1.jpg?ts=1699270681323',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_1_1.jpg?ts=1699270681486',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_2_1.jpg?ts=1699270681730',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_6_1_1.jpg?ts=1698916400066'
  },
  {
    url: 'https://www.zara.com/es/es/polo-punto-con-lana-brushed-p05755397.html?v1=293381760&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_1_1_1.jpg?ts=1699270681323',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_1_1.jpg?ts=1699270681486',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_2_1.jpg?ts=1699270681730',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_6_1_1.jpg?ts=1698916400066'
  },
  {
    url: 'https://www.zara.com/es/es/polo-punto-con-lana-brushed-p05755397.html?v1=293381760&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_1_1_1.jpg?ts=1699270681323',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_1_1.jpg?ts=1699270681486',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_2_1.jpg?ts=1699270681730',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_6_1_1.jpg?ts=1698916400066'
  },
  {
    url: 'https://www.zara.com/es/es/polo-punto-con-lana-brushed-p05755397.html?v1=293381760&v2=2298056',
    precio:'59,95 EUR',
    marca: 'ZARA',
    imagen1: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_1_1_1.jpg?ts=1699270681323',
    imagen2: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_1_1.jpg?ts=1699270681486',
    imagen3: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_2_2_1.jpg?ts=1699270681730',
    imagen4: 'https://static.zara.net/photos///2023/I/0/2/p/5755/397/717/2/w/750/5755397717_6_1_1.jpg?ts=1698916400066'
  },
]

export default paquete;