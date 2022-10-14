import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-semibold">Sign in to your account</h1>
        <a className="text-sm dark:text-gray-400" href="/">
          Or start your free trial
        </a>
        <form
          novalidate=""
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="flex flex-col">
            <label for="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="rounded-t-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
            />
            <label for="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="text"
              placeholder="Password"
              className="-mt-1 rounded-b-md dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                aria-label="Remember me"
                className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400"
              />
              <label for="remember" className="text-sm dark:text-gray-400">
                Remember me
              </label>
            </div>
            <a className="text-sm dark:text-gray-400" href="/">
              Forgot your password?
            </a>
          </div>
          <button
            type="button"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
