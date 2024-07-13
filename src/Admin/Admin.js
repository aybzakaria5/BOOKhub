import React from 'react';
import Style from './Admin.module.css';
import { BarChart } from '@mui/x-charts/BarChart';

const Admin = () => {
  
  return (
    <>
      <div className={Style.statistique}>
        <div className={Style.card}>
          <div className={Style.icon} style={{ background: "#0dd6b8" }}>
            <i className="bi bi-person"></i>
          </div>
          <div className={Style['card-content']}>
            <div className={Style.number}>100</div>
            <div className={Style.word}>Users</div>
          </div>
        </div>

        <div className={Style.card}>
          <div className={Style.icon} style={{ background: "#ff9b8a" }}>
            <i className="bi bi-book"></i>
          </div>
          <div className={Style['card-content']}>
            <div className={Style.number}>250</div>
            <div className={Style.word}>Books</div>
          </div>
        </div>

        <div className={Style.card}>
          <div className={Style.icon} style={{ background: "#ffba68" }}>
            <i className="bi bi-chat-left-dots"></i>
          </div>
          <div className={Style['card-content']}>
            <div className={Style.number}>25</div>
            <div className={Style.word}>Messages</div>
          </div>
        </div>   
      </div>

      <div className={Style.chartContainer}>
          <BarChart
            series={[{ data: [35,4, 24, 34, 2, 12, 6, 8] }]}
            height={290}
            xAxis={[{ data: ['Adventure','Romance', 'Thriller', 'Memoir','Travel','Health','Poetry','Cooking'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            borderRadius={20}
          />
      </div>


    </>
  );
};

export default Admin;
