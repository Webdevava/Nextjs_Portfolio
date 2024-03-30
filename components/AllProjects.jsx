import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

const AllProjects = () => {
  return (
    <div className='w-full flex py-10 justify-end relative'>
    <Link href="/projects" className="px-4 py-8 border-2 border-primary bg-gradient  relative w-2/3 lg:w-1/2 connectBtn border-r-0 rounded-s-lg flex justify-start items-center">
    <span className='border-2 border-primary rounded-full absolute -left-7 top-5 bg-black p-2'>
    <MoveLeft height={40} width={40} />
    </span>
    <h1 className='text-2xl'>View More</h1>
    </Link>
    </div>
  )
}

export default AllProjects