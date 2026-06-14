import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Simulate submission locally if the key is not defined or is a placeholder
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE" || accessKey.startsWith("0000")) {
      console.warn("Web3Forms: VITE_WEB3FORMS_ACCESS_KEY is not set. Simulating form submission.");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      reset();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `Portfolio Submission from ${data.name}`,
        }),
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Get in Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info (4 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Let's discuss a project</h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you have a vacancy in your team, need a financial dashboard engineered, 
                or just want to talk about frontend architecture — feel free to drop me a message.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <a 
                href="mailto:jsaisharath04@gmail.com"
                className="flex items-center gap-4 p-4 glass-panel rounded-xl border border-slate-800 hover:border-cyan-400/50 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-950/60 rounded-lg text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Email Me</span>
                  <span className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">jsaisharath04@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:9550616941"
                className="flex items-center gap-4 p-4 glass-panel rounded-xl border border-slate-800 hover:border-emerald-400/50 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-950/60 rounded-lg text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Call Me</span>
                  <span className="text-slate-200 font-medium group-hover:text-emerald-400 transition-colors">9550616941</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 glass-panel rounded-xl border border-slate-800 cursor-default">
                <div className="p-3 bg-slate-950/60 rounded-lg text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Location</span>
                  <span className="text-slate-200 font-medium">Bangalore, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/j-v-n-sai-sharath/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950/60 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-400/50 rounded-xl text-slate-400 hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" rx="1" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/saisharath04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950/60 hover:bg-white/5 border border-slate-800 hover:border-white/30 rounded-xl text-slate-400 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a 
                  href="https://wa.me/919550616941" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-950/60 hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-400/50 rounded-xl text-slate-400 hover:text-emerald-400 transition-all"
                  aria-label="WhatsApp Chat"
                >
                  {/* Custom SVG for WhatsApp */}
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.023-5.11-2.885-6.974C16.526 1.809 14.058.782 11.422.782c-5.443 0-9.87 4.43-9.873 9.865 0 1.639.429 3.236 1.244 4.638L1.825 21.5l6.417-1.684z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold text-slate-100 mb-6">Send Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    {...register("name")}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-slate-950/60 border rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.name ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-500 mt-1.5 flex items-center gap-1.5 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    {...register("email")}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 bg-slate-950/60 border rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                      errors.email ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-500 mt-1.5 flex items-center gap-1.5 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    {...register("message")}
                    placeholder="How can I help you?"
                    className={`w-full px-4 py-3 bg-slate-950/60 border rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.message ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-500 mt-1.5 flex items-center gap-1.5 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-bold rounded-xl text-[#0B0F19] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg hover:shadow-cyan-400/10 cursor-pointer transition-all disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Feedback Alerts */}
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-3 mt-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="block font-bold text-emerald-400 text-sm">Message Sent Successfully!</span>
                        <p className="text-slate-400 text-xs mt-0.5">Thank you, J V N Sai Sharath will get back to you shortly.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-3 mt-4"
                    >
                      <AlertCircle className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="block font-bold text-rose-400 text-sm">Failed to Send Message</span>
                        <p className="text-slate-400 text-xs mt-0.5">Please check your internet connection or email and try again.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
