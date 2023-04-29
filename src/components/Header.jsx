import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

import { logo } from '@/images/logo.png'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-200 " />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-[rgba(0,0,0,0.3)] p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Sobre mim</MobileNavLink>
            <MobileNavLink href="#secondary-features">Agendamentos</MobileNavLink>
            <MobileNavLink href="#testimonials">Contatos</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 flex flex-wrap items-center justify-between px-4 py-3 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8  bg-[rgba(0,0,0,0.3)] 
    ">
      <div className="mr-6 flex lg:hidden">
      <MobileNavigation/>

      </div>
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="relative flex flex-grow basis-0 items-center">
            <Link href="#" aria-label="Home">
            <Image
                className="h-8 w-30"
                src={logo}
                alt="nut"
                priority              
              />
            </Link>
            <p className= "primary">Mariana Guerreiro</p>
            <div className="hidden sm:ml-6 lg:block space-x-4">
              <NavLink href="#features">Sobre mim</NavLink>
              <NavLink href="#secondary-features">Agendamentos</NavLink>
              <NavLink href="#testimonials">Contatos</NavLink>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
