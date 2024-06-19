import React from 'react'
import './loading.css'

export default function LoadingPage() {
  return (
    <div className='w-full h-screen flexCenter dark:bg-gray-800 bg-white'>
      <div className="loader">
        <div className="loader-square bg-gray-800 dark:bg-white"></div>
        <div className="loader-square bg-gray-800 dark:bg-white"></div>
        <div className="loader-square bg-gray-800 dark:bg-white"></div>
        <div className="loader-square bg-gray-800 dark:bg-white"></div>
        <div className="loader-square bg-gray-800 dark:bg-white"></div>
        <div className="loader-square bg-gray-800 dark:bg-white"></div>
        <div className="loader-square bg-gray-800 dark:bg-white"></div>
      </div>
    </div>
  )
}