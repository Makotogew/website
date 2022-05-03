import Layout from '~/components/Layout'
import StyledMarkdown from '~/components/StyledMarkdown'
import Head from 'next/head'
import React from 'react'
import getStaticMarkdownPaths from '~/lib/getStaticMarkdownPaths'
import getStaticMarkdownProps from '~/lib/getStaticMarkdownProps'

export async function getStaticPaths() { return getStaticMarkdownPaths('pages/understanding-json-schema/references') }
export async function getStaticProps(args: any) { return getStaticMarkdownProps(args, 'pages/understanding-json-schema/references') }

export default function StaticMarkdownPage ({ frontmatter, content }: { frontmatter: any, content: any }) {
  return (
    <Layout>
      <Head>
        <title>JSON Schema - {frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <StyledMarkdown markdown={content} />
    </Layout>
  )
}