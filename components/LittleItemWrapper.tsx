export default function LittleItemWrapper({children}: { children: React.ReactNode }) {
  return <div className={'flex gap-2 w-full'}>{children}</div>
}