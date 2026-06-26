export interface NewsArticle {
  id: string
  title: string
  summary: string
  content: string
  category: string
  author: string
  image_url: string
  published_at: string
  tags: string[]
  is_breaking: boolean
  read_time: number
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  color: string
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  role: string
}
