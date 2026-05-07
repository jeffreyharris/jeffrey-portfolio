"use client";

import { useState } from "react";

export default function ContactSection() {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);

const [errors, setErrors] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = event.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const validateForm = () => {
  const newErrors = {
    name: "",
    email: "",
    message: "",
  };

  if (!formData.name.trim()) {
    newErrors.name = "Please enter your name.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Please enter a message.";
  }

  setErrors(newErrors);

  return !newErrors.name && !newErrors.email && !newErrors.message;
};

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    setSubmitted(false);
    return;
  }

  setIsSubmitting(true);
  setSubmitted(false);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
  const errorData = await response.json();
  console.error("Contact form API error:", errorData);
  throw new Error(errorData.error || "Failed to send message.");
}

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setSubmitted(false);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
  <section id="contact" className="relative isolate overflow-hidden text-white">
    {/* Bottom-right warm moving gradient background */}
    <div className="pointer-events-none absolute bottom-[-120px] right-[80px] -z-10 h-[420px] w-[900px] max-w-[100vw] animate-contact-gradient bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.24),transparent_35%),radial-gradient(circle_at_55%_70%,rgba(251,191,36,0.16),transparent_32%),radial-gradient(circle_at_85%_100%,rgba(255,255,255,0.06),transparent_40%)]" />

    {/* Fade into page background */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />

    <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-[#f59e0b]/10 lg:p-10">
        {/* Subtle orange edge glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_85%_100%,rgba(245,158,11,0.18),transparent_38%)]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold">Let’s connect.</h2>

            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              Need help with a responsive marketing site, CMS build, or modern front-end project? 
              Send me a message with this form.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              You can also find me on LinkedIn or GitHub. Thanks for visiting my portfolio!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/jeffreyharrisdotme"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm text-white transition hover:border-white/35 hover:bg-white/5"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/jeffreyharris"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm text-white transition hover:border-white/35 hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-2">
  <label htmlFor="name" className="text-sm font-medium text-white/70">
    Name
  </label>

  <input
    id="name"
    name="name"
    type="text"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your name"
    aria-invalid={Boolean(errors.name)}
    aria-describedby={errors.name ? "name-error" : undefined}
    className={`rounded-2xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:bg-white/[0.06] ${
      errors.name
        ? "border-red-400/70 focus:border-red-400"
        : "border-white/10 focus:border-amber-400/70"
    }`}
  />

  {errors.name && (
    <p id="name-error" className="text-sm text-red-300">
      {errors.name}
    </p>
  )}
</div>

            <div className="grid gap-2">
  <label htmlFor="email" className="text-sm font-medium text-white/70">
    Email
  </label>

  <input
    id="email"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="you@example.com"
    aria-invalid={Boolean(errors.email)}
    aria-describedby={errors.email ? "email-error" : undefined}
    className={`rounded-2xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:bg-white/[0.06] ${
      errors.email
        ? "border-red-400/70 focus:border-red-400"
        : "border-white/10 focus:border-amber-400/70"
    }`}
  />

  {errors.email && (
    <p id="email-error" className="text-sm text-red-300">
      {errors.email}
    </p>
  )}
</div>

            <div className="grid gap-2">
  <label htmlFor="message" className="text-sm font-medium text-white/70">
    Message
  </label>

  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Tell me about your project..."
    rows={5}
    aria-invalid={Boolean(errors.message)}
    aria-describedby={errors.message ? "message-error" : undefined}
    className={`resize-none rounded-2xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:bg-white/[0.06] ${
      errors.message
        ? "border-red-400/70 focus:border-red-400"
        : "border-white/10 focus:border-amber-400/70"
    }`}
  />

  {errors.message && (
    <p id="message-error" className="text-sm text-red-300">
      {errors.message}
    </p>
  )}
</div>

            <button
  type="submit"
  disabled={isSubmitting}
  className="w-fit rounded-2xl bg-[#f59e0b] px-5 py-3 text-sm font-medium text-black transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSubmitting ? "Sending..." : "Send message"}
</button>

            {submitted && (
              <p className="text-sm text-amber-300">
                Thanks! Your message has been captured.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  </section>
);
}