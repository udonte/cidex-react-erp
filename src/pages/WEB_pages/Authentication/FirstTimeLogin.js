import newLogo from "../../../assets/newGurugeeksLogo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { firstTimeLogin } from "../../../features/auth/auth.slice";
import {
  selectUserInfo,
  selectUserSlice,
} from "../../../features/auth/auth.selector";
import Spinner from "../../../components/common/Spinner";
import Welcome from "../../../assets/images/Layer 8.png";

const initialState = {
  email: "",
  password: "",
  newPassword: "",
};

function FirstTimeLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState(initialState);
  const user = useSelector(selectUserInfo);
  const { loading } = useSelector(selectUserSlice);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signUpData.email || !signUpData.password || !signUpData.newPassword) {
      return toast.error("Please fill all fields");
    } else {
      dispatch(
        firstTimeLogin({
          email: signUpData.email,
          password: signUpData.password,
          newPassword: signUpData.newPassword,
        })
      )
        .unwrap()
        .then((result) => {
        });
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    //clean function
    // return () => clearTimeout(clearSetTimeout);
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="grid grid-cols-2">
      <div className=" col-span-1 bg-[#EBEBEB] text-center">
        <div className="text-[#101828c0] p-[30px]">
          <p className="text-[36px] font-bold mb-2">
            Reset Your Password
          </p>
          <p className="text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <img src={Welcome} alt="wlecome" />
        </div>
      </div>
      <div className=" col-span-1 w-full h-screen flex justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="my-6">
            <img className="mt-3" src={newLogo} alt="companySvgLogo" />
          </div>
          <div class="w-[500px]">
            <form class="bg-white" onSubmit={handleSubmit}>
              <div class="mb-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="companyName"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="companyName"
                  type="text"
                  placeholder="Input company email"
                  name="email"
                  value={signUpData.email}
                  onChange={handleChange}
                />
                {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Old Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="password"
                  placeholder="Input password Sent"
                  name="password"
                  value={signUpData.password}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  New Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Input new password"
                  name="newPassword"
                  value={signUpData.newPassword}
                  onChange={handleChange}
                />
                {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>

              <button
                class="w-full bg-gurugeeks-orangeLight hover:bg-gurugeeks-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {loading ? <Spinner /> : "Log in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstTimeLogin;
