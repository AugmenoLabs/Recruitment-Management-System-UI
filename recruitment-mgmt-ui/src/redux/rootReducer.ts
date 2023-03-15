import { counterReducer } from './counter/slice';
import { NavbarReducer } from './Navbar/slice';

const rootReducer = {
  counter: counterReducer,
  Navbar: NavbarReducer,
};

export default rootReducer;
