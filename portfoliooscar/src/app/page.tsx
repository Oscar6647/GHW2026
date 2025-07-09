// app/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Example from './components/Dropdown'

export default function IntroPage() {

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Fowards or Backwards?</h1>
      <Example/>
    </div>
  )
}
