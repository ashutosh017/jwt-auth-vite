import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post("/api/login", { email, password })
      .then(function (response) {
        console.log(response);
        if(response.data==='you can login'){
          navigate("/")
        }
        else{
          alert(response.data)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-zinc-900 w-full h-screen">
      <div>
        <h1 className="font-bold text-white text-4xl text-center pt-8">
          Login into your account
        </h1>
      </div>
      <div className="p-4 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center items-center w-56 sm:w-96 space-y-2  "
        >
          {/* <input className="input-style" type="text" placeholder="Name" name="name"/> */}
          <input
            className="input-style"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleSetEmail}
            value={email}
          />
          <input
            className="input-style"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleSetPassword}
            value={password}
            required
          />
          {/* <input className="input-style" type="number" placeholder="Age" name="age"/> */}
          <input className="input-style-button" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
