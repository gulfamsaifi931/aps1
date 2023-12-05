import React from 'react' 
import Contacts from "../app/contacts/page.js"
import Door from "../app/door/page"
import Herosection  from './components/Herosection'
import Service from '@/app/service/page.js'
import Wallsection from '@/app/components/Wallsection.js'
import Futured_product from './futured_product/page.js'
function page() {
  return (
    
    <>
    <Herosection/>
    <Service/>
    <Futured_product/>
    <Wallsection />
    <Door />
    <Contacts />
    </>
  );
};

export default page
