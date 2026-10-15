import { useState, type FormEvent } from "react"
import type { SharedPageProps } from "../types"
import SectionTitle from "../components/ui/SectionTitle"
import Button from "../components/ui/Button"
import Footer from "../components/layout/Footer"
import { Check, Download } from "../components/Icons"
import { cvUrl } from "../constants"
import emailjs from "@emailjs/browser"

export default function Contact({ setPage }: SharedPageProps) {
  const [sent, setSent] = useState(false)
  const submit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Reset previous messages
  setErrorMessage("");
  setSent(false);
  const form = new FormData(e.currentTarget);
  const name = (form.get("name") as string || "").trim();
  const email = (form.get("email") as string || "").trim();
  const subject = (form.get("subject") as string || "").trim();
  const message = (form.get("message") as string || "").trim();
  if (!name || !email || !subject || !message) {
    setErrorMessage("Please complete all fields before sending your message.");
    return;
  }
    // Use EmailJS to send the form data.
    const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string)?.trim();
    const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string)?.trim();
    const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string)?.trim();
    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("Email service not configured. Please set EmailJS environment variables.");
      return;
    }
    console.log('Submitting EmailJS', {serviceId, templateId, name, email, subject});
    const formElement = e.currentTarget as HTMLFormElement;
    emailjs
      .send(serviceId, templateId, { name, email, subject, message }, publicKey)
      .then((result) => {
        console.log('EmailJS send succeeded', result);
        setSent(true);
        setErrorMessage("");
        formElement.reset();
      })
      .catch((err) => {
        console.error('EmailJS send failed', err);
        setErrorMessage("Failed to send message. Please try again later.");
        setSent(false);
      });
  }

  const field =
    "w-full border-b border-border bg-transparent py-3 text-sm outline-none placeholder:text-stone-400 focus:border-foreground";
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <>
      <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20 lg:py-20">
        <SectionTitle
          eyebrow="Contact"
          title="Let's discuss your next project."
          detail="Open to construction project management, site management, project coordination, and construction delivery opportunities across the UK."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="space-y-7 text-sm">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                  Email
                </p>
                <a
                  href="mailto:prashamdhoke159@gmail.com"
                  className="mt-2 block hover:underline"
                >
                  prashamdhoke159@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/prasham-dhoke-947669363/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block break-all hover:underline"
                >
                  linkedin.com/in/prasham-dhoke-947669363
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                  Location
                </p>
                <p className="mt-2">Belfast, Northern Ireland, UK</p>
              </div>
            </div>

            <a
              href={cvUrl}
              download="Prasham-Dhoke-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-foreground px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background"
            >
              <Download size={15} /> Download CV
            </a>
          </div>

          <form
            onSubmit={submit}
            noValidate
            className="lg:col-span-7 lg:col-start-6"
          >
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                Name
                <input name="name" className={field} placeholder="Your name" />
              </label>

              <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                Email
                <input
                  name="email"
                  type="email"
                  className={field}
                  placeholder="Your email"
                />
              </label>

              <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted sm:col-span-2">
                Subject
                <input
                  name="subject"
                  className={field}
                  placeholder="How can I help?"
                />
              </label>

              <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted sm:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className={`${field} resize-none`}
                  placeholder="Tell me about the opportunity or project."
                />
              </label>
            </div>

            {errorMessage && (
              <p className="mt-5 border-l-2 border-foreground pl-3 text-sm" role="alert">
                {errorMessage}
              </p>
            )}

            {sent && (
              <p className="mt-5 flex items-center gap-2 text-sm" role="status">
                <Check size={16} /> Thank you — your message is ready to be
                sent.
              </p>
            )}

            <Button type="submit" className="mt-8">
              Send message
            </Button>
          </form>
        </div>
      </main>
      <Footer setPage={setPage} />
    </>
  )
}
