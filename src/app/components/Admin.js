"use client"
import dynamic from 'next/dynamic'
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });
  
  if(status === "loading") {
    return <div className="py-24  text-white " style={{backgroundColor:'black'}}>
      <h1 className="flex h-screen justify-center bg-[#404040] items-center">
        Loading.............
      </h1>
    </div>
  }
  const NoSSR = dynamic(() => import('@/app/admindashboard/page'), { ssr: false })
  return (
    <div>
      <NoSSR />
    </div>
  );
}
