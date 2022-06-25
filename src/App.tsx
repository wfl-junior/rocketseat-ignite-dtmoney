import { Fragment } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export const App: React.FC = () => (
  <Fragment>
    <GlobalStyle />

    <Header />
    <Dashboard />
  </Fragment>
);
