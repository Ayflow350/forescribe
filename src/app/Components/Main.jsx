import React from 'react'
import Image from 'next/image';
import arrow from "../assets/Icons/arrow.svg"
import vee from "../assets/Icons/vee.svg"
import Bell from "../assets/Icons/Bell.svg"
import contacts from "../assets/Icons/contacts.svg"
import image from "../assets/Icons/image.svg"
import search from "../assets/Icons/search.svg"
import question from "../assets/Icons/question.svg"
import microsoft from "../assets/Icons/microsoft.png"
import Google from "../assets/Icons/Google.png"
import Group from "../assets/Icons/Group.svg"
import slack from "../assets/Icons/slack.png"
import jira from "../assets/Icons/Jira.png"
import Quickbook from "../assets/Icons/Quickbook.png"
import xero from "../assets/Icons/xero.png"
import Zoom from "../assets/Icons/Zoom.png"
import csv from "../assets/Icons/csv.png"
import coming from "../assets/Icons/coming.png"





const Main = () => {
  return (
    <div className='w-full h-screen bg-white '>
      <div className='border-b '>
      <div className='flex h-[66px] justify-between space-x-1 mx-3 '>
        <div className='relative flex items-center gap-3'>
          <Image src={arrow} className='' />
          <div className='relative w-[400px]'>
            <input className='w-full h-[44px] border bg-[#F5F5F5] pl-10 rounded' />
            <div className='absolute left-2 top-2 flex gap-2 items-center'>
              <Image src={search} className='' />
              <h1 className='text-[#2C3652] font-poppins text-base font-normal'>Search by employee or application</h1>
            </div>
          </div>
        </div>
<div className='relative flex items-center gap-3'>
 <div className=' flex gap-2 p-2 bg-[#F6F0FF] rounded'>
  <Image src={contacts}/>
<h1 className='text-[#9F5FFF]'>Invite Members</h1>
  </div>
<Image src={Bell}/>
<Image src={image}/>
<Image src={vee}/>
</div>
</div>
</div>
{/* the last part of the project */}
<div className=' space-y-7 mx-3 mt-14'>
      <div className='space-y-3'>
        <h1 className='text-[#2C3652] font-poppins text-2xl font-semibold'>Integrations</h1>
          <h1 className='text-[#3F4C5A] font-poppins text-base font-normal'>Missing your favorite Integration? You can request one 
         <span className='text-[#8B3DFF] font-poppins text-base font-normal ml-1'>
         here.
         </span>
      </h1>
      </div>
      <div>

      </div>

      
      <div className='flex gap-2'>
      <h1 className='text-[#2C3652] font-poppins text-lg font-medium'>Identity and Single Sign On</h1>
      <Image src={question}/>

    </div>

    <div className='flex justify-between border p-5 rounded-2xl bg-[#F7F7F7]'>
      <div className='flex gap-3 '>
        <div className='border p-2 rounded-lg bg-[#ffff] '>
        <Image src={Google} className='w-[34px] h-[34px] '/> 
        </div>
        <div>
          <div className='flex gap-2'>
            <h1>Google Workspace </h1>
            <Image src={Group}/>
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Setup Google Workspace with one-click to work flawlessly with Forescribe</h1>
        </div>
      </div>
      
      <div>

      </div>
      <button className='w-[107px]
h-[40px] bg-[#8B3DFF] text-white rounded'>Connect</button>
    </div>

    <div className='flex justify-between border p-5 rounded-2xl bg-[#F7F7F7]'>
      <div className='flex gap-3'>
        <Image src={microsoft}/> 
        <div>
          <div className='flex gap-2'>
            <h1>Microsoft Workspace </h1>
            <Image src={Group}/>
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Setup Google Workspace with one-click to work flawlessly with Forescribe</h1>
        </div>
      </div>
      
      <div>

      </div>
      <button className='w-[107px]
h-[40px] bg-[#8B3DFF] text-white rounded'>Connect</button>
    </div>

    <div className='flex gap-2'>
      <h1 className='text-[#2C3652] font-poppins text-lg font-medium'>Accounting</h1>
      <Image src={question}/>

    </div>

    <div className='flex justify-between border p-5 rounded-2xl bg-[#F7F7F7]'>
      <div className='flex gap-3 items-center '>
        <div className='border p-1 py-5 rounded-lg bg-[#13B5EA]  '>
        <Image src={xero} className='w-[44px] h-[13px]  self-center'/> 
        </div>
        <div>
          <div className='flex gap-2'>
            <h1>Xero Workspace </h1>
            <Image src={Group}/>
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Gather actionable information for every known Application that persists in your books</h1>
        </div>
      </div>
      
      <div>

      </div>
      <button className='w-[107px]
h-[40px] bg-[#8B3DFF] text-white rounded'>Connect</button>
    </div>

    <div className='flex justify-between border p-5 rounded-2xl bg-[#F7F7F7]'>
      <div className='flex gap-3 '>
      <div className='border p-2 py-3 rounded-lg bg-[#24A205] '>
        <Image src={Quickbook}/> 
        </div>
        <div>
          <div className='flex gap-2'>
            <h1>Quickbook Workspace </h1>
            <Image src={Group}/>
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Organize your App spend and gather actionable insights to make informed decisions</h1>
        </div>
      </div>
      
      <div>

      </div>
      <button className='w-[107px]
h-[40px] bg-[#8B3DFF] text-white rounded'>Connect</button>
    </div>
    <div className='flex justify-between border p-5 rounded-2xl bg-[#F7F7F7]'>
      <div className='flex gap-3 '>
      <div className='border p-2 px-4 rounded-lg bg-[#E1F0F1] '>
        <Image src={csv}/> 
        </div>
        <div>
          <div className='flex gap-2'>
            <h1>CSV Workspace </h1>
            <Image src={Group}/>
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Manually upload your transaction data every month and stay aware of your App spend and usage</h1>
        </div>
      </div>
      
      <div>

      </div>
      <button className='w-[107px]
h-[40px] bg-[#8B3DFF] text-white rounded'>Upload</button>
    </div>
    {/* the second segment  */}
    <div className='flex gap-2'>
      <h1 className='text-[#2C3652] font-poppins text-lg font-medium'>Engagement</h1>
      <Image src={question}/>

    </div>

    <div className='flex justify-between border p-5 rounded-2xl bg-[#EFEFEF] relative '>
      <div className='flex gap-3 items-center '>
        <div className='border p-3 py-5 rounded-lg bg-[#518EF7]  '>
        <Image src={Zoom} className='w-[36px] h-[21px]  self-center'/> 
        </div>
        <div>
          <div className='flex gap-2'>
            <h1>Zoom Workspace </h1>
            
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Gather actionable information for every known Application that persists in your books</h1>
        </div>
      </div>
      
      <div>

      </div>
      
      <Image src={coming} className='absolute bottom-3 -right-3' />
    </div>

    <div className='flex justify-between border p-5 rounded-2xl bg-[#EFEFEF] relative mb-14'>
      <div className='flex gap-3 '>
      <div className='border p-2 rounded-lg bg-[#531754] '>
        <Image src={slack}/> 
        </div>
        <div>
          <div className='flex gap-2'>
            <h1>slack Workspace </h1>
            
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Organize your App spend and gather actionable insights to make informed decisions</h1>
        </div>
      </div>
      
      <div>

      </div>
      <Image src={coming} className='absolute bottom-3 -right-3' />
    </div>
    
    
    <div className='flex justify-between border p-5 rounded-2xl bg-[#EFEFEF] relative'>
      <div className='flex gap-3 '>
     
        <Image src={jira}/> 
      
        <div>
          <div className='flex gap-2'>
            <h1>Jira Workspace </h1>
            
            </div>
            <h1 className='text-[#6B778C] font-poppins text-base font-normal'>Manually upload your transaction data every month and stay aware of your App spend and usage</h1>
        </div>
      </div>
      
      <div>

      </div>
      <Image src={coming} className='absolute bottom-3 -right-3' />
    </div>
    
    

    
    </div>

    
   

   
    </div>



    
  )
}

export default Main







