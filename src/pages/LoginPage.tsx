
const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="/images/aeb8792475c97c888aa880ea74252c6d.png" alt="Laptop" className="w-3/4 h-auto" />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-white text-1xl font-bold mb-12">
            Welcome to the future of restaurant reporting! We're serving up a
            fresh approach to streamline your restaurant management, making data
            deliciously easy to digest.
          </h2>
          <form className="max-w-xs" noValidate>
            <input
              type="email"
              placeholder="Email"
              value={''}
              name="email"
              className={`bg-gray-800 rounded-lg py-2 px-4 mb-4 w-full text-white `}
              autoComplete="off"
              required
            />
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                value={''}
                name="password"
                className={`bg-gray-800 rounded-lg py-2 px-4 w-full text-white `}
                autoComplete="off"
                required
              />
              <i className="fas fa-eye text-gray-400 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"></i>{" "}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 mt-4">
            By continuing, you agree to (name)'s Terms of service and Privacy
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
