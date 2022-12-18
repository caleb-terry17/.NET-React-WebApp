import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Names } from "./components/Names";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/names',
    element: <Names />
  }
];

export default AppRoutes;
