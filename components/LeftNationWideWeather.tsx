import DefaultComponent from "@/components/DefaultComponent";
import SvgMap from "@/components/SvgMap";

export default function LeftNationWideWeather() {
  return <DefaultComponent>
    <div>전국 날씨</div>
    <SvgMap width={'16.5rem'} height={'23.75rem'}/>
    {/*<Image src={'map.svg'} alt={'map'} width={16.5 * 16} height={23.75 * 16}/>*/}
  </DefaultComponent>;
}