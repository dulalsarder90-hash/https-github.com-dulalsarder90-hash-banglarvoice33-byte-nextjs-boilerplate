import HeroSection from '@/components/HeroSection'
import StudentLearningHub from '@/components/StudentLearningHub'
import NewsCategories from '@/components/NewsCategories'
import EPaperSection from '@/components/EPaperSection'
import TelegramSection from '@/components/TelegramSection'
import AdminSection from '@/components/AdminSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StudentLearningHub />
      <NewsCategories />
      <EPaperSection />
      <TelegramSection />
      <AdminSection />
    </>
  )
}
