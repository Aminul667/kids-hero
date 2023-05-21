import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle('Login')
  // collecting authentication information from auth context
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // error state
  const [error, setError] = useState("");

  // navigation for the location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#4E7D64] uppercase">
          Log In
        </h1>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#4E7D64] focus:ring-[#4E7D64] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#4E7D64] focus:ring-[#4E7D64] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {/* <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a> */}
          <div className="mt-6">
            <p className="text-red-500">{error}</p>
            <button className="w-full px-4 py-2 tracking-wide text-neutral-50 transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f]">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            G
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Do not have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-[#4E7D64] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
