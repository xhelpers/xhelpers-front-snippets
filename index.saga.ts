import reducer from './{name}.reducer';
import saga from './{name}.saga';
import * as action from './{name}.action';
import * as selector from './{name}.selector';
import * as constant from './{name}.constant';
import subscriber from './{name}.subscriber';
import initialState from './{name}.initialState';

export default {
  reducer,
  saga,
  action,
  constant,
  selector,
  initialState,
  subscriber,
  name: constant.NAME,
};
