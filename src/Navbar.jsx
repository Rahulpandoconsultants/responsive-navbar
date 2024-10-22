import React from "react";
import { FiAlignJustify } from "react-icons/fi";
const Navbar = () => {
  const TradeMark_subMenu = [
    "Trademark Registration",
    "TradeMark Renewal",
    "USA TradeMark",
    "CopyRight Registration",
    "TradeMark Objection",
    "Patent Registration",
    "tradeMark Opposition",
    "Design Registration",
    "International TradeMark",
  ];
  return (
    <div>
      <div className="flex p-6 shadow-xl rounded-lg relative">
        <div className="ml-12 text-xl">Logo</div>
        <div className="space-x-8 text-xl text-center w-full hidden lg:block">
          {/* Main Menu Item */}
          <div className="group inline-block relative">
            <span>StartUp Registration</span>

            {/* Submenu */}
            <div
              id="submenu"
              className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white rounded-xl shadow-xl w-[20rem]"
            >
              {/* Submenu Item with Sub-submenu */}
              <div className="relative group-one p-2 hover:bg-gray-100">
                Company Registration
                {/* Sub-submenu (opens on hover over Company Registration) */}
                <div
                  id="sub-submenu"
                  className="absolute left-full top-0 hidden group-one-hover:block bg-white shadow-xl rounded-xl w-[20rem] p-4"
                >
                  <div className="p-2 hover:bg-gray-100">
                    Proprietorship Company Registration
                  </div>
                  <div className="p-2 hover:bg-gray-100">OPC Registration</div>
                  <div className="p-2 hover:bg-gray-100">
                    Private Limited Company
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    Nidhi Company Registration in India
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    UAE Company Registration Process
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    Registration PartnerShip
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    Limited Liability PartnerShip
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    Section 8 Company Registration in India
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    Indian Subsidiary Registration
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    USA Company Registration
                  </div>
                </div>
              </div>

              {/* Other Submenu Items */}
              <div className="p-2 group-one hover:bg-gray-100 cursor-pointer ">
                Certificate Registration
                <div className="absolute left-full top-0 hidden group-one-hover:block bg-white shadow-xl rounded-xl w-[20rem] p-4">
                  <div className="p-2 hover:bg-gray-100">Digital Signature</div>
                  <div className="p-2 hover:bg-gray-100">
                    Barcode Registration
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    Udyam Registration
                  </div>
                  <div className="p-2 hover:bg-gray-100">RCMC Registration</div>
                  <div className="p-2 hover:bg-gray-100">
                    StartUp India Registration
                  </div>
                  <div className="p-2 hover:bg-gray-100">Halal Certificate</div>
                  <div className="p-2 hover:bg-gray-100">
                    FSSAI Registration
                  </div>
                  <div className="p-2 hover:bg-gray-100">
                    Import Export Code
                  </div>
                  <div className="p-2 hover:bg-gray-100">Professional Tax</div>
                </div>
              </div>
              <div className="p-2 group-one hover:bg-gray-100">
                Trademark Registration
                <div
                  id="sub-submenu2"
                  className="absolute left-full top-0 hidden group-one-hover:block bg-white shadow-xl rounded-xl w-[20rem] p-4"
                >
                  {TradeMark_subMenu.map((val, idx) => {
                    return <div className="p-2 hover:bg-gray-100 cursor-pointer">{val}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Other Main Menu Items */}
          <span className="group inline-block">
            Taxation
            <div  className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white rounded-xl shadow-xl w-[20rem] p-8">
              <div className="p-4 hover:bg-gray-100 cursor-pointer">Good and Service Tax</div>
              <div className="p-4 hover:bg-gray-100 cursor-pointer">Business and Personel</div>
            </div>
          </span>
          <span className="group inline-block cursor-pointer">Health Insurance
          <div  className="absolute left-[55%] transform -translate-x-1/2 hidden group-hover:block bg-white rounded-xl shadow-xl w-[20rem] p-8">
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">ICICI Lombard</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">New India Assurance</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Tata AIG</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">HDFC ERGO</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">
              Star Health Insurance</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Aditya Birla Health Insurance</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Care Health Insurance</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Niva Bupa</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">SBI General Insurance</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">oriental insurance</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Iffco tokio</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Zuno General Insurance</div>

            </div>
          </span>
          <span className="group inline-block cursor-pointer">Compliance
          <div  className="absolute left-[65%] transform -translate-x-1/2 hidden group-hover:block bg-white rounded-xl shadow-xl w-[20rem] p-8">
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">PropritorShip</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">PartnerShip</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Payroll</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">Company</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">PF Return Filling</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">LLP Compliance</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">ESI Registration</div>
              <div className="pb-4 hover:bg-gray-100 cursor-pointer">PF Registration</div>
            </div>
          </span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">About Us</span>
        </div>
        <div className="lg:hidden ml-auto">
        <FiAlignJustify className="w-6 h-8 " />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
