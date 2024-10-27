import React, {useState,useEffect, useContext} from 'react';

  import {RiWallet3Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
  import {Menu} from '@headlessui/react';
  import {HouseContext} from './HouseContext';

const PriceRangeDropdown = () => {
  const {price,setPrice} =
   useContext(HouseContext);

   
   const[isOpoen,setIsOpen]=useState(false);

   const prices = [
    {
      value: 'Price range (any)', 
    } ,   
      {
        value: '1000000 - 1300000', 
      } ,   
      {
        value: '1300000 - 1600000', 
      } ,   
      {
        value: '1600000 - 1900000', 
      }
      ,   
      {
        value: '1900000 - 2200000', 
      } ,   
      {
        value: '2200000 - 2400000', 
      }
      ,   
      {
        value: '2400000 - 2600000', 
      }
      ,   
      {
        value: '2600000 - 2800000', 
      }
      ,   
      {
        value: '2800000 - 3000000', 
      }      ,   
      {
        value: '3000000 - 100000000', 
      }
   ]

   return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={()=> setIsOpen(!isOpoen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Line className="dropdown-icon-primary"/>
      <div>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>What's Your Price Range</div>
      </div>
      {isOpoen ? (
            <RiArrowUpSLine
             className="dropdown-icon-secondary"/>
           ):(
            <RiArrowDownSLine
             className="dropdown-icon-secondary"/>
          )
        }
    </Menu.Button>
     <Menu.Items className='dropdown-menu'>
      {prices.map((price, index)=>{
        return(
           <Menu.Item
           onClick={() => setPrice(price.value)}
            className='cursor-pointer hover:text-green-700 transition' 
            as='li'
            key={index}>
          {price.value}
          </Menu.Item>
        );
      })}
     </Menu.Items>


    </Menu>
};

export default PriceRangeDropdown;
