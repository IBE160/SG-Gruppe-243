import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    const { data } = await axiosClient.post("/auth/login", form);
    login(data.token);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Login</h1>
      <input name="email" placeholder="Email" className="input" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} />
      <button onClick={submit} className="btn mt-4">Login</button>
    </div>
  );
}
