import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/app/components/error'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}