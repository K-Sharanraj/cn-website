import React from 'react'
import ContactSection from './_components/contact-section'
import Nav from '@/app/Home/nav'
import Footer from '@/app/Home/footer'


export default function Page() {
  return (
    <main>
      <Nav />
      <ContactSection />
      <Footer />
    </main>
  )
}
