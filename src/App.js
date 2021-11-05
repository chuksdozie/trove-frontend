import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/molecules/headers/MainHeader";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Loan from "./pages/loan/Loan";
import trovelogo from "./utils/resources/trovelogo.png";
import {
  UserContext,
  LoadingContext,
  StockContext,
  LoanContext,
  LoanHistoryContext,
} from "./store/UserContext";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState("none");
  const [stock, setStock] = useState([]);
  const [loan, setLoan] = useState();
  const [loanHistory, setLoanHistory] = useState();
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const loadingProviderValue = useMemo(
    () => ({ loading, setLoading }),
    [loading, setLoading]
  );
  const stockValue = useMemo(() => ({ stock, setStock }), [stock, setStock]);
  const loanValue = useMemo(() => ({ loan, setLoan }), [loan, setLoan]);
  const loanHistoryValue = useMemo(
    () => ({ loanHistory, setLoanHistory }),
    [loanHistory, setLoanHistory]
  );
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={providerValue}>
          <StockContext.Provider value={stockValue}>
            <LoadingContext.Provider value={loadingProviderValue}>
              <LoanContext.Provider value={loanValue}>
                <LoanHistoryContext.Provider value={loanHistoryValue}>
                  <MainHeader />
                  <div
                    style={{
                      display: loading,
                      width: "100%",
                      height: "100vh",
                      backgroundColor: "rgba(150, 150, 150, .7)",
                      justifyContent: "center",
                      alignItems: "center",
                      zIndex: 5,
                      position: "fixed",
                      top: 0,
                    }}
                  >
                    <img className={"App-logo"} src={trovelogo} alt="logo" />
                  </div>

                  <Switch>
                    <Route exact path="/login">
                      <Login />
                    </Route>
                    {/* <Route path="*">
                      <Login />
                    </Route> */}
                    <Route exact path="/signup">
                      <Signup />
                    </Route>
                    <Route exact path="/home">
                      <Home />
                    </Route>
                    <Route exact path="/profile">
                      <Profile />
                    </Route>
                    <Route exact path="/loans">
                      <Loan />
                    </Route>
                  </Switch>
                </LoanHistoryContext.Provider>
              </LoanContext.Provider>
            </LoadingContext.Provider>
          </StockContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
