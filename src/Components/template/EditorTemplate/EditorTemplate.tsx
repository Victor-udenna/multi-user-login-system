'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditorTemplate() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const role = sessionStorage.getItem('role');

        if (role !== 'Editor') {
          router.push('/');
        }
      } catch (error) {
        console.error('Error accessing sessionStorage:', error);
      }
    }
  }, [router]);

  return <h1>Welcome to the Editor Dashboard</h1>;
}
