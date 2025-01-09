import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="details/:itemId" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

/* export function App() {
  const [page, setPage] = useState('dashboard');
  const [itemId, setItemId] = useState<number>();

  function handleDetails(itemId: number): void {
    setPage('details');
    setItemId(itemId);
  }

  return (
    <>
      <Header onNavigate={(page) => setPage(page)} />
      {page === 'dashboard' && <Dashboard onDetails={handleDetails} />}
      {page === 'details' && (
        <Details itemId={itemId} onDone={() => setPage('dashboard')} />
      )}
      {page === 'about' && <About />}
      {page === undefined && <NotFound onDone={() => setPage('dashboard')} />}
    </>
  );
} */
