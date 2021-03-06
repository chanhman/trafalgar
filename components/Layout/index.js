import Head from 'components/Head'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function Layout({ title, children }) {
  return (
    <>
      <Head title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
