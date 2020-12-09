import Head from 'next/head'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'h2'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return <div>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='description'
        content='Learn how to build a personal website using Next.js'
      />
      <meta property='og:title' content={siteTitle} />
    </Head>
    <header>
      {
        home ? (
          <>
            <img src='/images/logo.png'
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
            <>
              <Link href='/'>
                <a>
                  <img
                    src='/images/logo.png'
                  />
                </a>
              </Link>
              <h2>
                <Link href='/'>
                  <a>{name}</a>
                </Link>
              </h2>
            </>
          )
      }
    </header>
    <main> {children}</main>
    {
      !home && (
        <div>
          <Link href='/'>
            <a>Back to  home</a>
          </Link>
        </div>
      )
    }
  </div>
}