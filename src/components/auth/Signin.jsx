import { useEffect, useState } from "react";
import { Logo } from "../../";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("admin1@admin.com");
  const [password, setPassword] = useState("helloworld00;;");

  // simple validation
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

  // this function handle the login form
  const handleLogin = async (e) => {
    // initially prevent the default function
    e.preventDefault();

    // terminate the function if the validation is false
    if (!validateSignin(email, password)) return;

    // send email and password to backend
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      // store access and refrest token in localstorage for later requests
      if (response.ok && data.access && data.refresh) {
        // store the access and refresh token in localstorage...
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);

        alert("Login successful!");
      } else {
        alert(data.error || "Invalid credentials.");
      }
    } catch (error) {
      // handle the error
      console.error("Login error:", error);
      alert("Something went wrong. Try again.");
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
              onSubmit={handleLogin}
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
