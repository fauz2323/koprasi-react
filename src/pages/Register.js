import React, { useContext } from "react";
import { RegisterContext } from "../helper/context/RegisterContext";
import { icon } from "../assets/images";
import ErrorComponent from "../component/ErrorComponent";
import TextInputPart from "../parts/TextInputPart";
import ButtonPart from "../parts/ButtonPart";

export default function Register() {
  const { form, handleChange, isLoading, error, submitHandler } =
    useContext(RegisterContext);

  return (
    <div className="flex justify-center space-y-12">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            className="rounded-lg m-8"
            src={icon}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        {error && <ErrorComponent errorMessage={error} />}
        <h2 className="font-bold mt-4">User Register</h2>
        <h4 className="font-light">
          fill the form to register and get access to your account
        </h4>
        <TextInputPart
          name={"username"}
          type={"text"}
          autoComplete={"username"}
          value={form.username}
          onChange={handleChange}
          id={"username"}
        />
        <TextInputPart
          name={"name"}
          type={"text"}
          autoComplete={"name"}
          value={form.name}
          onChange={handleChange}
          id={"name"}
        />
        <TextInputPart
          name={"email"}
          type={"email"}
          autoComplete={"email"}
          value={form.email}
          onChange={handleChange}
          id={"email"}
        />
        <TextInputPart
          name={"phone"}
          type={"text"}
          autoComplete={"phone"}
          value={form.phone}
          onChange={handleChange}
          id={"phone"}
        />
        <TextInputPart
          name={"address"}
          type={"text"}
          autoComplete={"address"}
          value={form.address}
          onChange={handleChange}
          id={"address"}
        />
        <TextInputPart
          name={"ktp"}
          type={"text"}
          autoComplete={"ktp"}
          value={form.ktp}
          onChange={handleChange}
          id={"ktp"}
        />

        <TextInputPart
          name={"password"}
          type={"password"}
          value={form.password}
          autoComplete={"password"}
          onChange={handleChange}
          id={"password"}
        />

        <TextInputPart
          name={"reff"}
          type={"text"}
          value={form.reff}
          autoComplete={"reff"}
          onChange={handleChange}
          id={"reff"}
        />

        <ButtonPart
          text={"Register"}
          disabled={isLoading}
          onClick={() => {
            submitHandler();
          }}
        />
      </div>
    </div>
  );
}
