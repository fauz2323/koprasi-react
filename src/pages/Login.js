import { Link, Navigate } from "react-router-dom";
import { icon } from "../assets/images/index";
import { useEffect, useContext } from "react";
import TextInputPart from "../parts/TextInputPart";
import TextButtonPart from "../parts/TextButtonPart";
import ButtonPart from "../parts/ButtonPart";
import AuthFetch from "../helper/fetch/AuthFetch";
import ErrorComponent from "../component/ErrorComponent";
import secureLocalStorage from "react-secure-storage";
import { LoginContext } from "../helper/context/LoginContext";

export default function Login() {
  //state
  const {
    loading,
    setLoading,
    error,
    setError,
    isLogin,
    setIsLogin,
    form,
    setForm,
    halo,
  } = useContext(LoginContext);

  console.log(halo);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const data = secureLocalStorage.getItem("token");
    if (data !== null) {
      setIsLogin(true);
    }
  }, []);

  const login = async (username, password) => {
    //axios
    setLoading(true);
    AuthFetch.loginRequest({ username, password }, (data) => {
      setLoading(false);
      if (data.status === 200) {
        setIsLogin(true);
      } else {
        setError(data.message);
      }
    });
  };

  return (
    <div className="flex justify-center space-y-12">
      {isLogin && <Navigate to="/home" replace />}

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
        <h2 className="font-bold mt-4">User Login</h2>
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

        <ButtonPart
          onClick={() => login(form.username, form.password)}
          disabled={loading}
        />
        <div className="sm:col-span-4 mt-8">
          <h4 className="grid justify-items-center">
            Don't have an account ?<Link to={"/register"}> Register</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
