"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    if (!trimmedFullName || !trimmedEmail || !trimmedMessage) {
      setError("Please complete Full Name, Email, and Message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: trimmedFullName,
          email: trimmedEmail,
          phone: trimmedPhone,
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data?.error || "Unable to send your message right now. Please try again.");
        return;
      }

      setSuccess("Thank you. Your message has been sent.");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setError("Unable to send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-zinc-200 py-20 text-zinc-900">
      <div className="mx-auto max-w-5xl px-6">
        <section className="rounded-2xl border border-zinc-300 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="flex w-full shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:w-72 md:min-h-[240px]">
              <Image
                src="/ShiningBlue_logo.png"
                alt="Shining Blue Investigations logo"
                width={400}
                height={400}
                className="h-auto w-auto max-h-[440px] max-w-[440px] object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Christopher J. Suarez
              </h1>
              <p className="mt-2 text-lg text-zinc-700">
                Licensed Private Investigator
              </p>
              <p className="mt-1 text-zinc-700">Shining Blue Investigations, LLC</p>
              <div className="mt-5 flex flex-col gap-2 text-zinc-800 sm:flex-row sm:gap-8">
                <p>
                  <span className="font-medium">Phone:</span> 269-306-0356
                </p>
                <p>
                  <span className="font-medium">Email:</span> chriss1@shining-blue.com
                </p>
              </div>
              <p className="mt-4 text-sm text-zinc-600">Integrity • Discretion • Results</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-nowrap">
                <a
                  href="tel:2693060356"
                  className="inline-flex rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  Call Now
                </a>
              </div>

              <p className="mt-5 text-sm text-zinc-600">Serving South West Michigan.</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-zinc-300 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Send a Message</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Do not include sensitive details. If this is an emergency, call 911.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-zinc-800">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 outline-none ring-zinc-400 focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 outline-none ring-zinc-400 focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-800">
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 outline-none ring-zinc-400 focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 outline-none ring-zinc-400 focus:ring-2"
              />
            </div>

            {error ? <p className="text-sm text-red-700">{error}</p> : null}
            {success ? <p className="text-sm text-green-700">{success}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
