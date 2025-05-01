import { observer } from "mobx-react-lite";
import Hheader from './components/header/header'
import AppRouter from "./components/AppRouter";
import "./App.css";
import React,  {useContext, useState, useEffect} from 'react';
import { Context } from './index';
import { check } from "./http/UserApi";
const App = observer(() => {
  const {user} = useContext(Context)
//   useEffect(() => {
//     check().then(data => {
//       console.log(data)
//         user.setIsEmail(data.email)
//         user.setId(data.id)
//         user.setUser(true)
//         user.setIsAuth(true)
//     }).finally(() => setLoading(false))
// }, [])
  return (
    <div className="app">
      <Hheader />
      <AppRouter/>
    </div>
  );
});

export default App;