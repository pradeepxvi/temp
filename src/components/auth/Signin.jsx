import { useEffect, useState } from "react";
import { Logo } from "../../";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserRoundCheck } from "lucide-react";

const Signin = () => {
  const [email, setEmail] = useState("admin1@admin.com");
  const [password, setPassword] = useState("helloworld00;;");

  const validateSignin = (email, password) => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return false;
    }

    return true;
  };

  const HandleLogin = async (event) => {
    event.preventDefault();
    if (!validateSignin) return;

    const URL = "http://127.0.0.1:8000/api/login/";

    try {
      const response = await axios.post(URL, { email, password });

      if (response.access && response.refresh) {
        localStorage.setItem("access_token", response.access);
        localStorage.setItem("refresh_token", response.refresh);
      }

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // form.......................

  return (
    <section className="bg-blue-900 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full mb-5">
          <Logo />
        </div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Sign in to your account
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={HandleLogin}
              method="POST"
            >
              <div>
                <label className="block mb-2  font-bold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2  font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-300 hover:text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer "
              >
                Log In
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don't have an account?
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
