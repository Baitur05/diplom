import React from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CableIcon from '@mui/icons-material/Cable';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WatchIcon from '@mui/icons-material/Watch';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import VoicemailIcon from '@mui/icons-material/Voicemail';

import { Link } from "react-router-dom/cjs/react-router-dom";


const Categories = () => {
  const data = [
    {
      cateImg: <PhoneAndroidIcon style={{ color: '#0f3460' }} />,
      cateName: "Телефоны",
      link: "/phone",
    },
    {
      cateImg: <CableIcon style={{ color: '#0f3460' }} />,
      cateName: "Электроника",
      link: "/phone",
    },
    {
      cateImg: <LaptopMacIcon style={{ color: '#0f3460' }} />,
      cateName: "Ноутбуки",
      link: "/phone",
    },
    {
      cateImg: <TabletAndroidIcon style={{ color: '#0f3460' }} />,
      cateName: "Планшеты",
      link: "/phone",
    },
    {
      cateImg: <HeadphonesIcon style={{ color: '#0f3460' }} />,
      cateName: "Наушники",
      link: "/phone",
    },

    {
      cateImg: <WatchIcon style={{ color: '#0f3460' }} />,
      cateName: "часы",
      link: "/phone",
    },
    {
      cateImg: <VoicemailIcon style={{ color: '#0f3460' }} />,
      cateName: "Очки",
      link: "/phone",
    },

    {
      cateImg: <SmartphoneIcon style={{ color: '#0f3460' }} />,
      cateName: "Чехлы",
      link: "/phone",
    },
  ];

  return (
    <>
      <div style={{
        padding: 10,
        width: 'max-content',
      }} className="category w-44 ml-20">
        {data.map((value, index) => {
          return (
            <div className="box flex items-center " key={index} style={{ height: '60px', textAlign: 'center' }}>
              {value.cateImg}
              <Link to={value.link}>
                <div>
                  <span style={{ fontSize: '18px' }}>{value.cateName}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
