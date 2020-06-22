import Vue from 'vue';
import Router from 'vue-router';
// @->src
import Login from '@/components/login/login';
import Home from '@/components/home/home';
import Users from '@/components/users/users';
import Role from '@/components/role/role';
import Permission from '@/components/permission/permission'

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      redirect: 'role',
      children: [
        {
          name: 'users',
          path: 'users',
          component: Users
        },
        {
          name: 'role',
          path: 'role',
          component: Role
        },
        {
          name: 'permission',
          path: 'permission',
          component: Permission
        },
      ]
    },
  ],
});
