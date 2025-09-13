import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import VoiceDemos from './pages/VoiceDemos';
import AIServices from './pages/AIServices';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/voice-demos" element={<VoiceDemos />} />
        <Route path="/ai-services" element={<AIServices />} />
      </Routes>
    </div>
  );
}

export default App;