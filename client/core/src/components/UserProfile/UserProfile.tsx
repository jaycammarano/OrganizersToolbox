import Layout from '../Layout/Layout';

const UserProfile: React.FC = () => {
  return (
    <Layout>
      <>
        <div className="" style={{}}>
          <div className="bg-gray-100 py-8">
            <div className="max-w-xl mx-auto px-4">
              <ul className="space-y-3" data-todo-x-max="1">
                <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
                  <div className="block border-gray-300 rounded bg-white p-6 w-full text-gray-200">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div className="sm:flex sm:space-x-5">
                        <div className="flex-shrink-0">
                          <img
                            className="mx-auto h-20 w-20 rounded-full"
                            src=""
                            alt=""
                          />
                        </div>
                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                            Jay Cammarano
                          </p>
                          <p className="text-sm font-medium text-gray-600">
                            Bio Line
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
                  <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                      Bio:
                    </p>
                    <p className="text-gray-600">
                      Nam consectetur, diam vitae luctus fermentum, ante est
                      porta erat, et aliquam ex tortor non leo. Duis vel mi
                      odio. Pellentesque nec tellus in est vestibulum lobortis.
                      Etiam sollicitudin velit non condimentum posuere. Aenean
                      egestas urna nisl, quis iaculis sapien condimentum
                      maximus. Etiam eget bibendum ipsum. Nam ornare tristique
                      urna nec sollicitudin. Duis in leo aliquet, faucibus risus
                      a, interdum lacus. Nam a tortor blandit, feugiat ligula
                      at, tristique lectus. Maecenas eu lacus blandit, volutpat
                      turpis a, luctus ante. Donec sit amet venenatis nibh. Nam
                      rhoncus mauris sed lorem dignissim, a tempus justo
                      accumsan. Vestibulum ut dui elit. Sed ut pellentesque mi.
                      Proin nulla eros, viverra et tristique eu, ultrices eget
                      enim.
                    </p>
                  </div>
                </li>

                <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Organizations:
                  </p>
                  <div className="m-3 sm:flex sm:space-x-5">
                    <div className="flex-shrink-0">
                      <img
                        className="mx-auto h-20 w-20 rounded-full"
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                        MCDPC
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        Meeting drug use with compassion not fear
                      </p>
                    </div>
                  </div>
                  <div className="m-3 sm:flex sm:space-x-5">
                    <div className="flex-shrink-0">
                      <img
                        className="mx-auto h-20 w-20 rounded-full"
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                        MCDPC
                      </p>
                      <p className="text-sm font-medium text-gray-600">
                        Meeting drug use with compassion not fear
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default UserProfile;
