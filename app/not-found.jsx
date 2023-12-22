import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='section min-h-screen flexCenter'>
        <div className="container flexCenter flex-col gap-6">
            <img src="/404.png" alt="" className='w-48' />
            <h1 className='font-bold text-5xl text-gray-800 dark:text-gray-100 capitalize'>Ooops Page not found</h1>
            <Link href={'/'} className='capitalize text-white bg-secondary hover:bg-secondary/90 px-5 py-3 rounded-full text-xl font-bold'> return to home </Link>
        </div>
    </div>
  )
}