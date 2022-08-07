import { Suspense } from "react"
import Layout from "app/core/layouts/Layout"
import Events from "app/core/components/Events"

const Home = () => {
  return (
    <Layout title="Talks">
      <div className="p-10">
        <header>
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Talks</h1>
        </header>
        <main className="py-10">
          <Suspense fallback="Loading talks...">
            <Events />
          </Suspense>
        </main>
      </div>
    </Layout>
  )
}

export default Home
