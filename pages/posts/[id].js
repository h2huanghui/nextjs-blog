import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
      </article>


      <br />
      {postData.id}
      <br />

      <br />
      {postData.date}
      <br />

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  //Return a list of possible value for id
  const paths = getAllPostIds()
  console.log("paths===", paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log("params===", params);
  const postData = await getPostData(params.id)
  //Fetch necessary data for the blog post using params.id
  return {
    props: {
      postData
    }
  }
}