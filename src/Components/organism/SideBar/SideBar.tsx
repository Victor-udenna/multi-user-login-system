import { useEffect, useState } from 'react';
import './SideBarStyle.scss';

export default function SideBar() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem('role');
    setRole(storedRole);
  }, []);

  return (
    <nav className={`sidebar sidebar--${role?.toLowerCase()}`}>
      <div className="sidebar__role">
        <span className="sidebar__role-button">{role || 'Loading...'}</span>
      </div>
      <div className="sidebar__nav">
        <h3 className="sidebar__nav-header">Navigation</h3>
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="sidebar__nav-item">
            <a href="/profile">Profile</a>
          </li>
          {role === 'Admin' && (
            <>
              <li className="sidebar__nav-item">
                <a href="/settings">Settings</a>
              </li>
              <li className="sidebar__nav-item">
                <a href="/reports">Reports</a>
              </li>
              <li className="sidebar__nav-item">
                <a href="/analytics">Analytics</a>
              </li>
            </>
          )}
          {role === 'Editor' && (
            <>
              <li className="sidebar__nav-item">
                <a href="/edit-content">Edit Content</a>
              </li>
              <li className="sidebar__nav-item">
                <a href="/media-library">Media Library</a>
              </li>
            </>
          )}
          {role === 'Viewer' && (
            <li className="sidebar__nav-item">
              <a href="/view-reports">View Reports</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
