import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import TransactionBreakdown from "./Components/TransactionBreakdown";
import Login from "./Components/Login";
import Amount from "./Components/Amount";
import Final from "./Components/Final";
import BalanceInfo from "./Components/BalanceInfo";

export const AuthContext = createContext();
const App = () => {
  const [transactionType, setTransactionType] = useState(null);
  return (
    <AuthContext.Provider value={{ transactionType, setTransactionType }}>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/transactions" element={<TransactionBreakdown />} />
          <Route path="/login" element={<Login />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/finalPage" element={<Final />} />
          <Route path="/balanceInfo" element={<BalanceInfo />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;