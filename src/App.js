import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import CreateWishlistScreen from './screens/CreateWishlistScreen';
import MyWishlistScreen from './screens/MyWishlistScreen';
import SignupScreen from './screens/SignupScreen';
import UnauthenticatedScreen from './screens/UnauthenticatedScreen';
import WelcomeScreen from './screens/WelcomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CreateWishlistScreen />} />
        <Route path='/no-access' element={<UnauthenticatedScreen />} />
        <Route path='/sign-up' element={<SignupScreen />} />
        <Route path='/welcome' element={<WelcomeScreen />} />
        <Route path='/user-dashboard' element={<DashboardLayout />}>
          <Route index element={<MyWishlistScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
