import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "conf-demo-app"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-7xl mx-auto sm:p-6 lg:p-8">{children}</div>
      </main>
    </>
  )
}

export default Layout
