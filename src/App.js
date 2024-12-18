import './App.css';
import Home from './Pages/Home';
import { Route,Routes, BrowserRouter,useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Sign from './Pages/Sign';
import OtpVerification from './Pages/OtpVerification';
import ForgotPassword from './Pages/ForgotPassword';
import AccountCreated from './Pages/AccountCreated';
import { useEffect } from 'react';
import Assesment from './Pages/Assesment';
import TailoredJobs from './Pages/TailoredJobs';
import LimitedUser from './Pages/LimitedUser';
import ResumeFeedback from './Pages/ResumeFeedback';
import PaymentSucess from './Pages/PaymentSucess';
import './dashboard.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Jobtracker from './Pages/Dashboard/Jobtracker';
import Myprofile from './Pages/Dashboard/Myprofile';
import Myschedule from './Pages/Dashboard/Myschedule';
import Overview from './Pages/Dashboard/Overview';
import AssesmentComponent from './Components/AssesmentComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
      }, [pathname])}

      useEffect(() => {
        AOS.init({
          duration: 2000,  
          once: false,  
        });
      }, []);
        

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Routes>

        {/* Unprotected Route Application Homepage */}
        <Route path='/' element={<Home /> }></Route>
        
        {/* Authentication Related Pages and Components */}
        <Route path='login' element={<Login/>}></Route> 
        <Route path='/sign' element={<Sign/>}></Route>
        <Route path='/otpVerify' element={<OtpVerification/>}></Route>
        <Route path='/forgotpass' element={<ForgotPassword/>}></Route>
        <Route path='/acctCreate' element={<AccountCreated/>}></Route>
        
        {/* Protected Routes only exposed with Authenticated Users */}
        <Route path='/assesment' element={<Assesment/>}></Route>
        <Route path='/tailoredJobs' element={<TailoredJobs/>}></Route>
        <Route path='/limitedUser' element={<LimitedUser/>}></Route>
        <Route path='/Resumefeedback' element={<ResumeFeedback/>}></Route>
        <Route path='/Paysucess' element={<PaymentSucess/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/jobtracker' element={<Jobtracker/>}></Route>
        <Route path='/myprofile' element={<Myprofile/>}></Route>
        <Route path='/myschedule' element={<Myschedule/>}></Route>
        <Route path='/overview' element={<Overview/>}></Route>
        <Route path='/assesmentComponent' element={<AssesmentComponent/>}></Route>
      </Routes>     
      </BrowserRouter>
   
    </div>
  );
}

export default App;
