import { Button } from "../../../../../components/HRM_components";

export const SavedFormDetails = ({ asset, setEditable }) => {
  return (
    <div className="px-4 py-6 flex items-start gap-10 w-full bg-white">
      {/* left saved form */}
      <div className="flex flex-col justify-start gap-4 w-1/2">
        {/* image */}
        <div className="flex items-center justify-center w-full min-h-[280px] bg-gray-300 rounded flex-1">
          {/* <img src={""} alt="upload" /> */}
          {!asset?.image ? (
            <Button onClick={() => setEditable(true)}>upload image</Button>
          ) : (
            <img src={asset?.data?.image} alt="asset" />
          )}
        </div>
        {/* form inputs */}
        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Asset ID</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.serial_no}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Asset Name</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.name}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Date of Purchase</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.date_purchased}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Status</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.status}
          </p>
        </div>
      </div>

      {/* right editable form */}
      <div className="flex flex-col justify-start gap-6 w-1/2">
        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Vendor</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.vendor?.name}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Location</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.vendor?.location}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Warranty</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.warranty}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="cost">Cost</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.cost}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Maintenance</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.maintenance}
          </p>
        </div>

        <div className="w-full flex-col ">
          <label htmlFor="asset_id">Description</label>
          <p className="border rounded bg-gray-300 text-gray-500 px-4 h-[45px] border-b-2  py-2 cursor-pointer">
            {asset?.data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavedFormDetails;
