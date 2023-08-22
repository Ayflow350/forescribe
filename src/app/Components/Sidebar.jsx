import React from 'react';
import Image from 'next/image';
import Account from '../assets/Icons/Account.png';
import Applications from '../assets/Icons/Applications.png';
import insights from '../assets/Icons/insights.png';
import integrations from '../assets/Icons/integrations.jpg';
import Logo from '../assets/Icons/Logo.png';
import Renewal from '../assets/Icons/Renewal.jpg';
import Transactions from '../assets/Icons/Transactions.png';
import Employees from '../assets/Icons/Employees.png';
import info from  '../assets/Icons/info.png';
import vee from  '../assets/Icons/vee.svg';


const sidebar = [
  [
    { name: 'Applications', icon: Applications, key: 1 },
    { name: 'Renewals', icon: Renewal, key: 2 },
    { name: 'Transactions', icon: Transactions, key: 3 },
    { name: 'Employees', icon: Employees, key: 4 },
  ],
  // [
  //     { name: "integrations", icon: integrations },
  //     { name: "Accounts", icon: Account },
  // ],
];

const Settings = [
  [
    { name: 'integrations', icon: integrations, key: 1 },
    { name: 'Accounts', icon: Account, key: 2 },
  ],
];

const Sidebar = () => {
  return (
    <div>
    <div className='w-full h-[1020px] border-r border-b border-gray-200 bg-white space-y-7 space-x-7'>
      <div className='py-4 font-bold flex justify-center border-b'>
        <Image src={Logo} className='' />
      </div>

      <div className='flex gap-3'>
        <Image src={insights} className='text-[#2C3652] w-[21.5px] h-[21.5px]' />
        <h1 className='text-[#2C3652] font-poppins text-base font-normal'>Insights</h1>
      </div>

      <div className='space-y-1'>
        <h1 className='text-[#8B91A9] font-poppins text-sm font-normal'>Menu</h1>
        {sidebar[0].map((item) => (
          <div
          key={item.key}
          className='flex gap-3 cursor-default items-center p-4 mr-3 hover:bg-[#F6EFFF] hover:rounded-r-lg hover:border-l-4 hover:border-[#8B3DFF] transition-all'
        >
          <Image src={item.icon} className='text-[#2C3652]' />
          <h1 className='text-[#2C3652] font-poppins text-base font-normal hover:text-[#9853FF]'>{item.name}</h1>
        </div>
        ))}
      </div>

      <div>
        <div className='space-y-1'>
          <h1 className='text-[#8B91A9] font-poppins text-sm font-normal'>Settings</h1>
          {Settings[0].map((item) => (
            <div
            key={item.key}
            className='flex gap-3 cursor-default items-center p-4 mr-3 hover:bg-[#F6EFFF] hover:rounded-r-lg hover:border-l-4 hover:border-[#8B3DFF] transition-all'
          >
            <Image src={item.icon} className='text-[#2C3652]' />
            <h1 className='text-[#2C3652] font-poppins text-base font-normal hover:text-[#9853FF]'>{item.name}</h1>
          </div>
          ))}
        </div>
      </div>
</div>

<div className='flex justify-between mx-3 items-center mt-4'>
<div className='flex gap-2 items-center'>
<Image src={info} className='w-[32px] h-[32px]'/>
<div>
<h1 className='text-[#2C3652] font-poppins  font-normal leading-[15px]'>Webex Starship</h1>
<h1 className='text-[#3F4C5A] font-poppins text-xs font-normal '>charlie@webex.com</h1>
</div>
</div>

<div>
<Image src={vee}/>
</div>
</div>
</div>

  );
};

export default Sidebar;
