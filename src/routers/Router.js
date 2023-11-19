import {Route, Routes} from 'react-router-dom';
import CounterContainer from "../pages/Counter/containers/CounterContainers";
import UserCard from "../components/UserCard";

import whiteWoman from '../static/images/woman white.jpg';
import ConditionalRenderingContainer from "../pages/ConditionalRendering/containers/ConditionalRenderingContainer";
import FunctionalCounterCountainer from "../pages/FunctionalCounter/containers/FunctionalCounterCountainer";
import HomePageContainers from "../pages/Home/containers/HomePageContainers";
import ListContainer from "../pages/Lists/containers/ListContainer";

import {ROUTE_NAMES} from "./routeNames";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<HomePageContainers />} />
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
            <Route path={ROUTE_NAMES.CONDITIONAL_RENDERING} element={<ConditionalRenderingContainer />} />
            <Route path={ROUTE_NAMES.FUNCTIONAL_COUNTER} element={<FunctionalCounterCountainer />} />
            <Route path={ROUTE_NAMES.LISTS} element={<ListContainer />} />

            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>


);
};

export default Router;