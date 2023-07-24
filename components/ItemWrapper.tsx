export default function ItemWrapper({children}: { children: React.ReactNode }) {
  return <div className={'flex justify-between gap-2 w-full'}>{children}</div>;
}