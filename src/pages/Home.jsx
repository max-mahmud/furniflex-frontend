import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { handleLogout, isAuthenticated } = useAuth();

  return (
    <>
      <Header />
      <div className="flex flex-col items-center mb-10 px-4 w-[1440px]">
        <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">Page List</h1>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left text-gray-700 border-b border-gray-300">
                  URL
                </th>
                <th className="py-2 px-4 text-left text-gray-700 border-b border-gray-300">
                  Page
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/login" className="hover:underline">
                    /LogIn
                  </Link>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/login" className="hover:underline">
                    Log in
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/signup" className="hover:underline">
                    /SignUp
                  </Link>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/signup" className="hover:underline">
                    Sign up
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/store" className="hover:underline">
                    /Store
                  </Link>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/store" className="hover:underline">
                    Store
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/orderdetails" className="hover:underline">
                    /OrderDetails
                  </Link>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-blue-600">
                  <Link to="/orderdetails" className="hover:underline">
                    Order Details
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isAuthenticated && (
        <footer className="bg-gray-200 py-4 mt-8 w-[1440px]">
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </footer>
      )}

      <Footer />
    </>
  );
}
