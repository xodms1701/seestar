export default function LittleItem({title, value}: { title: string, value: string }) {
  return <div className={'flex justify-between bg-lItem rounded-lg text-xs h-8 items-center w-full p-2'}>
    <div className={'text-lItemTitle'}>{title}</div>
    <div className={'text-lItemValue'}>{value}</div>
  </div>;
}