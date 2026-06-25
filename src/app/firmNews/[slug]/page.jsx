import {
  allFirmNews,
  getFirmNewsBySlug,
} from '@/content/firmNews'

import FirmNewsLayout from '@/components/firmNews/FirmNewsLayout'
import Header from '@/components/Header'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return allFirmNews.map((article) => ({
    slug: article.slug,
  }))
}

export default async function FirmNewsArticle({ params }) {
  const { slug } = await params

  const data = getFirmNewsBySlug(slug)

  if (!data) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      <FirmNewsLayout data={data} />
    </main>
  )
}
