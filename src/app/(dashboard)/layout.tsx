'use client';

import Header from '@/Components/organism/Header/Header';
import './LayoutStyle.scss';
import SideBar from '@/Components/organism/SideBar/SideBar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <section className="dashboard-content">
        <Header />
        <div className="dashboard-children">{children}</div>
      </section>
    </div>
  );
}
