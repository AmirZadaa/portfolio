

import Address from "./Address"
import ContactForm from "./ContactForm"

export default function ContactUs() {
  return (
    <div id = "contact" className="container mx-auto mt-10 px-10 py-10 space-y-10 max-sm:px-2 ">
      <h1 className="text-4xl font-bold  text-primary-600 text-center">Contact Us</h1>
      <div className="flex gap-10 max-lg:flex-col">
      <ContactForm/>
      <Address/>
      </div>
    </div>
  )
}


