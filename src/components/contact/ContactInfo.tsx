import { Mail, MapPin, Clock, MessageCircle, Phone, Headphones } from 'lucide-react';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message and we\'ll respond within 2 hours during business hours.',
      action: { type: 'link', text: 'support@marketsignaltrades.com', href: 'mailto:support@marketsignaltrades.com' }
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers from our support team through our live chat feature.',
      action: { type: 'button', text: 'Start chatting now' }
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      description: 'Meet us in person at our London headquarters. Schedule your visit in advance.',
      action: { type: 'text', text: '75 Uxbridge Rd, London W5 5SL, England UK' }
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: null,
      action: { type: 'hours' }
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0a0e27]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Multiple Ways to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">
              Reach Us
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Choose the communication method that works best for you. We're here to help however you prefer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-xl blur-xl"></div>
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-xl p-8 border border-slate-800/50 group-hover:border-blue-800/50 transition-all h-full">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>

                  {method.description && (
                    <p className="text-slate-400 mb-6">
                      {method.description}
                    </p>
                  )}

                  {method.action.type === 'link' && (
                    <a
                      href={method.action.href}
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      {method.action.text}
                    </a>
                  )}

                  {method.action.type === 'button' && (
                    <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                      {method.action.text}
                    </button>
                  )}

                  {method.action.type === 'text' && (
                    <div className="text-white font-semibold">
                      {method.action.text}
                    </div>
                  )}

                  {method.action.type === 'hours' && (
                    <div className="space-y-3 text-slate-400">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday:</span>
                        <span className="font-semibold text-white">Closed</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Headphones className="w-5 h-5" />
                          <span className="font-semibold">24/7 Emergency Support Available</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-slate-800/50">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              For urgent matters or account-related emergencies, our priority support team is available 24/7.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30">
                <MessageCircle className="w-5 h-5" />
                <span>Start Live Chat</span>
              </button>
              <button className="inline-flex items-center gap-2 px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-slate-700/50">
                <Phone className="w-5 h-5" />
                <span>Emergency Line</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
