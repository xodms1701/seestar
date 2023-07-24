import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftNationWideWeather from "@/components/LeftNationWideWeather";
import Main from "@/components/Main";
import LeftTip from "@/components/LeftTip";
import RecommendPlace from "@/components/RecommendPlace";

export default function Home() {

  return (
    <>
      <Header/>
      <div className={'flex justify-center gap-4 pl-4 pr-4'}>
        <nav className={'flex flex-wrap w-72 gap-4'}>
          <LeftNationWideWeather/>
          <LeftTip/>
        </nav>
        <div className={'flex flex-col gap-4'}>
          <Main/>
          <RecommendPlace/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
