import DefaultComponent from "@/components/DefaultComponent";
import Item from "@/components/Item";
import Image from "next/image";

export default function RecommendPlace() {
  return <DefaultComponent>
    <div className={'flex gap-1 items-center'}>
      <div className={'relative w-3 h-3'}>
        <Image src={'star.svg'} alt={'star'} fill/>
      </div>
      <div className={'text-gray'}>오늘 별 보기 좋은 장소</div>
    </div>
    <div className={'grid grid-cols-5 w-full gap-2 gap-y-3.5'}>
      <Item>광해가 적은 지역</Item>
      <Item>지대가 높은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>지대가 높은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
      <Item>광해가 적은 지역</Item>
    </div>
  </DefaultComponent>;
}