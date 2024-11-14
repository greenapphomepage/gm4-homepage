interface ArticleSectionProps {
  content: string
}

export default function ArticleSection({content}: ArticleSectionProps) {
  return <div dangerouslySetInnerHTML={{__html: content}}></div>
}
