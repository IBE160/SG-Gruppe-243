import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const { login } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    await axiosClient.post("/auth/register", form);
    const { data } = await axiosClient.post("/auth/login", {
      email: form.email,
      password: form.password,
    });
    login(data.token);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Register</h1>
      <input name="name" placeholder="Name" className="input" onChange={handleChange} />
      <input name="email" placeholder="Email" className="input" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" className="input" onChange={handleChange} />
      <button onClick={submit} className="btn mt-4">Create Account</button>
    </div>
  );
}
