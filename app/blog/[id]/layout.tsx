import {fetcher} from '@/lib/utils'
import {Blog} from '@/types/Blog'
import {Metadata} from 'next'
type MetadataProps = {
  params: {id: string}
}
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const {id} = params
  const result: {data: Blog} = await fetcher(`/blog/${id}`)
  const detail = result.data
  return {
    title: detail.title,
    description: detail.description,
    keywords: detail.keywords,
    alternates: {
      canonical: `/blog/${id}`,
    },
  }
}

export default function DetailBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='lg:px-[80px] xl:px-24 pb-11'>{children}</div>
}
