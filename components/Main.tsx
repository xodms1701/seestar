"use client";

import DefaultComponent from "@/components/DefaultComponent";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import {useEffect, useState} from "react";
import process from "process";

const area = ['서울특별시', '남양주시', '양평군'];

export default function Main() {
  const [location, setLocation] = useState<{ latitude: number, longitude: number }>();
  const [visible, setVisible] = useState(true);

  console.log(process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if ('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({coords}) => {
        const {latitude, longitude} = coords;
        console.log(latitude, longitude);
        setLocation({latitude, longitude});
      })
    }
  };

  return <DefaultComponent className={'!p-0 !gap-0'}>
    <div className={'flex w-full border-b border-border pt-4 pb-4 pl-3 pr-3'}>
      <div className={'border-r border-border pr-4'}>
        <div className={'mb-3'}>지역</div>
        <div className={'flex justify-between items-center'}>
          <div className={'relative'}>
            <Dropdown placeholder={'지역을 선택해주세요.'} items={area.map((value) => ({text: value}))}/>
          </div>
          <div className={'bg-gps rounded ml-3 w-7 h-7 flex justify-center items-center'}>
            <button className={'relative w-4.25 h-4.25'} onClick={getLocation}>
              <Image src={'gps.svg'} alt={'gps'} fill/>
            </button>
          </div>
        </div>
      </div>
      <div className={'pl-4 pr-4 border-r border-border'}>
        <div className={'mb-3'}>지금 날씨</div>
        <div className={'flex items-center'}>
          <Image src={'cloudy-night.svg'} alt={'cloudy night'} width={40} height={40}/>
          <div className={'ml-3 text-xl'}>
            <span className={'text-white'}>맑음 </span>
            <span className={'text-gray'}>27℃</span>
          </div>
        </div>
      </div>
      <div className={'pl-4 pb-2'}>
        <div className={'flex gap-3'}>
          {['오늘', '내일', '화', '수', '목', '금', '토'].map((value, index) => {
            return <div key={index} className={'flex flex-col justify-between gap-6'}>
              <div className={'text-weatherText text-xs text-center'}>
                {value}
              </div>
              <Image src={'cloudy-night.svg'} alt={'cloudy night'} width={28} height={28}/>
            </div>
          })}
        </div>
      </div>
    </div>
    {visible ?
      <div id={'weather-table'} className={'w-full'}>
        <div className={'grid grid-cols-6 '}>
          <div className={'column'}></div>
          <div className={'column'}>3시간 전</div>
          <div className={'column'}>1시간 전</div>
          <div className={'column'}>현재 날씨</div>
          <div className={'column'}>1시간 후</div>
          <div className={'column'}>3시간 후</div>
        </div>
        <div className={'grid grid-cols-6'}>
          <div className={'header grid grid-rows-6'}>
            <div className={'column'}>요약</div>
            <div className={'column'}>가시거리</div>
            <div className={'column'}>일 강수량</div>
            <div className={'column'}>습도</div>
            <div className={'column'}>운량</div>
            <div className={'column'}>일 강수량</div>
          </div>
          {[1, 2, 3, 4, 5].map((value, idx) => {
            return <div key={idx} className={'grid grid-rows-6'}>
              <div className={'column'}>{value}</div>
              <div className={'column'}>{value}</div>
              <div className={'column'}>{value}</div>
              <div className={'column'}>{value}</div>
              <div className={'column'}>{value}</div>
              <div className={'column'}>{value}</div>
            </div>;
          })}
        </div>
      </div>
      :
      <div className={'flex flex-col items-center w-full h-full justify-center gap-1 pb-4'}>
        <div className={'relative w-7 h-7'}><Image src={'information.svg'} alt={'info'} fill/></div>
        <div className={'text-xs text-gray text-center'}>날씨 정보를 불러오기 위해서 <br/>먼저 상단의 지역 설정이 필요해요.</div>
      </div>}
  </DefaultComponent>;
}