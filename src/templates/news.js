import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import { Wrapper } from '../components/Layout.Wrapper'
import { Spacing } from '../components/Layout.Spacing'
import { Hero, HeroTitle, HeroContent } from '../components/Common.Hero'
import MarkdownContent from '../components/Common.MarkdownContent'
import { Footer } from '../components/Layout.Footer'

import { BlogPostShareButtons } from '../components/Blog.Post.ShareButtons'

import background from '../images/hero/blog-bg.svg'
import overlay from '../images/hero/blog-overlay.svg'

export default function BlogPage({ data }) {
  const { post } = data
  const { frontmatter, html, fields } = post

  return (
    <Layout>
      <>
        <TitleAndMetaTags
          title={frontmatter.title}
          pathname={`news/${fields.slug}`}
        />
        <Hero backgroundImage={background} backgroundColor={'#9124D8'}>
          <Wrapper>
            <HeroTitle>
              <span style={{ fontWeight: 100 }}>{frontmatter.title}</span>
            </HeroTitle>
            <HeroContent>
              <b>{frontmatter.author}</b> posted this on {frontmatter.date}
            </HeroContent>
          </Wrapper>
        </Hero>

        <Wrapper>
          <MarkdownContent html={html} />
          {frontmatter.share && (
            <BlogPostShareButtons
              shareUrl={`https://planetscale.com/news/${fields.slug}`}
              title={frontmatter.title}
            />
          )}
          {frontmatter.comments && (
            <>
              <Spacing />
              <ReactDisqusComments
                shortname="planetscale"
                title={frontmatter.title}
              />
            </>
          )}
        </Wrapper>
        <Spacing />
        <Footer
          backgroundImage={background}
          backgroundColor={'#302DEF'}
          overlay={overlay}
        />
      </>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        comments
        share
      }
    }
  }
`
