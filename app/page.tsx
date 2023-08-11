'use client';

import { LoginContext } from '@/context/LoginContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import Login from './(auth)/login/page';
import axios from 'axios';

const Home = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    console.log('??');
    axios.get('https://localhost:3123/rest');
  }, []);

  return <>{!isLoggedIn && <Login />}</>;
};

export default Home;
