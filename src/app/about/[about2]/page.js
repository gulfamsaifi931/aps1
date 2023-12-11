import React from 'react'
import About from '@/app/components/About'
export const metadata = {
  openGraph: {
    title: 'aplusstudio',
    description: 'abut aplusstudio',
    url: 'https://aplusstudio.in',
    siteName: 'aplusstudio',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
const Aboutpage = () => {
  return (
    <>
      <About/>
    </>
  )
}

export default Aboutpage
