import { Link, Outlet } from 'react-router-dom';
import styles from './AquacultureMonitoringPage.module.scss';

export default function AquacultureMonitoringPage() {
  const { sub_page_nav, nav_item, status } = styles;
  const subPageNav = [
    {
      name: '水溫紀錄',
      path: 'water-temperature-record',
      imgURL: 'https://picsum.photos/60/60?random=10',
      status: false,
    },
    {
      name: '水位紀錄',
      path: 'water-level-record',
      imgURL: 'https://picsum.photos/60/60?random=11',
      status: true,
    },
    {
      name: 'ORP紀錄',
      path: 'orp-record',
      imgURL: 'https://picsum.photos/60/60?random=12',
      status: false,
    },
    {
      name: '溶氧紀錄',
      path: 'dissolved-oxygen-record',
      imgURL: 'https://picsum.photos/60/60?random=13',
      status: true,
    },
    {
      name: 'pH紀錄',
      path: 'ph-record',
      imgURL: 'https://picsum.photos/60/60?random=14',
      status: true,
    },
    {
      name: '鹽度紀錄',
      path: 'salinity-record',
      imgURL: 'https://picsum.photos/60/60?random=15',
      status: false,
    },
    {
      name: '氨紀錄',
      path: 'ammonia-record',
      imgURL: 'https://picsum.photos/60/60?random=16',
      status: false,
    },
    {
      name: '亞硝酸紀錄',
      path: 'nitrite-record',
      imgURL: 'https://picsum.photos/60/60?random=17',
      status: false,
    },
    {
      name: '生菌量紀錄',
      path: 'bacterial-load-record',
      imgURL: 'https://picsum.photos/60/60?random=18',
      status: false,
    },
  ];
  const isOdd = subPageNav.length % 2 !== 0;
  return (
    <>
      <Outlet />
      <nav className={sub_page_nav}>
        {subPageNav.map((item) => (
          <Link to={item.path} key={item.path} className={`${item.status ? status : ''} ${isOdd ? nav_item : ''}`}>
            <img src={item.imgURL} alt='SubPage Nav image' />
            <div>{item.name}</div>
          </Link>
        ))}
      </nav>
    </>
  );
}
