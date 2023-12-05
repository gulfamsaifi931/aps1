import Link from "next/link";
import baseUrl from '@/utils/baseUrl'
import Image from "next/image"
import Formdetails from '../../formdetails/page'
import Productguide from '@/app/components/Productguide'
const getTopics = async (id) => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/products/${id}`,{
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

export default async function ProductsList({params}) {
  const  {products}  =  await getTopics(params.id)|| {}
  const id = params.id;
  return (
    <>
    <div className="bg-white ">
    <div style={{marginBottom:'-14rem'}} className=" py-24 mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h1 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 text-black py-2"> PRODUCT VIEW/ORDER </h1>
    <p className="text-1xl mb-9  text-center text-gray-900"> A Plus Studio has completed some project. you can see in our gallery section. thank you from A Plus Studio. </p>
    <div  class="items-center justify-center bg-opacity-40 relative  bg-black text-white ">
       <h1 className="text-2xl text-center">We provides good and perfect products for you. </h1>
    </div>
  </div>
    <div style={{marginBottom:'-6rem'}} className="py-24 flex items-center justify-center flex-wrap">
        <div
          key={products._id}
          className="p-4 items-start"
        >
          <div>    
            <Image
            width={1500}
            height={500}
            className=" m-auto  rounded-lg " src={products.mediaUrl} alt='' />
             <h3 className="text-center mt-1 text-lg font-medium text-gray-900">{products.name}</h3>
        <p className="text-center mt-0 text-sm font-medium text-gray-900">Code: {products.code}</p>
          </div>
        </div>
         <div className="relative z-10 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <h1 className=" text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black"> About Product</h1>
      </div>
        <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-60 md:justify-center md:flex md:items-center ">
        <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl">Sleek Design: Product</h3>
                <p style={{ marginLeft: 20, marginRight: 20 }}>
              A plus studio provide the sleek Design: Experience the perfect fusion of form and function with our sleek and modern designs. Our product not only performs exceptionally but also adds a touch of elegance to your workspace or home/offices.
                </p>
              </div>
        <div className=" mx-auto w-1/2 md:w-1/3">
                <Image
                  src={products.mediaUrl}
                  alt="ecommerce"
                  width={400}
                  height={100}
                  className="object-none  hover:scale-110 transition duration-500 cursor-pointer object-cover h-48 w-96 ..."
                />
              </div>
              </div>
              
    </div>
    <div
          className="py-16 text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-60 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="font-medium text-2xl">Heigh Quality Product & Reliability</h3>
            <p style={{ marginLeft: 20, marginRight: 20 }}>
            Reliability: Trust in the durability and reliability of our product. Designed with precision engineering, our products are built to withstand rigorous usage and deliver consistent performance.
                </p>
          </div>
          <div className="mx-auto w-1/2 md:w-1/3">
            <Image
             src={products.mediaUrl}
              alt="ecommerce"
              width={300}
              height={100}
              className="object-none hover:scale-110 transition duration-500 cursor-pointer object-cover h-48 w-96 ..."
            />
          </div>
        </div>
        <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-60 md:justify-center md:flex md:items-center ">
        <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl">Better and Good Quality Product</h3>
                <p style={{ marginLeft: 20, marginRight: 20 }}>
                A Plus Studio provides high-quality products as per your requirements. such as your choice of color and your size of products or quantity.
                </p>
              </div>
        <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src={products.mediaUrl}
                  alt="ecommerce"
                  width={400}
                  height={100}
                  className="object-none hover:scale-110 transition duration-500 cursor-pointer object-cover h-60 w-80 ..."
                />
              </div>
              </div>
              
    <Formdetails />
    <Productguide />
    </div>
    </>
  );
};





