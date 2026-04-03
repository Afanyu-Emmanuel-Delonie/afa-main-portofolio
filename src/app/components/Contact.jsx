import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CalendarDays, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import Reveal from './Reveal.jsx';

const interests = ['Web Development', 'Mobile App', 'Consultation', 'Collaboration', 'Full-time Role'];
const inputClass = 'w-full px-4 py-3 bg-zinc-900 border border-zinc-800 focus:border-[#F59E0B]/50 rounded-xl text-white placeholder-zinc-600 outline-none transition-colors duration-300';
const EMPTY = { name: '', email: '', phone: '', interest: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const body = new URLSearchParams({
        name: form.name, email: form.email, phone: form.phone,
        interest: form.interest, message: form.message,
      });
      await fetch('https://script.google.com/macros/s/AKfycbyl2nwFwgvfxs6JxzOAawXI4jlvLPybv4gmSNdVOODmN3fPAlfvIx4eY2sKuUJ3ECis/exec', {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-container padding-container section-padding">
        <Reveal className="text-center mb-16">
          <h2 className="section-title mb-3">Let's <span className="text-brand">Connect</span></h2>
          <p className="section-subtitle">Have a project in mind? I'd love to hear about it.</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-2 space-y-8">
            <p className="body-md text-zinc-400">
              Whether it's a new product, a freelance gig, or just a conversation — reach out via any channel below or fill in the form and I'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'aemmanueldelonie@gmail.com', href: 'mailto:aemmanueldelonie@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+250 798 971 739', href: 'tel:+250798971739' },
                { icon: MapPin, label: 'Location', value: 'Rwanda', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flexStart gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flexCenter">
                    <Icon className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="body-sm text-zinc-300 hover:text-brand transition-colors">{value}</a>
                      : <span className="body-sm text-zinc-300">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="card-darker p-6 space-y-3">
              <div className="flexStart gap-3">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flexCenter">
                  <CalendarDays className="w-4 h-4 text-brand" />
                </div>
                <div>
                  <p className="body-sm font-semibold text-white">Prefer a quick call?</p>
                  <p className="text-xs text-zinc-500">Book a free 30-min meeting</p>
                </div>
              </div>
              <a href="https://calendly.com/aemmanueldelonie/30min" target="_blank" rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#F59E0B]/40 text-brand hover:bg-[#F59E0B]/10 rounded-xl body-sm font-semibold transition-all duration-300">
                <CalendarDays className="w-4 h-4" /> Book on Calendly
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block body-sm text-zinc-400 mb-1.5">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                </div>
                <div>
                  <label className="block body-sm text-zinc-400 mb-1.5">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block body-sm text-zinc-400 mb-1.5">Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 234 567 890" className={inputClass} />
                </div>
                <div>
                  <label className="block body-sm text-zinc-400 mb-1.5">I'm interested in</label>
                  <select name="interest" value={form.interest} onChange={handleChange} required className={`${inputClass} text-zinc-400`}>
                    <option value="" disabled>Select an option</option>
                    {interests.map((item) => <option key={item} value={item}>{item}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block body-sm text-zinc-400 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project, idea, or just say hi..." required rows={6} className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" disabled={status === 'loading'}
                className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]">
                {status === 'loading'
                  ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  : <><Send className="w-4 h-4" /> Send Message</>
                }
              </button>

              {status === 'success' && (
                <div className="flexStart gap-3 px-5 py-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  <p className="body-sm text-green-400">Message sent! I'll get back to you within 24 hours.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flexStart gap-3 px-5 py-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <p className="body-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
