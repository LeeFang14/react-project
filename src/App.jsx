import { useEffect, useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AquacultureMonitoringPage from './pages/AquacultureMonitoringPage/AquacultureMonitoringPage.jsx';
import WaterLevelRecordPage from './pages/WaterLevelRecordPage/WaterLevelRecordPage.jsx';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage';
import styles from './App.module.scss';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home', { replace: true });
    }
  }, [location.pathname, navigate]);

  function handleNavChange(event) {
    const selectedPage = event.target.value;
    navigate(selectedPage);
  }
  function handleGoBack() {
    window.history.back();
  }

  function handleGoToHomePage() {
    navigate('/home');
  }

  const isSecondLevelRoute = useMemo(() => {
    const regex = /\/[^/]+\/[^/]+/g;
    return regex.test(location.pathname);
  }, [location.pathname]);

  const currentRouteName = useMemo(() => {
    const routeNameMap = {
      'aquaculture-monitoring': '養殖監控',
      'water-inflow-outflow': '進水排水',
      'water-treatment-disinfection': '養水消毒',
      'batch-records': '批次紀錄',
      'fingerling-release-records': '放苗紀錄',
      'feeding-records': '餵養紀錄',
      'measurement-records': '量測紀錄',
      'harvesting-records': '收成紀錄',
      'packaging-records': '包裝紀錄',
      'water-temperature-record': '水溫紀錄',
      'water-level-record': '水位紀錄',
      'orp-record': 'ORP紀錄',
      'dissolved-oxygen-record': '溶氧紀錄',
      'ph-record': 'pH紀錄',
      'salinity-record': '鹽度紀錄',
      'ammonia-record': '氨紀錄',
      'nitrite-record': '亞硝酸紀錄',
      'bacterial-load-record': '生菌量紀錄',
    };
    const parts = location.pathname.split('/').filter(Boolean);
    let name = '';
    if (parts.length > 1) {
      const lastPart = parts[parts.length - 1];
      name = routeNameMap[lastPart] || '';
    }
    return name;
  }, [location.pathname]);

  const {
    wrapper,
    header_container,
    person_context,
    bell_btn,
    person_btn,
    nav_container,
    current_page,
    custom_arrow,
    notify,
    custom_select_context,
    custom_select_wrapper,
    main_container,
    btn_context,
    home_btn,
  } = styles;
  const navList = [
    {
      path: '/home',
      name: '屏東歸來廠',
    },
    {
      path: '/about',
      name: 'about',
    },
  ];
  return (
    <div className={wrapper}>
      <header className={header_container}>
        <button className='prev_btn' type='button' onClick={handleGoBack}>
          {isSecondLevelRoute && <i className='fa-solid fa-chevron-left'></i>}
        </button>
        <div className={person_context}>
          <button className={bell_btn} type='button'>
            <i className='fas fa-bell'></i>
            <span className={notify}>1</span>
          </button>
          <button type='button'>
            <i className='fas fa-right-from-bracket'></i>
          </button>
          <button className={person_btn}>小明</button>
        </div>
      </header>
      <nav className={nav_container}>
        <span className={current_page}>{currentRouteName}</span>
        <div className={custom_select_context}>
          <select className={custom_select_wrapper} onChange={handleNavChange} defaultValue='/home'>
            {navList.map((item) => (
              <option value={item.path} key={item.path}>
                {item.name}
              </option>
            ))}
          </select>
          <span className={custom_arrow}>
            <i className='fa-solid fa-chevron-down'></i>
          </span>
        </div>
      </nav>
      <main className={main_container}>
        <Routes>
          <Route path='/home/*' element={<HomePage />} />
          <Route path='/about/*' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/*' element={<AquacultureMonitoringPage />} name='養殖監控' />
          <Route path='/home/aquaculture-monitoring/water-temperature-record' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/water-level-record' element={<WaterLevelRecordPage />} />
          <Route path='/home/aquaculture-monitoring/orp-record' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/dissolved-oxygen-record' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/ph-record' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/salinity-record' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/ammonia-record' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/nitrite-record' element={<UnderConstructionPage />} />
          <Route path='/home/aquaculture-monitoring/bacterial-load-record' element={<UnderConstructionPage />} />
          <Route path='/home/water-inflow-outflow' element={<UnderConstructionPage />} />
          <Route path='/home/water-treatment-disinfection' element={<UnderConstructionPage />} />
          <Route path='/home/batch-records' element={<UnderConstructionPage />} />
          <Route path='/home/fingerling-release-records' element={<UnderConstructionPage />} />
          <Route path='/home/feeding-records' element={<UnderConstructionPage />} />
          <Route path='/home/measurement-records' element={<UnderConstructionPage />} />
          <Route path='/home/harvesting-records' element={<UnderConstructionPage />} />
          <Route path='/home/packaging-records' element={<UnderConstructionPage />} />
        </Routes>
      </main>
      <div className={btn_context}>
        {isSecondLevelRoute && (
          <button className={home_btn} type='button' onClick={handleGoToHomePage}>
            <i className='fa-solid fa-house'></i>
          </button>
        )}
      </div>
    </div>
  );
}
