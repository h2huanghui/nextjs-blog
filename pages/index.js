import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostData } from '../lib/posts'
// import utilStyles from '../styles/utils.module.css'

// export async function getStaticProps() {
//   const allPostsData = getSortedPostData()
//   // console.log("allPostsData1==", allPostsData)
//   return {
//     props: {
//       allPostsData
//     }
//   }

// }

export async function getStaticProps() {
  const allPostsData = await getSortedPostData();
  console.log("allPostsData1==", allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section>
      <ul>
        {
          allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))
        }

        {/* <li>{allPostsData.userName}</li> */}
      </ul>
      <p>I'm a frontEnd enginer.</p>
    </section>
  </Layout>
)



export default Home
