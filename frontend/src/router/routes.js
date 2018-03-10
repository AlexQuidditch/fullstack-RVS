import HelloWorld from '../components/HelloWorld.vue';

import LoginPage from '../components/views/login';
import Register from '../components/views/login/Register.vue';
import SignIn from '../components/views/login/SignIn.vue';

import ProtocolPage from '../components/views/protocol/index.vue';
import ProtocolCreate from '../components/views/protocol/create.vue';
import ProtocolView from '../components/views/protocol/view.vue';
import ProtocolComplete from '../components/views/protocol/complete.vue';

export default [
  {
    path: '/',
    component: HelloWorld,
    children: [
      {
        path: 'protocols',
        name: 'Protocols',
        component: ProtocolPage,
        children: [
          {
            path: 'create',
            name: 'ProtocolCreate',
            component: ProtocolCreate
          },
          {
            path: 'view/:ProtocolID',
            name: 'ProtocolView',
            component: ProtocolView,
            props: true
          },
          {
            path: 'complete/:ProtocolID',
            name: 'ProtocolComplete',
            component: ProtocolComplete,
            props: true
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: LoginPage,
    children: [
      {
        path: '',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  },

];
