import Link from "next/link";
import baseUrl from '@/utils/baseUrl'
import Image from 'next/image'
const getProducts = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/formdetails`,{
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch formdetails");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading formdetails: ", error);
  }
};

export default async function ProductsList() {
  const { formdetails } =  await getProducts ()|| {}
  return (
    <>
    <div  className=" border border-slate-300 grid gap-6  md:grid-cols-5  ">
      {formdetails && formdetails.map((formdetails) => (
        <div
          key={formdetails._id}
          className="p-4   flex justify-between  items-start"
        >
          <div>
          <h1 className="mt-1 text-lg font-extrabold text-gray-900">{formdetails.username}</h1>              
          <h4 className="mb-1 text-gray-600">{formdetails.email}</h4>
          <h4 className="mb-1 text-gray-600">{formdetails.phone}</h4>
          <h4 className="mb-1 text-gray-600">{formdetails.address}</h4>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};





