import './globals.css'
import type {Metadata} from 'next'
import localFont from 'next/font/local'
import RotationPlanet from "@/components/RotationPlanet";

const suite = localFont({
  src: './SUITE-Variable.ttf',
  variable: '--font-suite'
});

export const metadata: Metadata = {
  title: 'See Star',
  description: '별 보러 갈래?',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${suite.variable} font-suite`}>
    <div className={'overflow-hidden absolute w-full h-full -z-10'}>
      <RotationPlanet/>
    </div>
    {children}
    </body>
    </html>
  )
}
