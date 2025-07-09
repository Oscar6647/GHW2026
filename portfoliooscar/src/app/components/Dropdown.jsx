'use client'

import { useRouter } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CpuChipIcon,
} from '@heroicons/react/24/solid'

export default function Example() {
  const router = useRouter()

  const handleRedirect = (path) => {
    router.push(path)
  }
  return (
    <div className='text-center'>
      <Menu>
        <MenuButton className="group flex w-full items-center gap-2 rounded-lg px-10 py-1.5 hover:bg-white/10">
          Your Choice
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-30 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
             <button
              onClick={() => handleRedirect('/home#past')}
              className="group flex w-full items-center gap-2 rounded-lg px-4 py-1.5 hover:bg-white/10"
            >
            <BookOpenIcon className=" size-4  fill-white/30" />
              Past
              
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => handleRedirect('/home#present')}
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-white/10"
            >
            <CodeBracketIcon className="size-4 fill-white/30" />
              Present
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button
              onClick={() => handleRedirect('/home#future')}
              className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-white/10"
            >
            <CpuChipIcon className="size-4 fill-white/30" />
              Future
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}