import { useState } from 'react'
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

// custom imports
import CallButton from './CallButton'

const number = '0556842158'
const sections = [ 
  {
    'name': 'Home',
    'link': '/#',
  },
  {
    'name': 'Services',
    'link': '#services',
  },
  {
    'name': 'About',
    'link': '#about',
  },
  {
    'name': 'Contact',
    'link': '#contact',
  },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sm:text-l md:text-xl bg-primary text-primary text-center p-4 font-bold">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <div className="flex flex-row cursor-pointer items-center">
            <p className="px-1 text-xl text-accent font-black">Landing</p>
            <p className="px-1 text-xl text-secondary font-black">Page</p>
          </div>
        </Link>
        <ul className="hidden md:flex flex-row items-center">
          {sections.map((section) => (
            <a key={section.name} href={section.link}>
              <li>{section.name}</li>
            </a>
          ))}
        </ul>
        <div className="hidden sm:hidden md:flex flex-row">
          <a href="tel:+213556842158">
            <CallButton>
              <BsFillTelephoneFill className="mr-2 -ml-1 w-4 h-4"/>
              {number}
            </CallButton>
          </a>
        </div>
        <div className="flex sm:flex md:hidden text-secondary cursor-pointer">
          <AiOutlineMenu onClick={() => { setOpen(!open) }} className={!open ? 'flex sm:hidden w-8 h-8' : 'hidden'}/>
          <AiOutlineClose onClick={() => { setOpen(!open) }} className={open ? 'flex sm:hidden w-8 h-8' : 'hidden'}/>
        </div>
        <div className="flex w-full sm:hidden bg-primary mt-12 flex-col items-center absolute left-1/2 transform -translate-x-1/2">
          <ul>
            {open && sections.map((section) => (
              <Link key={section.name} href={section.link}>
                <li onClick={() => { setOpen(!open) }} className="py-4 text-lg">{section.name}</li>
              </Link>
            ))}
            <a href="tel:+213556842158" className={open ? "hidden sm:flex mt-4 pb-8" : "hidden"}>
              <CallButton className="p-2 text-xl font-extrabold">
                <BsFillTelephoneFill className="mr-2 -ml-1 w-4 h-4"/>
                {number}
              </CallButton>
            </a>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
