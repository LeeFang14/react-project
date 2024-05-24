import { FluidGauge } from './../../D3/liquidFillGauge.js';
import { useEffect } from 'react';
import styles from './WaterLevelRecordPage.module.scss';

export default function WaterLevelRecordPage() {
  const { card_list, card_item, abnormal } = styles;
  const fakeData = [
    {
      pondId: '01',
      pondName: '白蝦池',
      waterDepthLocation: '70',
      waterCapacity: '348',
      abnormalStatus: false,
    },
    {
      pondId: '02',
      pondName: '養水池',
      waterDepthLocation: '50',
      waterCapacity: '298',
      abnormalStatus: false,
    },
    {
      pondId: '03',
      pondName: '龍膽石斑魚池',
      waterDepthLocation: '95',
      waterCapacity: '592',
      abnormalStatus: true,
    },
    {
      pondId: '04',
      pondName: '白蝦池',
      waterDepthLocation: '25',
      waterCapacity: '104',
      abnormalStatus: true,
    },
  ];
  useEffect(() => {
    const createGauge = (elementId, value, customConfig) => {
      const config = { ...FluidGauge.liquidFillGaugeDefaultSettings(), ...customConfig };
      new FluidGauge(elementId, value, config);
    };

    fakeData.forEach((item) => {
      createGauge('fillgauge' + item.pondId, parseInt(item.waterDepthLocation), {
        circleColor: '#4aadde',
        textSize: 0,
        waveCount: 0.5,
        waveAnimateTime: 5000,
        waveColor: '#4aadde',
      });
    });
  }, []);

  return (
    <div className={card_list}>
      {fakeData.map((item) => (
        <div className={`${card_item} ${item.abnormalStatus ? abnormal : ''}`} key={item.pondId}>
          <div>
            <p>{item.pondId}</p>
            <p>{item.pondName}</p>
            <p>{item.waterDepthLocation}%</p>
            <p>目前{item.waterCapacity}立方公尺</p>
          </div>
          <svg id={'fillgauge' + item.pondId} width='120px' height='120px' data={item.waterDepthLocation}></svg>
        </div>
      ))}
    </div>
  );
}
