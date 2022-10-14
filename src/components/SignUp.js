import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/Firebase.init";

const auth = getAuth(app);

const SignUp = () => {
  const handeSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:dark:bg-gray-900 dark:dark:text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm dark:dark:text-gray-400">
          Sign in to access your account
        </p>
      </div>
      <form
        onSubmit={handeSubmit}
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            Email address
            <input
              type="email"
              name="email"
              placeholder="your mail"
              className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">Password</div>
            <input
              type="password"
              name="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
