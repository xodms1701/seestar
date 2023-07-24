import Image from "next/image";

export default function Header() {
  return <header className={'h-18 flex justify-center mb-16'}>
    <Image src={'see-star-logo.svg'} alt={'logo'} width={133} height={40}></Image>
  </header>;
}