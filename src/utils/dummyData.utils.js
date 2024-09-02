export const assetDetails = [
  {
    AssetID: "A12345",
    AssetName: "Laptop",
    AssetType: "Electronic",
    DatePurchased: "2023-09-22",
    Status: "InUse",
  },
  {
    AssetID: "A12346",
    AssetName: "DesktopComputer",
    AssetType: "Electronic",
    DatePurchased: "2023-09-15",
    Status: "InStock",
  },
  {
    AssetID: "A12347",
    AssetName: "Printer",
    AssetType: "Peripheral",
    DatePurchased: "2023-08-30",
    Status: "InUse",
  },
  {
    AssetID: "A12348",
    AssetName: "Projector",
    AssetType: "Electronic",
    DatePurchased: "2023-09-10",
    Status: "InStock",
  },
  {
    AssetID: "A12349",
    AssetName: "OfficeChair",
    AssetType: "Furniture",
    DatePurchased: "2023-08-25",
    Status: "InUse",
  },
  {
    AssetID: "A12350",
    AssetName: "ConferenceTable",
    AssetType: "Furniture",
    DatePurchased: "2023-09-05",
    Status: "InStock",
  },
  {
    AssetID: "A12351",
    AssetName: "Monitor",
    AssetType: "Electronic",
    DatePurchased: "2023-09-17",
    Status: "InUse",
  },
  {
    AssetID: "A12352",
    AssetName: "Whiteboard",
    AssetType: "OfficeSupplies",
    DatePurchased: "2023-08-28",
    Status: "InStock",
  },
  {
    AssetID: "A12353",
    AssetName: "Desk",
    AssetType: "Furniture",
    DatePurchased: "2023-09-03",
    Status: "InUse",
  },
  {
    AssetID: "A12354",
    AssetName: "Scanner",
    AssetType: "Peripheral",
    DatePurchased: "2023-09-20",
    Status: "InStock",
  },
];

export const vendorDetails = [
  {
    vendorname: "VendorA",
    location: "LocationA",
    personnel: "PersonA",
    phonenumber: "123-456-7890",
    address: "123MainSt,CityA",
  },
  {
    vendorname: "VendorB",
    location: "LocationB",
    personnel: "PersonB",
    phonenumber: "987-654-3210",
    address: "456ElmSt,CityB",
  },
  {
    vendorname: "VendorC",
    location: "LocationC",
    personnel: "PersonC",
    phonenumber: "555-123-4567",
    address: "789OakSt,CityC",
  },
  {
    vendorname: "VendorD",
    location: "LocationD",
    personnel: "PersonD",
    phonenumber: "111-222-3333",
    address: "321PineSt,CityD",
  },
  {
    vendorname: "VendorE",
    location: "LocationE",
    personnel: "PersonE",
    phonenumber: "999-888-7777",
    address: "555CedarSt,CityE",
  },
];

export const historyDetails = [
  {
    serial_no: "12WDDE2",
    employee_Id: "7887DDDD",
    note: "The asset was given and returned in good condition",
    is_returned: "Yes",
  },
  {
    serial_no: "12WDDE2",
    employee_Id: "7887DDDD",
    note: "The asset was given and returned in good condition",
    is_returned: "Yes",
  },
  {
    serial_no: "12WDDE2",
    employee_Id: "7887DDDD",
    note: "The asset was given and returned in good condition",
    is_returned: "No",
  },
  {
    serial_no: "12WDDE2",
    employee_Id: "7887DDDD",
    note: "The asset was given and returned in good condition",
    is_returned: "No",
  },
  {
    serial_no: "12WDDE2",
    employee_Id: "7887DDDD",
    note: "The asset was given and returned in good condition",
    is_returned: "Yes",
  },
];

export const courses = [
  {
    title: "Introduction to Cloud Computing and IaaS ",
    resource: "Alison",
    links:
      "https://alison.com/topic/learn/131257/introduction-to-cloud-computing",
  },
  {
    title: "Introduction to Cloud Computing and IaaS ",
    resource: "Alison",
    links:
      "https://alison.com/topic/learn/131257/introduction-to-cloud-computing",
  },
  {
    title: "Introduction to Cloud Computing and IaaS ",
    resource: "Alison",
    links:
      "https://alison.com/topic/learn/131257/introduction-to-cloud-computing",
  },
  {
    title: "Introduction to Cloud Computing and IaaS ",
    resource: "Alison",
    links:
      "https://alison.com/topic/learn/131257/introduction-to-cloud-computing",
  },
];

export const departmentalTargetData = [
  {
    title: "Business & Sales Department",
    subtitle: "Leads conversion to Customer ",
    manager: "Patrick Doe ",
    size: 4,
    task: {
      total: 9,
      complete: 4,
    },
    reviews: 5,
  },
  {
    title: "Cloud Team",
    subtitle: "Complete Project Raven to 90% Min",
    manager: "Devon Lee",
    size: 5,
    task: {
      total: 7,
      complete: 3,
    },
    reviews: 3,
  },
  {
    title: "Development Department",
    subtitle: "Leads conversion to Customer",
    manager: "Patrick Doe ",
    size: 8,
    task: {
      total: 21,
      complete: 10,
    },
    reviews: 2,
  },
  {
    title: "Human Resource Department",
    subtitle: "Leads conversion to Customer",
    manager: "Patrick Doe ",
    size: 8,
    task: {
      total: 21,
      complete: 10,
    },
    reviews: 5,
  },
  {
    title: "Product Department",
    subtitle: "Leads conversion to Customer",
    manager: "Patrick Doe ",
    size: 8,
    task: {
      total: 21,
      complete: 10,
    },
    reviews: 4,
  },
];

export const employeeData = [
  {
    firstName: "Fred",
    lastName: "Boakye",
    email: "alfredboak@gmail.com",
    department: "Development",
    role: "Frontend developer",
    status: "active",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "Johnboak@gmail.com",
    department: "Cloud",
    role: "Cloud developer",
    status: "pending",
  },
];

export const leave = [
  {
    leaveType: "Sick Leave",
    employee: "Daniel Jackson",
    date: "01/12/2023 - 05/12/2023 (4Days)",
    reason: "Sick",
    status: "Approved",
  },
];
const color = <div className="w-5 h-2 bg-red-400 rounded"></div>;

export const departmentData = [
  {
    departmentName: "Accouting",
    firstName: "Abolore",
    lastName: "Nofiu",
    totalEmployee: "12",
    departmentColor: [color],
  },
];
