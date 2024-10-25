'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditorTemplate() {
  const router = useRouter();

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    if (role !== 'Editor') {
      router.push('/');
    }
  }, []);

  return <h1>Welcome to the Editor Dashboard</h1>;
}
