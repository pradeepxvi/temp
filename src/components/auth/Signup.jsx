import { useState } from "react";
import { Logo } from "../../";
import { Link } from "react-router-dom";
import { AlarmCheck } from "lucide-react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("admin");
  const [email, setEmail] = useState("admin1@admin.com");
  const [number, setNumber] = useState(9842640145);
  const [password, setPassword] = useState("helloworld00;;");
  const [confirm_password, setConfirm_password] = useState("helloworld00;;");

  const validateSignup = () => {
    if (!username || !email || !number || !password || !confirm_password) {
      alert("Please fill in all fields.");
      return false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }

    if (password !== confirm_password) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };

  const HandleSignup = async (event) => {
    event.preventDefault();

    if (!validateSignup) return;

    const URL = "http://127.0.0.1:8000/api/signup/";

    try {
      const response = await axios.post(URL, {
        username,
        email,
        number,
        password,
        confirm_password,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="bg-blue-900 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full mb-5">
          <Logo />
        </div>

        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={HandleSignup}
              method="POST"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="username"
                  required
                />
              </div>

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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="bg-gray-50 border border-gray-300 font-bold text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="number"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="password"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirm_password}
                  onChange={(e) => setConfirm_password(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="confirm password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link
                  to="/signin"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
