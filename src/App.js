import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientList from "./components/PatientList";
import Calendar from "./components/Calendar";
import Messages from "./components/Messages";
import Overview from "./components/Overview";
import Paymentinfo from "./components/PaymentInfo";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <main>
          <Routes>
            <Route exact path="/" element={<PatientList />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/paymentinfo" element={<Paymentinfo />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
