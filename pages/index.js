import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Josh Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="JOSH" />
        <p className="description">
          Get started by clicking our contact page:
          <Link href="/contact">
            <a>Click here!!!!</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
