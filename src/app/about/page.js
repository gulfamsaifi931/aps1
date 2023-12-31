import React from 'react'
import Aboutus from '@/app/components/Aboutus' 




export const metadata = {
  title: 'A Plus Studio',
  description: 'Generated by Gulfaam',
  manifest:'manifest.webmanifest',
  metadataBase: new URL('https://aplusstudio.in'),
  generator: 'aplusstudio',
  applicationName: 'aplusstudio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'aplusstudio', url:'https://aplusstudio.in' }, { name: 'gulfam saifi', url: 'https://gulfam.in' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi',
  type: 'manufacturer,architecture',
    publishedTime: '2023-01-01T00:00:00.000Z',
    archives: ['https://aplusstudio.in/about'],
    bookmarks: ['https://aplusstudio.in/door'],
  formatDetection: {
    email: 'info@aplusstudio.in',
    address: 'noida sector-83 A-Block 218-219 pin-201305',
    telephone: '9873250016',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
}

const About = () => {
  return (
    <>
      <Aboutus/>
    </>
  )
}

export default About
