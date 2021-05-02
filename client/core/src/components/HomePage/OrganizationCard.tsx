import { ICard } from './interfaces';

const OrganizationCard: React.FC<ICard> = ({ name, icon, tagLine }: ICard) => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img
                    className="mx-auto h-20 w-20 rounded-full"
                    // eslint-disable-next-line global-require
                    src={require('../../assets/img/logo.png')}
                    alt={icon}
                  />
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {name}
                  </p>
                  <p className="text-sm font-medium text-gray-600">{tagLine}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            <div className="px-6 py-5 text-sm font-medium text-center">
              <span className="text-gray-600"> View Profile</span>
            </div>

            <div className="px-6 py-5 text-sm font-medium text-center">
              <span className="text-gray-600">View Campaigns</span>
            </div>
            <div className="px-6 py-5 text-sm font-medium text-center">
              <span className="text-gray-600">View Members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;
