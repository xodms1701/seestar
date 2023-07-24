import DefaultComponent from "@/components/DefaultComponent";
import Image from "next/image";
import Item from "@/components/Item";
import LittleItem from "@/components/LittleItem";
import LittleItemWrapper from "@/components/LittleItemWrapper";
import ItemWrapper from "@/components/ItemWrapper";

export default function LeftTip() {
  return <DefaultComponent className={'w-full'}>
    <div className={'flex gap-1'}>
      <Image src={'star.svg'} alt={'star'} width={0.75 * 16} height={0.75 * 16}/>
      별관측 Tip
    </div>
    <div className={'text-xs text-gray'}>별 관측은 이런 곳에서!</div>
    <ItemWrapper>
      <Item>광해가 적은 지역</Item>
      <Item>지대가 높은 지역</Item>
    </ItemWrapper>
    <div className={'text-xs text-gray'}>별보기 좋은 날씨는?</div>
    <div className={'flex gap-2 flex-col items-start w-full'}>
      <LittleItemWrapper>
        <LittleItem title={'가시거리'} value={'20 이상'}/>
        <LittleItem title={'일 강수량'} value={'0.0'}/>
      </LittleItemWrapper>
      <LittleItemWrapper>
        <LittleItem title={'일기'} value={'-'}/>
        <LittleItem title={'습도'} value={'낮음'}/>
        <LittleItem title={'운량'} value={'없음'}/>
      </LittleItemWrapper>
    </div>
  </DefaultComponent>;
}