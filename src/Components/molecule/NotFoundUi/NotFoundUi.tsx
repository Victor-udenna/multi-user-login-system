import React from 'react'
import Link from 'next/link'
import './NotFoundStyle.scss'

export default function NotFoundUi() {
  return (
    <div className="not-found-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oops! Page not found.</p>
      <Link href="/" className="home-link">
        Go back to Home
      </Link>
    </div>
  )
}


