import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PageLayout } from './components/util/PageLayout'
import { SpCheck } from './components/util/SpCheck'
import { FAQPage } from './pages/faq'
import { HomePage } from './pages/home'
import { PractitionerPage } from './pages/pracitioner'
import { ServicePage } from './pages/service'
import { TestimonialsPage } from './pages/testimonials'

export function App() {
  return (
    <>
      <SpCheck>
        <Header />
        <PageLayout>
          <HomePage />
          <PractitionerPage />
          <TestimonialsPage />
          <FAQPage />
          <ServicePage />
        </PageLayout>
        <Footer />
      </SpCheck>
    </>
  )
}
