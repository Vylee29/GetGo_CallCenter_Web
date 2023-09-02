import Banner from "../../components/CallCenter/Banner";
import IntroduceParttern from "../../components/CallCenter/IntroduceParttern";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  return (
    <div>
      <ToastContainer /> {/* Đặt ToastContainer ở đây */}
      <Banner />
      <IntroduceParttern />
    </div>
  );
};
export default Home;
