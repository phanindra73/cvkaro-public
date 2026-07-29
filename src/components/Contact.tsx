import React, { useState } from "react";
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface SavedMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedMessages, setSavedMessages] = useState<SavedMessage[]>([
    {
      name: "Saurabh Sharma",
      email: "saurabh@example.com",
      subject: "B2B integration query",
      message: "Hi CVKaro team, we would like to know if we can purchase 100 student licenses for our engineering bootcamp program. Looking forward to your pricing matrix.",
      timestamp: "10 mins ago"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const newMessage: SavedMessage = {
        name,
        email,
        subject,
        message,
        timestamp: "Just now"
      };

      setSavedMessages([newMessage, ...savedMessages]);

      // Reset Form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => {
        setIsSuccess(false);
      }, 3500);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-light-bg border-y border-border-gray/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mx-auto mb-12 sm:mb-16" id="contact-header">
          <h2 className="text-xs font-bold text-brand-green tracking-widest uppercase mb-3">Support Center</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            Get In Touch With CVKaro
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            Have questions about student templates, enterprise whitelabelling, or API integrations? We are happy to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12" id="contact-grid">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-col">
            <div className="space-y-8">
              <h4 className="text-2xl font-display font-bold text-navy-dark tracking-tight mb-4">
                Let's Talk Career Growth
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Our support desk is active 24 hours a day, Monday through Friday, responding to billing queries, template requests, and technical troubleshooting support tickets.
              </p>

              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/15 text-brand-green p-3 rounded-xl shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-dark uppercase tracking-wider">General & Support</div>
                    <a href="mailto:hello@cvkaro.com" className="text-sm text-text-muted hover:text-brand-green transition-colors font-medium">
                      hello@cvkaro.com
                    </a>
                  </div>
                </div>

                {/* Telephone Info */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/15 text-brand-green p-3 rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-dark uppercase tracking-wider">Support Hot line</div>
                    <span className="text-sm text-text-muted font-medium">
                      +91 9963484971
                    </span>
                  </div>
                </div>

                {/* Corporate Address Info */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/15 text-brand-green p-3 rounded-xl shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-dark uppercase tracking-wider">Headquarters</div>
                    <span className="text-sm text-text-muted font-medium leading-relaxed">
                      25-12-271, Velama Sangham Street, Lakeview Colony, RTC Quarters, Police Colony, Nellore, Andhra Pradesh 524004
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Message Sandbox View (Shows messages submitted by user immediately) */}
            <div className="bg-white rounded-2xl border border-border-gray p-5 mt-12 shadow-xs">
              <div className="flex items-center justify-between mb-4 border-b border-border-gray/55 pb-3">
                <span className="text-[10px] font-bold text-navy-dark tracking-wider uppercase flex items-center gap-1.5">
                  <span className="h-2 w-2 bg-brand-green rounded-full animate-ping" />
                  Live Support Queue
                </span>
                <span className="text-[10px] text-text-muted font-mono">{savedMessages.length} Messages logged</span>
              </div>

              <div className="space-y-4 max-h-[160px] overflow-y-auto pr-1">
                {savedMessages.map((msg, idx) => (
                  <div key={idx} className="bg-light-bg rounded-xl p-3 text-xs border border-border-gray/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-navy-dark">{msg.name}</span>
                      <span className="text-[9px] text-text-muted">{msg.timestamp}</span>
                    </div>
                    <div className="text-[10px] text-brand-green font-semibold mb-1 line-clamp-1">{msg.subject}</div>
                    <p className="text-[10px] text-dark-gray leading-normal italic line-clamp-2">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border-gray shadow-md">
              <h4 className="text-xl font-display font-bold text-navy-dark mb-1">
                Send Us A Direct Message
              </h4>
              <p className="text-xs text-text-muted mb-8">
                Your messages will post instantly in our Live Support Queue widget below so you can verify the functional state.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-border-gray rounded-xl focus:border-brand-green focus:outline-hidden text-navy-dark bg-light-bg/50"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-border-gray rounded-xl focus:border-brand-green focus:outline-hidden text-navy-dark bg-light-bg/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                    Subject Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Inquiry about pricing/features"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 text-sm border border-border-gray rounded-xl focus:border-brand-green focus:outline-hidden text-navy-dark bg-light-bg/50"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1.5 block">
                    Detailed Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you need help with..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 text-sm border border-border-gray rounded-xl focus:border-brand-green focus:outline-hidden text-navy-dark bg-light-bg/50 resize-none"
                  />
                </div>

                <div className="pt-2">
                  {isSuccess ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3.5 rounded-xl flex items-center gap-3 animate-scale-up">
                      <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0" />
                      <div>
                        <span className="font-bold block text-sm">Message Transmitted!</span>
                        <span className="text-xs text-green-600">Your message has been posted to our simulated support logs below successfully.</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3.5 px-6 font-bold text-navy-dark bg-brand-green hover:brightness-110 rounded-xl shadow-lg shadow-brand-green/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
