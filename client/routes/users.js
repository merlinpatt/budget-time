import route from './route';

import AuthPage from '../pages/AuthPage';
import BudgetTime from '../pages/BudgetTime';

route({
  name: 'login.index',
  path: '/',
  content: BudgetTime,
});

route({
  name: 'login',
  path: '/login',
  content: AuthPage,
});
