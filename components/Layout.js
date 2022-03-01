import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Exa | Futbol</title>
        <meta
          name='description'
          content={`App para crear torneos de fútbol para exa's`}
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='bg-gray-200 min-h-screen'>
        <div className='container mx-auto'>
          <div className='mx-auto'>
            <Header />
            <main className='mt-5'>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
