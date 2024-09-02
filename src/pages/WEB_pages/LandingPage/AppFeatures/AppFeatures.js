import React, {useState} from 'react'
import TabsAppFeatures from '../../../../components/WEB_components/TabsAppFeatures';
import org from "../../../../assets/landingPage/org.png";
import emp from "../../../../assets/landingPage/emp.png";
import search from "../../../../assets/landingPage/Search.png";
import target from "../../../../assets/landingPage/target.png";
import search2  from "../../../../assets/landingPage/search2.png";
import { MdManageAccounts } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";



const AppFeatures = () => {

  const Features = ({text}) => {
    return (
      <div className='flex items-center gap-4 w-fit px-3 py-2 shadow-xl '>
        <GiCheckMark className='text-gurugeeks-orange-700'/> 
        <h1 className='font-light'> {text}</h1>   
      </div>
    )
    }

    const Modules = ({moduleText,icon,color,service}) => {
      const colors = {
        HRM: "bg-red-100 text-gurugeeks-orange-700",
        CRM: "bg-green-100 text-green-600"
      };

      const colorClass = colors[service] || colors.HRM

      return (
        <div className='flex gap-3 items-center w-fit '>
            <div className='flex items-center justify-center bg-white shadow-lg text-center' 
            >
            <img 
              src = {icon}
              alt="i"
              className="w-fit" />
            </div>
              <div>
                <h1 className=' text-2xl font-medium'>{moduleText}</h1> 
              </div>
              <div>
                <h1 className={`${colorClass} px-6 py-1 rounded-3xl text-sm`} >{service}</h1>
              </div>
           </div>
      )
    }


  const [tabIndex, setTabIndex] = useState(0);
  const tabsHeader = [
    "Starter", 
    "Gold",
    "Enterprise"
  ];

  const changeTab = (index) => {
    setTabIndex(index);
  };

  const pagesOutput = () => {
    if (tabIndex === 0) {
      return (
        <div className='mx-20 mt-10'>
          <div className=' flex gap-16 flex-col'>
            <div>

              < Modules 
                moduleText="Recuitment Module"
                service="HRM"
                icon={search}
               />

              <div className='flex items-center gap-3'> 
                  <Features text="Smart Recruiment Hub" />
                  <Features text="Talent Pooling"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Organization Management"
                service="HRM"
                icon={ org}
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Policy and Document Oasis" />
                  <Features text="Organisation Blueprint"/>
                  <Features text="Organisation chart"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Performance Management"
                service="HRM"
                icon={target}
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Performance Monitoring" />
                  <Features text="Internal Communication"/>
                  <Features text="Learing and Development"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Employee Module"
                service="HRM"
                icon={ emp }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Enhanced Employee Profile" />
                  <Features text="Employee Self-Service"/>
                  <Features text="Payroll Management"/>
                  <Features text="Task Automation"/>
                  
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Leave Management Module"
                service="HRM"
                icon={ search2 }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Leave Application Management" /> 
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Sales Management"
                service="CRM"
                icon={ search}
              />
              <div className='flex items-center gap-3'> 
                  <Features text=" Sales and Invoicing Management" /> 
              </div>

            </div>

          </div>
        </div>
  
       )

    }

    else if (tabIndex === 1) {
      return (
        <div className='mx-20 mt-10'>
          <div className=' flex gap-16 flex-col flex-auto'>

            <div>
              <Modules 
                moduleText="Lead Management Module"
                service="CRM"
                icon={ search }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Lead Nurturing and Distribution Module" />
                  <Features text="Conversion Success"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Organization Management"
                service="HRM"
                icon={ org }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Policy and Document Oasis" />
                  <Features text="Organisation Blueprint"/>
                  <Features text="Organisation chart"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Employee Module"
                service="HRM"
                icon={ emp }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Enhanced Employee Profile" />
                  <Features text="Employee Self-Service"/>
                  <Features text="Payroll Management"/>
                  <Features text="Task Automation"/>
                  
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Helpdesk  "
                service="HRM"
                icon={ search2 }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Helpdesk Ticketing" />
                  <Features text="Internal Communication"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Customer Service "
                service="CRM"
                icon={ search2 }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Helpdesk Ticketing" />
                  <Features text="Internal Communication"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Leave Management Module"
                service="HRM"
                icon={ search2  }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Leave Application Management" /> 
              </div>

            </div>

            <div>
                <Modules 
                  moduleText="Recuitment Module"
                  service="HRM"
                  icon={ search}
                />
                <div className='flex items-center gap-3'> 
                    <Features text="Smart Recruiment Hub" />
                    <Features text="Talent Pooling"/>
                </div>

            </div>

            <div>
              <Modules 
                moduleText="Sales Management"
                service="CRM"
                color="CRM"
                icon={ search }
              />
              <div className='flex items-center gap-3'> 
                  <Features text=" Sales and Invoicing Management" /> 
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Performance Management"
                service="CRM"
                icon={ target }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Customer Helpdesk" />
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Asset/Inventory"
                service="CRM"
                icon={ search2  }
              />
              <div className='flex items-center gap-3'> 
                  <Features text=" Sales and Invoicing Management" /> 
              </div>

            </div>

          </div>
        </div>
      )
    }

    else if (tabIndex === 2){
      return (
        <div className='mx-20 mt-10'> 
          <div className=' flex gap-16 flex-col flex-auto'>

            <div>
              <Modules 
                moduleText="Subcription & Billing "
                service="CRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Client Subcriptions Management" />
                  
            </div>

            </div>

            <div>
              <Modules 
                moduleText="Lead Management Module"
                service="CRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Lead Nurturing and Distribution Module" />
                  <Features text="Conversion Success"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Organization Management"
                service="HRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Policy and Document Oasis" />
                  <Features text="Organisation Blueprint"/>
                  <Features text="Organisation chart"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Employee Module"
                service="HRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Enhanced Employee Profile" />
                  <Features text="Employee Self-Service"/>
                  <Features text="Payroll Management"/>
                  <Features text="Task Automation"/>
                  
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Timesheet Management"
                service="HRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Timesheet management" /> 
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Helpdesk  "
                service="HRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Helpdesk Ticketing" />
                  <Features text="Internal Communication"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Customer Service "
                service="CRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Helpdesk Ticketing" />
                  <Features text="Internal Communication"/>
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Leave Management Module"
                service="HRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Leave Application Management" /> 
              </div>

            </div>

            <div>
                <Modules 
                  moduleText="Recuitment Module"
                  service="HRM"
                  icon={ <MdManageAccounts /> }
                />
                <div className='flex items-center gap-3'> 
                    <Features text="Smart Recruiment Hub" />
                    <Features text="Talent Pooling"/>
                </div>

            </div>

            <div>
              <Modules 
                moduleText="Inventory"
                service="CRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features
                   text="Inventory Control"
                  />
              </div>

            </div>
            <div>
              <Modules 
                moduleText="Sales Management"
                service="CRM"
                color="CRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text=" Sales and Invoicing Management" /> 
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Performance Management"
                service="CRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text="Customer Helpdesk" />
              </div>

            </div>

            <div>
              <Modules 
                moduleText="Asset/Inventory"
                service="HRM"
                icon={ <MdManageAccounts /> }
              />
              <div className='flex items-center gap-3'> 
                  <Features text=" Sales and Invoicing Management" /> 
              </div>

            </div>

          </div>
        </div>
      )
    };

  }

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold mb-7 text-center">
                App features with corresponding modules
        </h1>
      </div>

      <div>
       <TabsAppFeatures
          tabIndex={tabIndex}
          setTabIndex={changeTab}
          tabsHeader={tabsHeader}>
          {pagesOutput()}
        </TabsAppFeatures>
      </div>

    </div>
  )
}

export default AppFeatures