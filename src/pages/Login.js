import { Link } from "react-router-dom";
import Logo from "../assets/images/icon.jpeg";
import { useState } from "react";
import TextInputPart from "../parts/TextInputPart";
import axios from "axios";
import TextButtonPart from "../parts/TextButtonPart";
import ButtonPart from "../parts/ButtonPart";

export default function Login() {
  //state
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginRequest = async (username, password) => {
    //axios
    setLoading(true);
    axios
      .post(
        "https://indomuliasejahtera.com/api/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {},
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
          name={"username"}
          type={"username"}
          autoComplete={"username"}
          value={form.username}
          onChange={handleChange}
          id={"username"}
        />

        <TextInputPart
          name={"password"}
          type={"password"}
          value={form.password}
          autoComplete={"password"}
          onChange={handleChange}
          id={"password"}
        />

        <TextButtonPart
          toLink={"/forgot"}
          title={"Forgot Password ?"}
          className={"grid justify-items-end text-sky-600"}
        />

        <ButtonPart onClick={loginRequest} disabled={loading} />
        <div className="sm:col-span-4 mt-8">
          <h4 className="grid justify-items-center">
            Don't have an account ?<Link to={"/register"}> Register</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
