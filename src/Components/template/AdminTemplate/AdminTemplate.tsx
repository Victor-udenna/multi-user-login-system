'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminTemplate() {
  const router = useRouter();

  const checkUserRole = () => {
    try {
      const role = sessionStorage?.getItem('role');
      if (role !== 'Admin') {
        router.push('/');
      }
    } catch (error) {
      console.error('Error accessing sessionStorage:', error);
      router.push('/');
    }
  };

  useEffect(() => {
    checkUserRole();
  }, []);

  return <h1>Welcome to the Admin Dashboard</h1>;
}
