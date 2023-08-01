'use client';

import { LoginContext } from '@/context/LoginContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import Login from './login/page';

const Home = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    //isLoggedIn && router.push("chatrooms");
    //!isLoggedIn && router.push("login");
  }, []);

  return <>{!isLoggedIn && <Login />}</>;
};

export default Home;
