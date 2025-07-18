import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import MsgRoom from './components/MsgRoom';
import ProfilePage from './components/ProfilePage';
import { ChatProvider } from './context/ChatContext';
import useChatSocket from './hooks/useChatSocket';

/**
* Defines the main application component.
* This component sets up the routing for the application.
*/
function App() {
  return (
    <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/chat"
              element={
                <ChatProvider>
                  <MsgRoom />
                </ChatProvider>
              } />
          </Routes>
    </Router>
  )
}

export default App
