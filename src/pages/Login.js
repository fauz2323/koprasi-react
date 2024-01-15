import { Link } from "react-router-dom";
import Logo from "../assets/images/icon.jpeg";
import { useState } from "react";
import TextInputPart from "../parts/TextInputPart";
import axios from "axios";

export default function Login() {
  //state
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginRequest = async (email, password) => {
    //axios
    setLoading(true);
    axios
      .post(
        "/user",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(function (response) {
        setLoading(false);

        console.log(response);
      })
      .catch(function (error) {
        setLoading(false);

        console.log(error);
      });
  };

  return (
    <div className="flex justify-center space-y-12">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            className="rounded-lg m-8"
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <h2 className="font-bold">User Login</h2>
        <h4 className="font-light">
          Welcome back. Enter your credentials to access your account
        </h4>

        <TextInputPart
          name={"email"}
          type={"email"}
          autoComplete={"email"}
          value={form.email}
          onChange={handleChange}
          id={"email"}
        />

        <TextInputPart
          name={"password"}
          type={"password"}
          value={form.password}
          autoComplete={"password"}
          onChange={handleChange}
          id={"password"}
        />

        <div className="sm:col-span-4 mt-8">
          <Link to="/forgot" className="grid justify-items-end text-sky-600">
            Forgot Password ?
          </Link>
        </div>
        <div className="sm:col-span-4 mt-8">
          <button
            className="bg-sky-600 text-white py-2 px-4 block w-full rounded-xl text-center hover:bg-sky-700"
            onClick={loginRequest}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
        <div className="sm:col-span-4 mt-8">
          <h4 className="grid justify-items-center">
            Don't have an account ?<Link to={"/register"}> Register</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
