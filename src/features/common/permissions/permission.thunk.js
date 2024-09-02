import axiosInstance from "../../../utils/helperFunctions/axios.utils";

export const fetchPermissionThunk = async () => {
  try {
    const res = await axiosInstance.get("permissions/?load_related=true");
    return res.data;
  } catch (error) {
    return error;
  }
};

export const fetchPermissionByDesignationThunk = async (designation) => {
  try {
    const res = await axiosInstance.get(
      `permissions/?load_related=true&designation_id=065de0ae9ca572128000ac2160a44d08`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const savePermissionThunk = async (permissionData) => {
  try {
    const res = await axiosInstance.patch("permissions/", permissionData);
    return res.data;
  } catch (error) {
    return error;
  }
};
