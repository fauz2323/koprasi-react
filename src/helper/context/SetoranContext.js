import { createContext, useEffect, useState } from "react";
import { numberValidator } from "../validation/NumberValidator";
import { useNavigate, useParams } from "react-router-dom";
import TransactionFetch from "../fetch/TransactionFetch";
import secureLocalStorage from "react-secure-storage";
import AuthFetch from "../fetch/AuthFetch";

export const SetoranContext = createContext({});

export const SetoranProvider = ({ children }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({
    setoran: "",
    bank: "",
  });

  useEffect(() => {
    setType(params.type);

    if (
      params.type === "setoran" ||
      params.type === "vip" ||
      params.type === "happy"
    ) {
      async function fetchData() {
        await AuthFetch.AuthRequest((data) => {
          if (data.status === 200) {
            setData(data.data);
            setIsLoading(false);
          } else if (data.status === 401) {
            secureLocalStorage.clear();
            navigate("/login");
          } else {
            setIsLoading(false);
            setError(data.message);
          }
        });
      }

      fetchData();
    } else {
      return navigate("/not-found");
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonChange = (data) => {
    setForm({ ...form, setoran: data });
  };

  const tester = () => {
    console.log(form);
  };

  const submitHanler = () => {
    if (numberValidator(form.setoran) === false) {
      return setError("Jumlah Setoran harus berupa angka");
    }

    if (form.bank === "") {
      return setError("Pilih Bank");
    }

    if (form.setoran % 100000 !== 0) {
      return setError("Jumlah Setoran harus kelipatan 100.000");
    }

    setIsLoading(true);

    const dataBody = {
      amount: form.setoran,
      bank: form.bank,
    };

    let path = "";

    if (type === "setoran") {
      path = "transaction-request";
    } else if (type === "vip") {
      path = "tabungan-vip-request";
    } else if (type === "happy") {
      path = "tabungan-happy";
    }

    TransactionFetch.setoranTransaction(path, dataBody, (data) => {
      if (data.status === 200) {
        setIsLoading(false);
        navigate(`/transaction/va/${data.data.va.transactionid}`);
      } else if (data.status === 401) {
        setIsLoading(false);
        secureLocalStorage.clear();
        navigate("/login");
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    });
  };

  const provider = {
    form,
    handleChange,
    handleButtonChange,
    submitHanler,
    error,
    tester,
    isLoading,
    data,
    type,
  };

  return (
    <SetoranContext.Provider value={provider}>
      {children}
    </SetoranContext.Provider>
  );
};
