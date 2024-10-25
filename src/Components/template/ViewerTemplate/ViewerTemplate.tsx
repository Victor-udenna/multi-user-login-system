'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ViewerTemplate() {
  const router = useRouter();

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'Viewer') {
      router.push('/');
    }
  }, []);

  return <h1>Welcome to the Viewer Dashboard</h1>;
}
