import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { MAIN } from "../utils/const";
const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path="*" element={<Navigate to={MAIN}/>}/>
        </Routes>
    )
}
export default AppRouter;