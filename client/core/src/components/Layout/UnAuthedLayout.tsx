import { Link } from 'react-router-dom';
import { ILayout } from './interfaces';
import toolbox from '../../assets/img/toolboxlogo.png';

const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  return (
    <div className="min-h-screen bg-gray-100" style={{}}>
      <div className="flex min-h-screen bg-gray-100">
        <div className="flex flex-col w-64 m-h-screen">
          <div className="flex flex-col flex-1 h-0 bg-white border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <Link to="/">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img className="w-auto h-24" src={toolbox} alt="Workflow" />
                </div>
              </Link>
              <nav
                className="flex-1 px-2 mt-5 space-y-1 bg-white"
                aria-label="Sidebar"
              >
                <a
                  href="/"
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 mr-3 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Sign In
                </a>
                <Link
                  to="/signup"
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 group"
                >
                  <svg
                    className="w-6 h-6 mr-3 text-gray-500"
                    data-todo-x-description="Heroicon name: outline/home"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Sign Up
                </Link>
                <a
                  href="/"
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 group"
                  data-todo-x-state-description='undefined: "bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100", undefined: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"'
                >
                  <svg
                    className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"
                    data-todo-x-state-description='undefined: "text-gray-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                    data-todo-x-description="Heroicon name: outline/users"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  View Organizations
                </a>
              </nav>
            </div>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
