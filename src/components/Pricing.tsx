import React, { useState } from "react";
import { Check, Info, Sparkles, CreditCard, ChevronRight, CheckCircle2, AlertTriangle, X } from "lucide-react";
import { PRICING_TIERS } from "../data";
import { PricingTier } from "../types";

interface PricingProps {
  onPlanSelect: (plan: PricingTier, billingCycle: "monthly" | "quarterly" | "yearly") => void;
}

export default function Pricing({ onPlanSelect }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<PricingTier | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiry, setCardExpiry] = useState<string>("");
  const [cardCvc, setCardCvc] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      setSelectedPlan(null);
      // Clear fields
      setCardNumber("");
      setCardExpiry("");
      setCardCvc("");
      setNameOnCard("");
    }, 3000);
  };

  const getPriceDisplay = (tier: PricingTier) => {
    if (tier.priceMonthly === 0) return { prefix: "", amount: "₹0", period: "" };
    
    let price: number;
    let period: string;
    
    if (billingCycle === "monthly") {
      price = tier.priceMonthly;
      period = tier.priceSuffixMonthly || "/ mo";
    } else if (billingCycle === "quarterly") {
      price = tier.priceQuarterly;
      period = tier.priceSuffixQuarterly || " / 3 mos";
    } else {
      price = tier.priceYearly;
      period = tier.priceSuffixYearly || "/ yr";
    }

    const prefix = tier.pricePrefix || "";
    
    return {
      prefix: prefix,
      amount: `₹${price.toLocaleString('en-IN')}`,
      period: period
    };
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" id="pricing-header">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
            PLANS & PRICING
          </div>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-navy-dark tracking-tight mb-4">
            Choose the Plan That Fits Your Career Goals
          </h3>
          <p className="text-base sm:text-lg text-text-muted">
            Start with Career Discovery for free and upgrade as you prepare for internships, placements, and your professional career.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="flex justify-center mt-8" id="billing-switcher">
            <div className="bg-light-bg p-1 rounded-full border border-border-gray inline-flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                  billingCycle === "monthly" 
                    ? "bg-navy-dark text-white shadow-md" 
                    : "text-text-muted hover:text-navy-dark"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                  billingCycle === "quarterly" 
                    ? "bg-navy-dark text-white shadow-md" 
                    : "text-text-muted hover:text-navy-dark"
                }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  billingCycle === "yearly" 
                    ? "bg-navy-dark text-white shadow-md" 
                    : "text-text-muted hover:text-navy-dark"
                }`}
              >
                Yearly
                <span className="bg-brand-green/20 text-brand-green text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Save
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16" id="pricing-grid">
          {PRICING_TIERS.map((tier) => {
            const isPro = tier.isPopular;
            const priceInfo = getPriceDisplay(tier);
            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border relative ${
                  isPro
                    ? "border-brand-green bg-white shadow-xl scale-102 lg:scale-105 z-10"
                    : "border-border-gray bg-white hover:border-brand-green/20 hover:shadow-lg"
                }`}
              >
                {/* Popularity Badge */}
                {isPro && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-navy-dark text-xs font-black px-4 py-1.5 rounded-full tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="h-3 w-3 fill-navy-dark" />
                    MOST POPULAR
                  </span>
                )}

                <div>
                  <div className="min-h-[180px] flex flex-col">
                    {/* Plan Name */}
                    <h4 className="font-display font-bold text-xl text-navy-dark mb-2">
                      {tier.name}
                    </h4>
                    <p className="text-xs text-text-muted mb-5 grow">
                      {tier.description}
                    </p>

                    {/* Price display */}
                    <div className="flex flex-col border-b border-border-gray pb-6 min-h-[100px] justify-end">
                      {priceInfo.prefix && (
                        <span className="text-xs text-text-muted font-semibold mb-1">
                          {priceInfo.prefix}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-display font-extrabold text-navy-dark tracking-tight">
                          {priceInfo.amount}
                        </span>
                        <span className="text-xs text-text-muted font-medium">
                          {priceInfo.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8 mt-6">
                    {tier.features.map((feature, i) => {
                      const icon = <Check className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />;
                      const textClass = "text-text-primary font-medium leading-relaxed";

                      return (
                        <li key={i} className="flex items-start gap-2.5 text-xs">
                          {icon}
                          <span className={textClass}>
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to action */}
                <button
                  onClick={() => {
                    setSelectedPlan(tier);
                    onPlanSelect(tier, billingCycle);
                  }}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer mt-auto ${
                    isPro
                      ? "bg-brand-green text-navy-dark hover:brightness-110 shadow-lg shadow-brand-green/20"
                      : "bg-light-bg text-navy-dark border border-border-gray hover:bg-border-gray/35 hover:border-text-muted/30"
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Informative bottom footer */}
        <div className="text-left" id="pricing-guarantee">
          <p className="text-xs text-text-muted inline-flex items-center gap-1.5 bg-light-bg px-4 py-2 rounded-full border border-border-gray/60">
            <Info className="h-4 w-4 text-brand-green shrink-0" />
            Need help choosing the right plan? Our team is here to guide you.
          </p>
        </div>

      </div>

      {/* Dynamic Checkout Simulator Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-border-gray overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-navy-dark p-6 text-white relative">
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white cursor-pointer"
              >
                ✕
              </button>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider block mb-1">
                CVKaro Checkout
              </span>
              <h4 className="text-xl font-display font-bold">
                Subscribe to {selectedPlan.name}
              </h4>
              <p className="text-xs text-white/70 mt-1">
                Amount due: <span className="text-brand-green font-bold text-sm">{getPriceDisplay(selectedPlan).prefix}{getPriceDisplay(selectedPlan).amount}</span> {getPriceDisplay(selectedPlan).period}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {checkoutComplete ? (
                <div className="py-8 text-left animate-scale-up">
                  <div className="inline-flex items-center justify-center bg-green-100 text-brand-green p-4 rounded-full mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h5 className="text-lg font-display font-bold text-navy-dark mb-1">
                    Payment Successful!
                  </h5>
                  <p className="text-xs text-text-muted px-4">
                    Thank you for subscribing to CVKaro {selectedPlan.name}. Your pro features are now unlocked! Loading sandbox...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider block">
                    Simulated Credit Card Payment
                  </span>
                  
                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={nameOnCard}
                      onChange={(e) => setNameOnCard(e.target.value)}
                      className="w-full px-3 py-2 border border-border-gray rounded-lg text-sm text-navy-dark focus:border-brand-green focus:outline-hidden bg-light-bg"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="4111 2222 3333 4444"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-border-gray rounded-lg text-sm text-navy-dark focus:border-brand-green focus:outline-hidden bg-light-bg font-mono"
                      />
                      <CreditCard className="absolute left-3 top-2.5 h-4.5 w-4.5 text-text-muted" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                        Expiration
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-2 border border-border-gray rounded-lg text-sm text-navy-dark focus:border-brand-green focus:outline-hidden bg-light-bg font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                        CVC
                      </label>
                      <input
                        type="password"
                        maxLength={3}
                        required
                        placeholder="•••"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full px-3 py-2 border border-border-gray rounded-lg text-sm text-navy-dark focus:border-brand-green focus:outline-hidden bg-light-bg font-mono"
                      />
                    </div>
                  </div>

                  <div className="border-t border-border-gray pt-4 mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan(null)}
                      className="w-1/2 py-2.5 text-sm font-semibold text-text-primary border border-border-gray hover:bg-light-bg rounded-lg cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 py-2.5 text-sm font-bold text-white bg-brand-green hover:bg-brand-green/90 rounded-lg shadow-sm cursor-pointer flex items-center justify-center gap-1"
                    >
                      Pay Now
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <p className="text-[10px] text-text-muted text-left italic">
                    Note: This is a secure sandbox transaction simulation. No real money will be charged.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
