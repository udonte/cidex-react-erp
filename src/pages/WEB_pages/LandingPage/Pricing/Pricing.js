import React, { useState } from 'react'
import Button from "../../../../components/WEB_components/Button";
import { GiCheckMark } from "react-icons/gi";
import TabsPricing from "../../../../components/WEB_components/TabsPricing";
import { Link } from "react-router-dom";


const Pricing = () => {

  const [tabIndex, setTabIndex] = useState(0);
  const tabsHeader = [
    "Monthly", 
    "Anually"
  ];
  const changeTab = (index) => {
    setTabIndex(index);
  };
  const SubcriptionPlan = ({Plan,PrevPlan,UsersNum,Purpose,PlanDescription,Price,List }) => {

   return ( 
   
      <div className='border flex flex-col gap-8 w-[400px] px-8 py-6 shadow-lg rounded-[5%]'>
      <div className='flex flex-col gap-3'>
        {/* Plans */}
        <div className="flex items-center gap-3 ">
          <h1 className='text-gurugeeks-orange-700 font-semibold text-xl'>{Plan}</h1>
          <p className='text-[12px] font-light text-gray-400'>{Purpose}</p>
        </div>
  
        {/* Currency Button change */}
        <div className='flex items-center gap-3'>
          <button className='border rounded p-1  text-xs font-semibold'>NGN</button>
          <button className='border border-gurugeeks-orange-700 rounded p-1  text-xs font-semibold'>USD</button>
        </div> 
  
        {/* Actual Price */}
        <h2 className='text-4xl font-semibold '> ${Price}<span className='text-sm font-light'>/Year</span></h2>
  
        {/* Plan Description */}
        <p className='text-[16px] font-light text-gray-400'>{PlanDescription}</p>
        {/* User Range Number */}
        <p className="text-gurugeeks-orange-600">({UsersNum} Users)</p>
      </div>
  
        {/* Button section */}   
      <div className="flex items-center justify-center gap-5 mb-5">
        <Button color="secondary" size="lg">
          Start Free Trial
        </Button>

        <Link to="/web/home/subscribe"><Button size="lg">Subscribe Now</Button></Link>
        
       </div>
      
    {/* Features List */}
      <div>
        <p className='text-lg font-medium text-gurugeeks-green-600 mb-5'> {PrevPlan}</p>
          { List.map((list) => {  
          return (
            <div className='flex items-center gap-3 mb-3 '>
              <GiCheckMark className='text-gurugeeks-orange-700'/> 
              <p className='text-[16px] font-normal'>{list}</p> 
              </div> 
            )             
          })}
      </div>
    </div>    
  )
  }
  


  const pagesOutput = () => {
    if (tabIndex === 0) {
      return (
        <div className='flex flex-wrap justify-center gap-5 my-20 mx-15' >
          <SubcriptionPlan 
            Plan="Starter"
            Purpose="For Startups / Small Scale businesses"
            PlanDescription="Manage Your team and capture sales"
            UsersNum="1-10"
            Price="5.99"
            List={Starter}
          />
    
          <SubcriptionPlan 
            Plan="Gold"
            Purpose="For Medium Scale Businesses"
            PlanDescription="The future of business CRM"
            UsersNum="11-100"
            Price="11.99"
            List={Gold}
            PrevPlan="All Starter Features Plus"
          />  
    
          <SubcriptionPlan 
            Plan="Enterprise"
            Purpose="For Large Scale Businesses"
            PlanDescription="The ultimate enterprise management suite"
            UsersNum="101-500"
            Price="16.99"
            List={Enterprise}
            PrevPlan="All Gold Features Plus "
          />  
          </div>
        );
      } else if (tabIndex === 1) {
        return (
          <div className='flex flex-wrap justify-center gap-5 my-20 mx-15' >
            <SubcriptionPlan 
              Plan="Starter"
              Purpose="For Startups / Small Scale businesses"
              PlanDescription="Manage Your team and capture sales"
              UsersNum="1-10"
              Price="68.84"
              List={Starter}
            />
      
            <SubcriptionPlan 
              Plan="Gold"
              Purpose="For Medium Scale Businesses"
              PlanDescription="The future of business CRM"
              UsersNum="11-100"
              Price="119.42"
              PrevPlan="All Starter Features Plus"
              List={Gold}
            />  
      
            <SubcriptionPlan 
              Plan="Enterprise"
              Purpose="For Large Scale Businesses"
              PlanDescription="The ultimate enterprise management suite"
              UsersNum="101-500"
              Price="169.22"
              PrevPlan="All Gold Features Plus "
              List={Enterprise}
            />  
          </div>
        );
      } 
  };

  // List of all Plans
const Starter= [
"Smart Recuitment Hub", "Talent Pooling","Collaborative Hiring", "Enhanced Employee Profiles","Leave Application Management","Employee Self-Service","Policy and Document Oasis","Sales and Invoicing Management"
];
const Gold= [
  "Organizational Blueprint","Payroll Management", "Lead Nurturing and Distribution","Unified Customer Database", "Customer Helpdesk", "Performance Monitoring", "Internal Communication", "Learning and Development", "Inventory Control"
  ];
  const Enterprise= [
    "Client Subscription Management", "Asset Intelligence", "Conversion Success", "Depreciation Tracking", "Task Automation", "Timesheet Management","Helpdesk Ticketing","Expense Claim",
  ];

  return (
    <div>
       <div className='text-center mb-8'>
            <h1 className="text-4xl font-bold mb-5">
              Pricing
            </h1>
  
            <p className="text-xl font-light ">
                Simple and transparent pricing that grows with you
              </p>
        </div>

        <TabsPricing
          tabIndex={tabIndex}
          setTabIndex={changeTab}
          tabsHeader={tabsHeader}>
          {pagesOutput()}
        </TabsPricing>

    </div>
  )
}

export default Pricing