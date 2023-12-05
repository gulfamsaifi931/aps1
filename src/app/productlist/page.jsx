import Link from "next/link";
import RemoveBtn from "../components/RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { NextResponse } from 'next/server'
import baseUrl from '@/utils/baseUrl'
import Image from 'next/image'

const getTopics = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/products`,{
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch products");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } =  await getTopics ()|| {}
  return (
    <>
      {products && products.map((t) => (
        
        <div
          key={t._id}
          className="p-4 border rounded-xl border-white my-3 flex justify-between gap-5 items-start"
        >
          <div>
          <Image 
            width={10000}
            height={10000}
            className="h-80 w-64 rounded-xl   shadow-md  bg-white transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... " src={t.mediaUrl}  alt='' />
            
           <div className="mt-3">
            <h1 className="font-bold text-center">{t.name}</h1>
            <h1 className="text-lime-600 text-center">{t.code}</h1>
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

