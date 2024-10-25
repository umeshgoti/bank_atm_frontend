import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import TransactionBreakdown from "./Components/TransactionBreakdown";
import Login from "./Components/Login";
import Amount from "./Components/Amount";
import Final from "./Components/Final";
import BalanceInfo from "./Components/BalanceInfo";
import Customer from "./Components/Customer";
import LastTransaction from "./Components/LastTransaction";
import Atm from "./Components/Atm";
import { fetchAtmRequest } from "./redux/action/atmAction";
import { useDispatch } from "react-redux";
import VideoAndImage from "./Components/VideoAndImage";

export const AuthContext = createContext();

const App = () => {
  const [transactionType, setTransactionType] = useState(null);
  const [atmId, setAtmId] = useState(null);
  return (
    <AuthContext.Provider
      value={{ transactionType, setTransactionType, atmId, setAtmId }}
    >
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/transactions" element={<TransactionBreakdown />} />
          <Route path="/login" element={<Login />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/finalPage" element={<Final />} />
          <Route path="/balanceInfo" element={<BalanceInfo />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/lastTransaction" element={<LastTransaction />} />
          <Route path="/atm" element={<Atm />} />
          <Route path="/videoAndImage" element={<VideoAndImage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
