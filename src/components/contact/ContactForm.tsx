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

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Send us a message
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Fill out the form and our team will get back to you within 2 hours during business hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 animate-glow">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Share your details</h3>
                  <p className="text-slate-400">Tell us who you are and how we can reach you</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-fuchsia-500/30 animate-glow">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Describe your needs</h3>
                  <p className="text-slate-400">Let us know what you need help with or what questions you have</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 animate-glow">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Get expert support</h3>
                  <p className="text-slate-400">Our team will review and respond with personalized assistance</p>
                </div>
              </div>
            </div>

          </div>

          <div className="glass-purple rounded-3xl p-8 lg:p-10 border border-purple-500/30 shadow-xl shadow-purple-500/10 animate-glow">
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
                    className="w-full px-4 py-3 glass border border-purple-500/30 rounded-xl focus:border-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 transition-all text-white placeholder-slate-500"
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
                    className="w-full px-4 py-3 glass border border-purple-500/30 rounded-xl focus:border-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 transition-all text-white placeholder-slate-500"
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
                  className="w-full px-4 py-3 glass border border-purple-500/30 rounded-xl focus:border-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 transition-all text-white placeholder-slate-500"
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
                  className="w-full px-4 py-3 glass border border-purple-500/30 rounded-xl focus:border-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 transition-all text-white placeholder-slate-500"
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
                  className="w-full px-4 py-3 glass border border-purple-500/30 rounded-xl focus:border-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 transition-all text-white"
                >
                  <option value="" className="bg-slate-900">Select a subject</option>
                  <option value="investment" className="bg-slate-900">Investment Inquiry</option>
                  <option value="account" className="bg-slate-900">Account Support</option>
                  <option value="technical" className="bg-slate-900">Technical Issue</option>
                  <option value="partnership" className="bg-slate-900">Partnership Opportunity</option>
                  <option value="other" className="bg-slate-900">Other</option>
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
                  className="w-full px-4 py-3 glass border border-purple-500/30 rounded-xl focus:border-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 transition-all resize-none text-white placeholder-slate-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {success && (
                <div className="p-4 glass-purple border border-green-500/30 rounded-xl">
                  <p className="text-green-300 font-semibold">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              {error && (
                <div className="p-4 glass-purple border border-red-500/30 rounded-xl">
                  <p className="text-red-300 font-semibold">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/40 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed animate-glow"
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

              <p className="text-sm text-slate-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
