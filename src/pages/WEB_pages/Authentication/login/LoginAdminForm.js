import React from "react";
import CustomInput from "../../../../components/_common/CustomInput";
import loginForm from "./";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLogin } from "../validators/login.validator";
import InputErrorMessage from "../../../../components/_common/InputErrorMessage";
import PasswordInput from "../../../../components/_common/PasswordInput";

const AdminLoginForm = ({ onSubmit, isLoading }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(adminLogin) });
  return (
    <form
      className=" max-h-[500px] mb-6 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <CustomInput
          label={"Email"}
          placeholder="example@examaple.com"
          register={register}
          name={"username"}
        />
        <InputErrorMessage message={errors.username?.message} />
      </div>
      <div className="mb-4">
        <PasswordInput name={"password"} register={register} />
        <InputErrorMessage message={errors.password?.message} />
      </div>
      <loginForm.LoginFooter isLoading={isLoading} />
    </form>
  );
};

export default AdminLoginForm;
