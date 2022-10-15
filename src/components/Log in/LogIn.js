import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="flex justify-center m-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  text-gray-900 border">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-900">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-900">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            <div className="flex justify-end text-xs text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-bold  bg-violet-400">
            Sign in
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-900">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/registration"
            className="underline text-gray-900"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
