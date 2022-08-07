import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import TalksList from "app/core/components/Events"
import { useRouter } from "next/router"

const Talk = () => {
  const router = useRouter()
  const { talk } = router.query

  return (
    <Layout title={talk as string}>
      <div className="container">
        <main>
          <Suspense fallback="Loading talks...">{talk}</Suspense>
        </main>
      </div>
    </Layout>
  )
}

export default Talk
