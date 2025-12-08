import { Mail, MapPin, Clock, MessageCircle, Zap, Shield } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-[#0080ff]/10 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-[#00ccff]/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Choose Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0080ff] to-[#00ccff]">
              Preferred Channel
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Multiple ways to connect with us. Pick the one that works best for you.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Large Featured Card - Email */}
          <div className="lg:col-span-2 lg:row-span-2 group relative rounded-3xl p-12 transition-all duration-500 hover:-translate-y-2" style={{
            background: 'rgba(0, 102, 255, 0.05)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 128, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
          }}>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1), transparent 70%)'
            }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-3xl mb-8 shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Mail className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-4xl font-black text-white mb-4">Email Support</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Send us a detailed message and receive a comprehensive response from our expert support team. Perfect for complex inquiries and detailed discussions.
              </p>

              <a
                href="mailto:support@marketsignaltrades.com"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 group/btn" style={{
                  background: 'rgba(0, 128, 255, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 204, 255, 0.3)',
                  boxShadow: '0 4px 16px 0 rgba(0, 102, 255, 0.2)'
                }}
              >
                <span className="text-[#00ccff]">support@marketsignaltrades.com</span>
                <Zap className="w-5 h-5 text-[#00ccff] group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center space-x-2 mt-6 text-[#0080ff]">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-semibold">Response within 60 seconds</span>
              </div>
            </div>
          </div>

          {/* Live Chat Card */}
          <div className="group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2" style={{
            background: 'rgba(0, 128, 255, 0.05)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 204, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 128, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
          }}>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1), transparent 70%)'
            }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl mb-6 shadow-lg shadow-[#0080ff]/30 group-hover:scale-110 transition-all duration-500">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-black text-white mb-3">Live Chat</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Get instant answers through our real-time chat system.
              </p>

              <button className="inline-flex items-center space-x-2 text-[#00ccff] font-bold hover:text-white transition-colors group/link">
                <span>Start chatting</span>
                <Zap className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-[#00ccff] rounded-full animate-pulse"></div>
                <span className="text-xs text-[#0080ff] font-semibold uppercase tracking-wide">Online Now</span>
              </div>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2" style={{
            background: 'rgba(0, 102, 255, 0.05)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 128, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
          }}>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1), transparent 70%)'
            }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066ff] to-[#0080ff] rounded-2xl mb-6 shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 transition-all duration-500">
                <Clock className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-black text-white mb-4">24/7 Available</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between py-2" style={{
                  borderBottom: '1px solid rgba(0, 128, 255, 0.1)'
                }}>
                  <span className="text-slate-400 font-medium">Monday - Sunday</span>
                  <span className="text-white font-bold">24 Hours</span>
                </div>
                <div className="flex items-center justify-between py-2" style={{
                  borderBottom: '1px solid rgba(0, 128, 255, 0.1)'
                }}>
                  <span className="text-slate-400 font-medium">Holidays</span>
                  <span className="text-[#00ccff] font-bold">Always Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Location - Full Width Card */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="group relative rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2" style={{
            background: 'rgba(0, 102, 255, 0.05)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 128, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
          }}>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1), transparent 70%)'
            }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0080ff] to-[#00ccff] rounded-2xl mb-6 shadow-lg shadow-[#0080ff]/30 group-hover:scale-110 transition-all duration-500">
                <MapPin className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-black text-white mb-4">Visit Our Office</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Meet us in person at our headquarters. Schedule your visit in advance for personalized assistance.
              </p>

              <div className="space-y-2 text-[#00ccff] font-semibold">
                <p>75 Uxbridge Rd</p>
                <p>London W5 5SL</p>
                <p>England, United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2" style={{
            background: 'rgba(0, 128, 255, 0.05)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 204, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 128, 255, 0.15), inset 0 0 40px rgba(0, 204, 255, 0.08)'
          }}>
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 204, 255, 0.1), transparent 70%)'
            }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-2xl mb-6 shadow-lg shadow-[#0066ff]/30 group-hover:scale-110 transition-all duration-500">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-black text-white mb-4">Secure Communication</h3>
              <p className="text-slate-300 leading-relaxed">
                All communications are encrypted and secure. Your privacy and data security are our top priorities. We use industry-leading encryption standards to protect your information.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl p-12 overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
          backdropFilter: 'blur(40px)',
          border: '1px solid rgba(0, 204, 255, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.2), inset 0 0 60px rgba(0, 204, 255, 0.1)'
        }}>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 204, 255, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-xl text-[#00ccff] mb-8 max-w-2xl mx-auto">
              Our priority support team is standing by 24/7 for urgent matters and account emergencies.
            </p>
            <button className="inline-flex items-center space-x-3 px-10 py-5 rounded-2xl text-white font-black text-lg transition-all duration-300 hover:scale-105" style={{
              background: 'linear-gradient(135deg, #0066ff 0%, #0080ff 50%, #00ccff 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 102, 255, 0.4)'
            }}>
              <MessageCircle className="w-6 h-6" />
              <span>Start Live Chat</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
