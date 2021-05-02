import Layout from './Layout';

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className="" style={{}}>
        <div className="min-h-screen py-8 bg-gray-100">
          <div className="max-w-xl px-4 mx-auto">
            <ul className="space-y-3" data-todo-x-max="1">
              <li className="px-6 py-4 overflow-hidden bg-white rounded-md shadow">
                <div className="block w-full p-6 text-gray-200 bg-white border-gray-300 rounded">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:flex sm:space-x-5">
                      <div className="flex-shrink-0">
                        <img
                          className="w-20 h-20 mx-auto rounded-full"
                          src=""
                          alt=""
                        />
                      </div>
                      <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                          tool.box
                        </p>
                        <p className="text-sm font-medium text-gray-600">
                          A open source platform for political and social
                          organizers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-6 py-4 overflow-hidden bg-white rounded-md shadow">
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Vision:
                  </p>
                  <p className="text-gray-600">
                    Pellentesque nec tellus in est vestibulum lobortis. Etiam
                    sollicitudin velit non condimentum posuere. Aenean egestas
                    urna nisl, quis iaculis sapien condimentum maximus. Etiam
                    eget bibendum ipsum. Nam ornare tristique urna nec
                    sollicitudin.Nam consectetur, diam vitae luctus fermentum,
                    ante est porta erat, et aliquam ex tortor non leo. Duis vel
                    mi odio.
                  </p>
                </div>
              </li>
              <li className="px-6 py-4 overflow-hidden bg-white rounded-md shadow">
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Created By:
                </p>
                <div className="m-3 sm:flex sm:space-x-5">
                  <div className="flex-shrink-0">
                    <img
                      className="w-20 h-20 mx-auto rounded-full"
                      src=""
                      alt=""
                    />
                  </div>
                  <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Jay Cammarano
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      Director
                    </p>
                    <p className="text-sm text-gray-500">
                      A short bio about who I am. Etiam eget bibendum ipsum. Nam
                      ornare tristique urna nec sollicitudin.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
