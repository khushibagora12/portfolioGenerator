
'use client';

import { login, handleGoogleLogin } from '../actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4"
        method="post"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Welcome Back</h2>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="p-3 border border-gray-300 rounded-lg"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="p-3 border border-gray-300 rounded-lg"
            placeholder="••••••••"
          />
        </div>

        <div className="flex flex-col space-y-3 pt-2">
          <button
            formAction={login}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Log in
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
          >
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
