import { Link, Outlet } from 'react-router-dom';
import Calendar from '../../component/Calendar/Calendar.jsx';
import styles from './HomePage.module.scss';

export default function HomePage() {
  const { nested_nav, status } = styles;
  const fakeTodayData = {
    year: '2022',
    month: '01',
    day: '01',
    week: '星期一',
    lunarCalendar: '十一月廿九',
    schedule: [
      {
        id: '1',
        scheduleTime: '11:00',
        scheduleText: '昨晚所放的飼料都有吃完，水色正常',
      },
      {
        id: '2',
        scheduleTime: '09:00',
        scheduleText: '需要預購聯豐蝦粉，特價只到01/10預定10包',
      },
    ],
  };

  const nestedNav = [
    {
      name: '養殖監控',
      path: 'aquaculture-monitoring',
      imgURL: 'https://picsum.photos/60/60?random=1',
      status: true,
    },
    {
      name: '進水排水',
      path: 'water-inflow-outflow',
      imgURL: 'https://picsum.photos/60/60?random=2',
      status: false,
    },
    {
      name: '養水消毒',
      path: 'water-treatment-disinfection',
      imgURL: 'https://picsum.photos/60/60?random=3',
      status: false,
    },
    {
      name: '批次紀錄',
      path: 'batch-records',
      imgURL: 'https://picsum.photos/60?random=4',
      status: false,
    },
    {
      name: '放苗紀錄',
      path: 'fingerling-release-records',
      imgURL: 'https://picsum.photos/60?random=5',
      status: false,
    },
    {
      name: '餵養紀錄',
      path: 'feeding-records',
      imgURL: 'https://picsum.photos/60?random=6',
      status: false,
    },
    {
      name: '量測紀錄',
      path: 'measurement-records',
      imgURL: 'https://picsum.photos/60?random=7',
      status: false,
    },
    {
      name: '收成紀錄',
      path: 'harvesting-records',
      imgURL: 'https://picsum.photos/60?random=8',
      status: false,
    },
    {
      name: '包裝紀錄',
      path: 'packaging-records',
      imgURL: 'https://picsum.photos/60?random=9',
      status: false,
    },
  ];
  return (
    <>
      <Calendar fakeTodayData={fakeTodayData} />
      <Outlet />
      <nav className={nested_nav}>
        {nestedNav.map((item) => (
          <Link to={item.path} key={item.path} className={`${item.status ? status : ''}`}>
            <img src={item.imgURL} alt='nested nav image' />
            <div>{item.name}</div>
          </Link>
        ))}
      </nav>
    </>
  );
}
