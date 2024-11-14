'use client'
import ArticleSection from '@/components/article-section'
import MainImageSection from '@/components/main-image-section'
import Sidebar from '@/components/sidebar'
import useBlogDetail from '@/lib/use-blog-detail'
import {formatTime} from '@/lib/utils'
import {useRouter} from 'next/navigation'

const DetailBlog = ({params}: {params: {id: string}}) => {
  const router = useRouter()
  const {blog} = useBlogDetail(params.id)

  return (
    <div className='flex items-center justify-center'>
      {blog?.data && (
        <div className='min-h-screen'>
          <div className='sticky xl:top-[80px] top-[52px] md:top-[78px] bg-primary backdrop-blur-md z-30 py-4 flex items-center space-x-4 border-b-[2px] border-[#98A1B6]'>
            <button className='text-white' onClick={() => router.back()}>
              &larr; Back
            </button>
          </div>
          <br />
          <main className='xl:max-w-[1250px] max-w-[calc(100vw-24px)] xl:w-[1250px] flex xl:flex-row flex-col w-fit mx-auto md:flex xl:space-x-6 gap-4'>
            <div className='flex-1 space-y-4'>
              <div className='text-[#98A1B6] xl:text-base text-[15px]'>
                {blog.data.category.name} &bull;
                {formatTime(new Date(blog.data.created_at))}
              </div>
              <h1 className='text-lg xl:text-[28px] xl:leading-8 font-bold'>
                {blog.data.title}
              </h1>
              <MainImageSection image={blog.data.thumbnail} />
              <ArticleSection content={blog.data.content} />
              <div className='flex flex-wrap gap-3'>
                {blog.data.hashTags.map((item) => (
                  <div
                    key={item.id}
                    className='rounded-xl bg-[#202834] w-fit px-4 py-2 text-white text-sm xl:text-base'
                  >
                    #{item.name}
                  </div>
                ))}
              </div>
            </div>

            <Sidebar id={blog.data.id} />
          </main>
        </div>
      )}
    </div>
  )
}

export default DetailBlog
