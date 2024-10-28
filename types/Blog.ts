import {Category} from "@/types/Category";
import {HashTag} from "@/types/Hashtag";

export interface Blog {
  id: number
  title: string
  slug: string
  thumbnail: string
  content: string
  description: string
  keywords: string
  order: string
  created_at: string
  updated_at: string
  deleted_at: any
  category: Category
  hashTags: HashTag[]
}
