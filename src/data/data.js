import AddCardIcon from '@mui/icons-material/AddCard';


export const pageslinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Portfolio',
    path: '/Portfolio',
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
  }
];


export const datalinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Dashboard',
        icon: <AddCardIcon />,
        path:'/Dashboard',
        subtile: [
          {
            subName: 'sub1',
            subIcon: 'subicon1',
            subPath:'/CryptoVerse'
          },
          {
            subName: 'sub2',
            subIcon: 'subicon2',
            subPath:'/Maps'
          }
        ]
      },
      {
        name: 'Products',
        icon: <AddCardIcon />,
        path:'#',
        subtile: [
          {
            subName: 'sub3',
            subIcon: 'subicon3',
            subPath:'/CryptoVerse',
           
          },
          {
            subName: 'sub4',
            subIcon: 'subicon4',
            subPath:'/Maps'
          }
        ]
      },
    ],
  },

  {
    title: 'Real Time App',
    links: [
      {
        name: 'Weather',
        icon: <AddCardIcon />,
        path:'/RealTimeApp/WeatherForeCast',        
      },
      {
        name: 'WhiteBoard',
        icon: <AddCardIcon />,
        path:'/RealTimeApp/WhiteBoard',
      },
      {
        name: 'WeatherForeCast',
        icon: <AddCardIcon />,
        path:'/RealTimeApp/WeatherForeCast',
      },
    ],
  },
  {
    title: 'Cryptoverse',
    links: [
      {
        name: 'Home',
        icon: <AddCardIcon />,
        path:'/CryptoVerse',
      },
      {
        name: 'Crypto Currency',
        icon: <AddCardIcon />,
        path:'/CryptoVerse/CryptoCurrency',
      },
      {
        name: 'News',
        icon: <AddCardIcon />,
        path:'/CryptoVerse/News',
      },
      {
        name: 'Exchanges',
        icon: <AddCardIcon />,
        path:'/CryptoVerse/Exchanges',
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AddCardIcon />,
        path:'#',
        subtile: [
          {
            subName: 'CryptoVerse',
            subIcon: 'subicon3',
            subPath:'/CryptoVerse'
          },
          {
            subName: 'CryptoCurrency',
            subIcon: 'subicon4',
            subPath:'/CryptoCurrency'
          },
          {
            subName: 'Exchanges',
            subIcon: 'subicon4',
            subPath:'/Exchanges'
          },
          {
            subName: 'News',
            subIcon: 'subicon4',
            subPath:'/News'
          }
        ]
      },
      {
        name: 'area',
        icon: <AddCardIcon />,
        path:'#',
      },

      {
        name: 'bar',
        icon: <AddCardIcon />,
        path:'#',
      },
      {
        name: 'pie',
        icon: <AddCardIcon />,
        path:'#',
      },
      {
        name: 'financial',
        icon: <AddCardIcon />,
        path:'#',
      },
      {
        name: 'color-mapping',
        icon: <AddCardIcon />,
        path:'#',
      },
      {
        name: 'pyramid',
        icon: <AddCardIcon />,
        path:'#',
      },
      {
        name: 'stacked',
        icon: <AddCardIcon />,
        path:'#',
      },
      {
        name: 'stacked',
        icon: <AddCardIcon />,
        path:'#',
      },
      {
        name: 'stacked',
        icon: <AddCardIcon />,
        path:'#',
      },
    ],
  },
];



export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];
