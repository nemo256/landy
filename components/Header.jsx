import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'

// custom imports
import Button from './Button'

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
    'name': 'Projects',
    'link': '#projects',
  },
  {
    'name': 'Testimonials',
    'link': '#testimonials',
  },
  {
    'name': 'Contact',
    'link': '#contact',
  },
]

const Header = () => {
  return (
    <header className="sm:text-l md:text-xl bg-primary text-primary text-center p-4 font-bold">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <div className="flex flex-row cursor-pointer">
            <p className="px-1 text-xl text-secondary font-black">Landing</p>
            <p className="px-1 text-xl text-accent font-black">Page</p>
          </div>
        </Link>
        <ul className="hidden md:flex flex-row">
          {sections.map((section) => (
            <Link key={section.name} href={section.link}>
              <li>{section.name}</li>
            </Link>
          ))}
        </ul>
        <div className="hidden md:flex flex-row">
          <Button>
            <BsFillTelephoneFill className="mr-2 -ml-1 w-4 h-4"/>
            {number}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
