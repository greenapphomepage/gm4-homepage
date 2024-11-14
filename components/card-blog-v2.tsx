'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import useLinearCard from '@/lib/linear-card'
import {formatTime} from '@/lib/utils'
import {Blog} from '@/types/Blog'
import {motion, useMotionTemplate} from 'framer-motion'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

const CustomCard = motion(Card)
interface CardBlogV2Props {
  blog: Blog
}

const CardBlogV2 = ({blog}: CardBlogV2Props) => {
  const router = useRouter()
  const {
    handleMouseMove,
    handleMouseLeave,
    rotateY,
    rotateX,
    cursorY,
    cursorX,
  } = useLinearCard()
  return (
    <CustomCard
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='w-full border-none flex flex-col rounded-2xl bg-[#010618] text-white text-[14px] custom-cursor group'
      style={{
        background:
          'radial-gradient(70.7% 70.7% at 50% 50%, #001A42 0%, rgba(1, 10, 24, 0.00) 100%)',
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      onClick={() => router.push(`/blog/${blog.slug}`)}
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
      <CardHeader className='pt-4 px-4 pb-8 flex gap-4 flex-row justify-between'>
        <div className='flex flex-col gap-2'>
          <CardTitle className='font-medium text-base bg-title bg-clip-text text-transparent'>
            <div className='text-[#98A1B6] text-[15px] flex gap-2'>
              <span>{blog.category.name}</span> &bull;{' '}
              {formatTime(new Date(blog.created_at))}
            </div>
          </CardTitle>
          <CardDescription className='font-bold xl:text-lg text-base bg-title bg-clip-text text-transparent line-clamp-3'>
            {blog.title}
          </CardDescription>
        </div>
        <Image
          src={blog.thumbnail}
          alt={blog.thumbnail}
          width={100}
          height={100}
          sizes='100vw'
          className='xl:h-[100px] xl:w-[100px] object-cover rounded-xl w-[80px] h-[80px]'
        />
      </CardHeader>
    </CustomCard>
  )
}

export default CardBlogV2
