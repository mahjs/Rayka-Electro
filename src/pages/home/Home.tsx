import ElectroDNS from './ElectroDNS';
import FreeElectro from './FreeElectro';
import FullImage from '../../assets/images/FullPage.svg';
import Navbar from '../../components/navbar/Navbar';
import ElectroApp from './ElectroApp';
import ElectroTrains from './ElectroTrains';

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <a href="#ElectroTrains" className="fixed z-50">
        {' '}
        this is the end
      </a>
      <img src={FullImage} className="absolute w-full min-h-full -z-10" />
      <Navbar />
      <FreeElectro />
      <ElectroApp />
      <ElectroDNS />
      <ElectroTrains />
    </div>
  );
};

export default Home;
