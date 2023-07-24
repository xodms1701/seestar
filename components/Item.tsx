export default function Item({children}: { children: React.ReactNode }) {
  return <div className={'flex p-2 justify-center items-center gap-1 item w-full'}>{children}</div>
}