import { getNewsBySlug } from '@/content/sustainability'
import EditorialLayout from '@/components/sustainability/EditorialLayout'
import Header from '@/components/Header' 
import { notFound } from 'next/navigation'

export default async function SustainabilityArticle({ params }) {
  const { slug } = await params 
  const data = getNewsBySlug(slug)

  if (!data) notFound()

  return (
    <main className="relative min-h-screen bg-white">
      {/* The Black Version Header */}
      <Header />
      
      {data.layoutType === 'cinematic' ? (
        <EditorialLayout data={data} />
      ) : (
        <div className="pt-40 px-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold uppercase italic">{data.title}</h1>
          <p className="mt-8 text-slate-500">{data.quote}</p>
        </div>
      )}
    </main>
  )
}