import { observer } from "mobx-react-lite";
import Hheader from './components/header/header'
import AppRouter from "./components/AppRouter";
import "./App.css";
import React from 'react';

const App = observer(() => {
  return (
    <div className="app">
      <Hheader />
      <AppRouter/>
    </div>
  );
});

export default App;