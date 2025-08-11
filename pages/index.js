import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Generated from '../components/Generated'
import Pricing from '../components/Pricing'
import EmailCapture from '../components/EmailCapture'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>NameForge — AI Startup & Product Namer</title>
        <meta name="description" content="Generate brandable startup names and taglines instantly with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-black text-lightText min-h-screen">
        <HeroSection />
        <main>
          <Generated />
          <Pricing />
          <EmailCapture />
        </main>
        <Footer />
      </div>
    </>
  )
}
