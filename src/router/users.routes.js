import { Layout, List, AddEdit } from '@/views/users';

export default {
    path: '/users',
    component: Layout,
    children: [
        { path: '', component: List, meta: { roles: ['admin'] } }, // Require admin role for accessing user list
        { path: 'add', component: AddEdit, meta: { roles: ['admin'] } }, // Require admin role for adding users
        { path: 'edit/:id', component: AddEdit, meta: { roles: ['admin'] } } // Require admin role for editing users
    ]
};
