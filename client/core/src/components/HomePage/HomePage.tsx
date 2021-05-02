import Layout from '../Layout/Layout';
import UserCard from './UserCard';
import OrganizationCard from './OrganizationCard';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <UserCard
        name="Jay Cammarano"
        icon="https://avatars.githubusercontent.com/u/67079013?v=4"
        tagLine="Production Manager"
      />
      <div className="px-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Organizations:
        </h2>
      </div>
      <OrganizationCard
        name="MCDPC"
        tagLine="Meeting drug use with compassion not fear."
        icon="https://avatars.githubusercontent.com/u/67079013?v=4"
      />
    </Layout>
  );
};

export default HomePage;
