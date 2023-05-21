import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const { createUser, updateUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password can not be less than six character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserData(createdUser, name, photo);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#4E7D64] uppercase">
          Register
        </h1>
        <form onSubmit={handleRegister} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-[#4E7D64] focus:ring-[#4E7D64] focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
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
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
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
            <p className='text-red-500'>{error}</p>
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#4E7D64] rounded-md hover:bg-[#1e422f] focus:outline-none focus:bg-[#1e422f]">
              Register
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            G
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-[#4E7D64] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
