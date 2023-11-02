import {Route, Routes} from 'react-router-dom';
import {ROUTE_NAMES} from "./routeNames";
import CounterContainer from "../pages/Counter/containers/CounterContainers";
import UserCard from "../components/UserCard";

import whiteWoman from '../static/images/woman white.jpg';


const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
        </Routes>
    );
};

export default Router;