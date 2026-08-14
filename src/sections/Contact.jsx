import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { CONTACT, PROFILE } from '../data/portfolio.js';

const initialForm = { name: '', email: '', subject: '', message: '' };
const initialErrors = {};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) errors.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!form.message.trim()) errors.message = 'Please enter a message.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  const fieldClass = (name) =>
    `w-full rounded-lg border bg-ink-soft px-4 py-3 text-sm text-paper placeholder:text-muted/50 transition-colors focus:outline-none ${
      errors[name] ? 'border-accent' : 'border-ink-line focus:border-muted'
    }`;

  const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    form.subject || 'Portfolio message from ' + (form.name || 'a visitor'),
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <section id="contact" className="border-t border-ink-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Contact" title={CONTACT.heading} description={CONTACT.description} />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-xl border border-ink-line bg-ink-card p-6">
                <h3 className="text-sm font-semibold text-paper">Direct channels</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="break-all text-muted transition-colors hover:text-paper"
                    >
                      {PROFILE.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted transition-colors hover:text-paper"
                    >
                      {PROFILE.githubLabel}
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Prefer email? Use the form and I'll get back to you — or write to me directly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-paper">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 text-xs text-accent">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-paper">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-xs text-accent">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-paper">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  className={fieldClass('subject')}
                />
                {errors.subject && (
                  <p role="alert" className="mt-1.5 text-xs text-accent">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-paper">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  className={`${fieldClass('message')} resize-y`}
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-xs text-accent">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitted ? (
                <div
                  role="status"
                  className="rounded-lg border border-ink-line bg-ink-card p-5 text-sm leading-relaxed text-muted"
                >
                  Your message is ready. Email delivery isn't configured on this site yet, so open
                  the link below and send from your own email client:
                  <a
                    href={mailtoLink}
                    className="mt-2 block break-all font-medium text-accent hover:underline"
                  >
                    Compose email →
                  </a>
                </div>
              ) : (
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c93c41]"
                >
                  Send Message
                </button>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}