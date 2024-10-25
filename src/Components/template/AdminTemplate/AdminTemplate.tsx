'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminTemplate() {
  const router = useRouter();

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'Admin') {
      router.push('/');
    }
  }, []);

  return <h1>Welcome to the Admin Dashboard</h1>;
}
