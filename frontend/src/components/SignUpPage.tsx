import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface formInterface {
  name: string;
  email: string;
  password: string;
  age: number;
}

export const SignUpPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<formInterface>({
    name: "",
    email: "",
    password: "",
    age: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await axios.post('/api/signup',formData);
    alert("Account created successfully!")
    navigate("/")

  }

  return (
    <div className="bg-zinc-900 w-full h-screen">
      <div>
        <h1 className="font-bold text-white text-4xl text-center pt-8">
          Create Your Account
        </h1>
      </div>
      <div className="p-4 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center items-center w-56 sm:w-96 space-y-2  "
        >
          <input
            onChange={handleChange}
            className="input-style"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            onChange={handleChange}
            className="input-style"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            onChange={handleChange}
            className="input-style"
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            onChange={handleChange}
            className="input-style"
            type="number"
            placeholder="Age"
            name="age"
          />
          <input className="input-style-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
