import React from "react";
import { BreadCrumbs } from "../../../../components/CRM_components";
import exceedLogo from "../../../../assets/exceedLogo.png";

const PreviewInvoice = () => {
  const breadcrumbItems = ["Sales Invoices", "Preview Invoice", ""];

  return (
    <div>
      <BreadCrumbs breadcrumbItems={breadcrumbItems} />
      <div className="p-6 mb-16">
        <div className="py-12 px-12 rounded-md my-4 shadow-md bg-white">
          {/* header */}
          <header className="flex justify-between items-start">
            <div className="flex flex-col gap-8 justify-between items-start">
              <img src={exceedLogo} alt="Exceed Logo" />
              <p className="text-gray-400 w-[150px]">
                22 Unity Road, Ikeja, Lagos State, Nigeria.
              </p>
            </div>
            <div className="flex flex-col justify-between items-end gap-6">
              <p className="font-bold text-2xl text-gray-400">INVOICE</p>
              <p className="text-gray-400">
                Invoice No: <span className="font-bold text-black">#12345</span>
              </p>
              <p className="text-gray-400">
                {" "}
                Created Date:{" "}
                <span className="font-bold text-black">12-10-23</span>
              </p>
              <p className="text-gray-400">
                {" "}
                Due Date: <span className="font-bold text-black">24-06-24</span>
              </p>
            </div>
          </header>

          {/* address */}
          <div className="flex flex-col justify-start items-start w-[200px] mt-20">
            <p className="text-gray-400 mb-5">INVOICE TO: </p>
            <p className="mb-2">John Doe Johndoe@gmail.com 08012345678</p>
            <p className="text-gray-400">
              22 Michael Essien street, Ojodu Berger, Lagos, Nigeria.
            </p>
          </div>

          {/* item description */}
          <div>
            <div className="mt-32">
              <table class="w-full border-collapse">
                <thead>
                  <tr className="bg-green-600 text-gray-100 font-normal ">
                    <th class="border border-gray-300 px-4 py-2">Item</th>
                    <th class="border border-gray-300 px-4 py-2">Quantity</th>
                    <th class="border border-gray-300 px-4 py-2">
                      Price per Unit
                    </th>
                    <th class="border border-gray-300 px-4 py-2">Tax</th>
                    <th class="border border-gray-300 px-4 py-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500 text-sm">
                  {/* dynamic */}
                  <tr>
                    <td class="border border-gray-300 px-4 py-2">
                      Product Name
                      <p>description</p>
                    </td>
                    <td class="border border-gray-300 px-4 py-2">2</td>
                    <td class="border border-gray-300 px-4 py-2">20,000</td>
                    <td class="border border-gray-300 px-4 py-2">0%</td>
                    <td class="border border-gray-300 px-4 py-2">N40,000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="border border-gray-300 px-4 py-6 font-bold ">
                      Subtotal
                    </td>
                    <td class="border border-gray-300 px-4 py-6 text-right">
                      40,000
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="border border-gray-300 px-4 py-6 font-bold">
                      VAT
                    </td>
                    <td class="border border-gray-300 px-4 py-6 text-right">
                      N0
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="border border-gray-300 px-4 py-6 font-bold">
                      Total Amount:
                    </td>
                    <td class="border border-gray-300 px-4 py-6 text-right text-black text-2xl font-bold">
                      N40,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* others */}
          <div className="flex flex-col gap-y-8 w-full text-gray-500">
            <div>
              <p className="text-black font-bold">Payment Details</p>
              <p>Gurugeeks Exceed ERP</p>
              <p>Guaranty Trust Bank</p>
              <p>1234567890</p>
            </div>
            <div>
              <p className="text-black font-bold">Note</p>
              <span>Thank you for choosing Hencework for design services.</span>
            </div>
            <div>
              <p className="text-black font-bold">Terms & Conditions</p>
              <span>
                Please pay within 15 days from the date of invoice, overdue
                interest at 14% will be charged on delayed payments.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewInvoice;
