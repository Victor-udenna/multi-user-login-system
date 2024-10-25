'use client';

import './LoginFormStyle.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/Components/atom/Button';
import Text from '@/Components/atom/Text';
import Input from '@/Components/atom/Input';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!username || !password || !role) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    const credentials = {
      admin: { username: 'admin', password: 'admin123', role: 'Admin' },
      editor: { username: 'editor', password: 'editor123', role: 'Editor' },
      viewer: { username: 'viewer', password: 'viewer123', role: 'Viewer' },
    };

    const user = Object.values(credentials).find(
      (cred) => cred.username === username && cred.password === password && cred.role === role
    );

    if (user) {
      sessionStorage.setItem('role', user.role);
      setTimeout(() => {
        switch (user.role) {
          case 'Admin':
            router.push('/admin-dashboard');
            break;
          case 'Editor':
            router.push('/editor-dashboard');
            break;
          case 'Viewer':
            router.push('/viewer-dashboard');
            break;
          default:
            router.push('/login');
            break;
        }
        setLoading(false);
      }, 1000);
    } else {
      setError('Invalid username, password, or role. Please check your details.');
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__text-container">
        <h1 className="login-form__headertext">Welcome!</h1>
        <Text className="login-form__text">Enter details to login.</Text>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-form__input-container">
          <div className={`login-form__input-wrapper ${error ? 'error' : ''}`}>
            <Input
              className="login-form__input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />
          </div>
          <div className={`login-form__input-wrapper ${error ? 'error' : ''}`}>
            <Input
              className="login-form__input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              role="button"
              tabIndex={2}
              className="login-form__password-reveal"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          <div className={`login-form__input-wrapper ${error ? 'error' : ''}`}>
            <select
              className="login-form__input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
        </div>
        {error && <p className="form-error-message">{error}</p>}
        <Text className="login-form__forgot-password">{'Forgot PASSWORD?'}</Text>
        <Button className="login-form__button" textValue={loading ? 'LOADING...' : 'LOG IN'} disabled={loading} />
      </form>
    </div>
  );
}
