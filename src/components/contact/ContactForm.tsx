import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { title: 'Share Your Details', desc: 'Tell us who you are and how we can reach you' },
    { title: 'Describe Your Needs', desc: 'Let us know what you need help with or what questions you have' },
    { title: 'Get Expert Support', desc: 'Our team will review and respond with personalized assistance' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Fill out the form and our team will get back to you within 2 hours during business hours.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                  <div className="relative flex items-start gap-4 p-4 bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-800/50 group-hover:border-blue-800/50 transition-all">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="account">Account Support</option>
                  <option value="technical">Technical Issue</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {success && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-semibold">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 font-semibold">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-600/30"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-sm text-slate-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
