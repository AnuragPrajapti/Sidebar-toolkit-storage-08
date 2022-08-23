import React from 'react';
 import { FcAbout , FcBusinessman , FcHome  , FcImport ,FcSupport ,FcComments } from "react-icons/fc";
 import { FaWindows } from "react-icons/fa";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FcHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon:   <FcAbout />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <FcBusinessman />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon:   <FcImport />,
    cName: 'nav-text'
  },
  {
    title: 'Deshboard',
    path: '/deshboard',
    icon: <FaWindows />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FcComments />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/setting',
    icon: <FcSupport />,
    cName: 'nav-text'
  }
];
