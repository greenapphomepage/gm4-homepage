import useLinearCard from '@/lib/linear-card'
import useBlog from '@/lib/use-blog'
import {motion, useMotionTemplate} from 'framer-motion'
import CardBlogV2 from './card-blog-v2'

interface SidebarProps {
  id: number
}

export default function Sidebar({id}: SidebarProps) {
  const {
    handleMouseMove,
    handleMouseLeave,
    rotateY,
    rotateX,
    cursorY,
    cursorX,
  } = useLinearCard()
  const {resBlog} = useBlog()

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='w-full h-fit rounded-lg xl:w-1/3 border-gray-800 border-[1px] px-2 xl:sticky xl:top-40'
    >
      <motion.div
        className='pointer-events-none absolute -inset-px opacity-0 rounded-xl transition duration-300 group-hover:opacity-30'
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${cursorX}px ${cursorY}px,
              #346BFA 0%,
              rgba(0, 0, 0, 0),
              transparent 70%
            )
          `,
        }}
      />
      <div className='flex justify-between items-center text-white mb-4 p-4'>
        <h2 className='text-[22px] font-semibold'>추천 기사</h2>
        <p className='xl:text-base text-sm bg-blue-gradient text-transparent bg-clip-text font-bold flex items-center transition-all cursor-pointer'>
          VIEW ALL{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.21967 17.0303C8.92678 16.7374 8.92678 16.2626 9.21967 15.9697L13.1893 12L9.21967 8.03033C8.92678 7.73744 8.92678 7.26256 9.21967 6.96967C9.51256 6.67678 9.98744 6.67678 10.2803 6.96967L14.7803 11.4697C15.0732 11.7626 15.0732 12.2374 14.7803 12.5303L10.2803 17.0303C9.98744 17.3232 9.51256 17.3232 9.21967 17.0303Z'
              fill='url(#paint0_linear_663_6266)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_663_6266'
                x1='12'
                y1='6.75'
                x2='12'
                y2='17.25'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#396FFD' />
                <stop offset='1' stopColor='#0744E6' />
              </linearGradient>
            </defs>
          </svg>
        </p>
      </div>
      <div>
        {resBlog?.data.listBlog
          .filter((item) => item.id !== id)
          .map((item) => (
            <CardBlogV2 blog={item} key={item.id} />
          ))}
      </div>
    </motion.div>
  )
}
