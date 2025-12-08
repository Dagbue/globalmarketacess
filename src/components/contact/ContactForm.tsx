import { useState } from 'react';
import { Send, Loader2, CheckCircle2, User, Mail as MailIcon, Phone, MessageSquare } from 'lucide-react';

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

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

  const GlassmorphicInput = ({ icon: Icon, label, id, type = 'text', value, onChange, required = false, placeholder }: any) => (
    <div className="relative group">
      <label htmlFor={id} className="block text-sm font-bold text-[#00ccff] mb-3 uppercase tracking-wide">
        {label} {required && <span className="text-[#0080ff]">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Icon className={`w-5 h-5 transition-colors ${focusedField === id ? 'text-[#00ccff]' : 'text-slate-500'}`} />
        </div>
        <input
          type={type}
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          placeholder={placeholder}
          className="w-full pl-14 pr-6 py-4 rounded-2xl text-white placeholder-slate-500 transition-all duration-300 outline-none"
          style={{
            background: focusedField === id
              ? 'rgba(0, 128, 255, 0.08)'
              : 'rgba(0, 102, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            border: focusedField === id
              ? '2px solid rgba(0, 204, 255, 0.5)'
              : '1px solid rgba(0, 128, 255, 0.2)',
            boxShadow: focusedField === id
              ? '0 8px 32px 0 rgba(0, 204, 255, 0.2), inset 0 0 20px rgba(0, 204, 255, 0.1)'
              : '0 4px 16px 0 rgba(0, 102, 255, 0.1)'
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#0066ff]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#00ccff]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Drop Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">Message</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Fill out the form below and our team will respond within 60 seconds
          </p>
        </div>

        {/* Floating Form Container with Heavy Glassmorphism */}
        <div className="relative rounded-[2rem] p-1 animate-borderGlow">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff] opacity-50 blur-xl"></div>

          <div className="relative rounded-[2rem] p-12 lg:p-16" style={{
            background: 'rgba(0, 102, 255, 0.05)',
            backdropFilter: 'blur(40px)',
            border: '1px solid rgba(0, 204, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.2), inset 0 0 60px rgba(0, 204, 255, 0.08)'
          }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Fields - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                <GlassmorphicInput
                  icon={User}
                  label="First Name"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e: any) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  placeholder="John"
                />
                <GlassmorphicInput
                  icon={User}
                  label="Last Name"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e: any) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  placeholder="Doe"
                />
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <GlassmorphicInput
                  icon={MailIcon}
                  label="Email Address"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                />
                <GlassmorphicInput
                  icon={Phone}
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Subject Dropdown */}
              <div className="relative group">
                <label htmlFor="subject" className="block text-sm font-bold text-[#00ccff] mb-3 uppercase tracking-wide">
                  Subject <span className="text-[#0080ff]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <MessageSquare className={`w-5 h-5 transition-colors ${focusedField === 'subject' ? 'text-[#00ccff]' : 'text-slate-500'}`} />
                  </div>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-14 pr-6 py-4 rounded-2xl text-white transition-all duration-300 outline-none appearance-none cursor-pointer"
                    style={{
                      background: focusedField === 'subject'
                        ? 'rgba(0, 128, 255, 0.08)'
                        : 'rgba(0, 102, 255, 0.04)',
                      backdropFilter: 'blur(20px)',
                      border: focusedField === 'subject'
                        ? '2px solid rgba(0, 204, 255, 0.5)'
                        : '1px solid rgba(0, 128, 255, 0.2)',
                      boxShadow: focusedField === 'subject'
                        ? '0 8px 32px 0 rgba(0, 204, 255, 0.2), inset 0 0 20px rgba(0, 204, 255, 0.1)'
                        : '0 4px 16px 0 rgba(0, 102, 255, 0.1)'
                    }}
                  >
                    <option value="" className="bg-slate-900">Select a subject</option>
                    <option value="investment" className="bg-slate-900">Investment Inquiry</option>
                    <option value="account" className="bg-slate-900">Account Support</option>
                    <option value="technical" className="bg-slate-900">Technical Issue</option>
                    <option value="partnership" className="bg-slate-900">Partnership Opportunity</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <label htmlFor="message" className="block text-sm font-bold text-[#00ccff] mb-3 uppercase tracking-wide">
                  Your Message <span className="text-[#0080ff]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-6 py-4 rounded-2xl text-white placeholder-slate-500 resize-none transition-all duration-300 outline-none"
                  style={{
                    background: focusedField === 'message'
                      ? 'rgba(0, 128, 255, 0.08)'
                      : 'rgba(0, 102, 255, 0.04)',
                    backdropFilter: 'blur(20px)',
                    border: focusedField === 'message'
                      ? '2px solid rgba(0, 204, 255, 0.5)'
                      : '1px solid rgba(0, 128, 255, 0.2)',
                    boxShadow: focusedField === 'message'
                      ? '0 8px 32px 0 rgba(0, 204, 255, 0.2), inset 0 0 20px rgba(0, 204, 255, 0.1)'
                      : '0 4px 16px 0 rgba(0, 102, 255, 0.1)'
                  }}
                />
              </div>

              {/* Success/Error Messages */}
              {success && (
                <div className="p-6 rounded-2xl flex items-center space-x-3" style={{
                  background: 'rgba(0, 204, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 204, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(0, 204, 255, 0.2)'
                }}>
                  <CheckCircle2 className="w-6 h-6 text-[#00ccff]" />
                  <p className="text-[#00ccff] font-bold">Message sent successfully! We'll respond within 60 seconds.</p>
                </div>
              )}

              {error && (
                <div className="p-6 rounded-2xl" style={{
                  background: 'rgba(255, 0, 0, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 0, 0, 0.3)'
                }}>
                  <p className="text-red-300 font-semibold">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full px-8 py-6 rounded-2xl text-white font-black text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0066ff 0%, #0080ff 50%, #00ccff 100%)',
                  boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.4), 0 0 0 1px rgba(0, 204, 255, 0.2)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ccff] to-[#0066ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  {loading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>

              <p className="text-sm text-slate-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-borderGlow {
          animation: borderGlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
