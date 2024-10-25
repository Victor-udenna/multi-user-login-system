'use client';

import { useEffect, useState } from 'react';

import React from 'react';
import './HeaderStyle.scss';
import { useRouter } from 'next/navigation';
import ImageAtom from '@/Components/atom/Image';
import Input from '@/Components/atom/Input';
import Button from '@/Components/atom/Button';
import avatar from '@/assets/avatar.svg';

export default function Header() {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage?.removeItem('role');
    router.push('/');
  };

  const handleUsername = () => {
    const storedRole = sessionStorage?.getItem('role');
    if (storedRole === 'Admin') {
      setUserName('Administrator');
    } else if (storedRole === 'Viewer') {
      setUserName('User');
    } else if (storedRole === 'Editor') {
      setUserName('Editor');
    }
  };

  useEffect(() => {
    handleUsername();
  }, []);

  return (
    <header className="header">
      <div className="header__search-section">
        <div className="header-search">
          <Input
            className="header-search__input"
            type="text"
            placeholder="Search for anything"
            value={''}
            onChange={(e) => console.log(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="header__user-section">
        <div className="header__user">
          <div className="header__user-img-container">
            <ImageAtom className="header__user-img" alt="avatar-icon" width={48} height={48} src={avatar} />
          </div>
          <div className="header__user-dropdown">
            <Button className="header__button" textValue={userName} position="right" />
          </div>
        </div>
        <Button className="header__logout-button" textValue="Logout" onClick={handleLogout} />
      </div>
    </header>
  );
}
