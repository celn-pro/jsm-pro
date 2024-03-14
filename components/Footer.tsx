import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between border-black-400 
    body-text w-full gap-y-10 border-t bg-black-100 px-20 max-md:flex-col'>
        <p>Copyright 2024 JS Mastery Pro | All Right Reserved</p>

        <div className='flex gap-x-9'>
            <Link href="/terms-of-use">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>

        </div>
    </footer>
  )
}

export default Footer