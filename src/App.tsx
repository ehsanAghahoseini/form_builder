import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ListForm, AddForm } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ViewForm } from './pages/ViewForm';

function App() {
  return (
    <div className="w-full min-h-screen flex  flex-col max-w-3xl m-auto bg-white shadow">
      <BrowserRouter>
        <Routes>
          <Route path="view/:id" element={<ViewForm />} />
          <Route path="/" element={<ListForm />} />
          <Route path="/add" element={<AddForm />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        rtl={true}
        hideProgressBar={false} newestOnTop
        closeOnClick theme='light'
        pauseOnFocusLoss
        draggable pauseOnHover
      />
    </div>
  );
}

export default App;
