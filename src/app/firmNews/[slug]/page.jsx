import { getFirmNewsBySlug } from '@/content/firmNews'
import FirmNewsLayout from '@/components/firmNews/FirmNewsLayout' // Use the new one
import Header from '@/components/Header' 
import { notFound } from 'next/navigation'

export default async function FirmNewsArticle({ params }) {
  const { slug } = await params 
  const data = getFirmNewsBySlug(slug)

  if (!data) notFound()

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      <FirmNewsLayout data={data} />
    </main>
  )
}