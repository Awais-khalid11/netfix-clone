const Login = () => {
  return (
    <div className="relative min-h-screen bg-[url('/assets/login.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="absolute top-6 left-26 z-10">
        <div className="text-red-600 text-4xl font-bold">NETFLIX</div>
        
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <form className="relative z-10 bg-black/70 p-12 rounded-lg max-w-md w-full space-y-6">
          <h2 className="text-white text-3xl font-bold mb-6">Sign In</h2>

          <input
            type="email"
            placeholder="Email or mobile number"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold text-lg"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Need help?</a>
          </div>

          <div className="text-gray-400">
            <span className="text-sm">New to Netflix? </span>
            <a href="#" className="text-white hover:underline">Sign up now.</a>
          </div>

          <div className="text-xs text-gray-400 mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;