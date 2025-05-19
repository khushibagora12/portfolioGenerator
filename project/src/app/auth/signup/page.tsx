// /signup/page.tsx
import { signup } from '@/app/auth/actions';

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="mb-4 text-2xl font-semibold">Build Your Professional Presence</h1>
      <p className="mb-4">Generate stunning resumes & portfolios in minutes.</p>
      <form className="flex flex-col items-center max-w-md w-full p-6 border border-gray-300 bg-gray-900 rounded-lg shadow-md">
        <label htmlFor="email" className="mb-2">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none w-fill"
        />
        <button
          formAction={signup}
          className="mb-2 w-full p-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Signup
        </button>
        <p className="mt-4">Already have an account? <a href="/signin" className="text-blue-400">Sign In</a></p>
      </form>
    </div>
  );
}