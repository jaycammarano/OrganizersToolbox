import { Link } from 'react-router-dom';
import { ILayout } from './interfaces';

const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100" style={{}}>
        <div
          className="flex min-h-screen bg-gray-100"
          style={{ minHeight: '640px' }}
        >
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-1 h-0 bg-white border-r border-gray-200">
              <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </div>
                <nav
                  className="flex-1 px-2 mt-5 space-y-1 bg-white"
                  aria-label="Sidebar"
                >
                  <a
                    href="/"
                    className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md hover:text-gray-900 hover:bg-gray-100 group"
                    data-todo-x-state-on="Current"
                    data-todo-x-state-off="Default"
                    data-todo-x-state-description='Current: "bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100", Default: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"'
                  >
                    <svg
                      className="w-6 h-6 mr-3 text-gray-500"
                      data-todo-x-state-on="Current"
                      data-todo-x-state-off="Default"
                      data-todo-x-state-description='Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"'
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
                    Dashboard
                  </a>
                  <Link
                    to="/user/0"
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
                    Profile
                    <Link
                      className="inline-block ml-auto text-xs font-medium bg-gray-100 rounded-full group-hover:bg-gray-200"
                      to="user/profile/edit"
                    >
                      <span
                        className="bg-gray-100 group-hover:bg-gray-200 hover:bg-gray-300 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                        data-todo-x-state-on="Current"
                        data-todo-x-state-off="Default"
                        data-todo-x-state-description='Current: "bg-white", Default: "bg-gray-100 group-hover:bg-gray-200"'
                      >
                        edit
                      </span>
                    </Link>
                  </Link>{' '}
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
                    Organizations
                    <span
                      className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                      data-todo-x-state-on="Current"
                      data-todo-x-state-off="Default"
                      data-todo-x-state-description='Current: "bg-white", Default: "bg-gray-100 group-hover:bg-gray-200"'
                    >
                      3
                    </span>
                  </a>
                  <a
                    href="/"
                    className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 group"
                    data-todo-x-state-description='undefined: "bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100", undefined: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"'
                  >
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"
                      data-todo-x-state-description='undefined: "text-gray-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                      data-todo-x-description="Heroicon name: outline/folder"
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
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    Campaigns
                    <span
                      className="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                      data-todo-x-state-description='undefined: "bg-white", undefined: "bg-gray-100 group-hover:bg-gray-200"'
                    >
                      4
                    </span>
                  </a>
                  <a
                    href="/"
                    className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 group"
                    data-todo-x-state-description='undefined: "bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100", undefined: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"'
                  >
                    <svg
                      className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500"
                      data-todo-x-state-description='undefined: "text-gray-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                      data-todo-x-description="Heroicon name: outline/calendar"
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Calendar
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
