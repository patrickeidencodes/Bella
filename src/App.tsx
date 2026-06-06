import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import LearnSelect from './pages/LearnSelect';
import FlashcardSession from './pages/FlashcardSession';
import PracticeSelect from './pages/PracticeSelect';
import CategoryTest from './pages/CategoryTest';
import ExamSim from './pages/ExamSim';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lernen" element={<LearnSelect />} />
        <Route path="/lernen/:topicSlug" element={<FlashcardSession />} />
        <Route path="/ueben" element={<PracticeSelect />} />
        <Route path="/ueben/:topicSlug" element={<CategoryTest />} />
        <Route path="/pruefung" element={<ExamSim />} />
        <Route path="/statistik" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
