import Head from 'next/head'

export default function Header({ title }) {
  return (
    <Head>
      <title>{title}</title>
      {/* Matching og:title to the page title will make things easier */}
      <meta property="og:title" content="" />
      {/* Specific og:type's can be found here: https://ogp.me */}
      <meta property="og:type" content="website" />
      {/* Using router variables maybe useful for og:url */}
      <meta property="og:url" content="" />
      {/* Image can't be from a relative path. */}
      <meta property="og:image" content="" />
    </Head>
  )
}
