import React, { useState } from "react";
import { Sparkles, Mail, Lock, User, Eye, EyeOff, CheckCircle2 } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (fullName: string, email: string) => void;
  defaultMode?: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, onAuthSuccess, defaultMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      const resolvedName = mode === "signup" ? fullName : email.split("@")[0];
      const displayName = resolvedName.charAt(0).toUpperCase() + resolvedName.slice(1);

      setTimeout(() => {
        onAuthSuccess(displayName, email);
        setSuccess(false);
        onClose();
        // Reset states
        setEmail("");
        setFullName("");
        setPassword("");
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-xs animate-fade-in" id="auth-modal-wrapper">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-border-gray overflow-hidden relative" id="auth-modal-card">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-navy-dark cursor-pointer z-10"
        >
          ✕
        </button>

        {/* Brand visual banner */}
        <div className="bg-navy-dark px-6 py-8 text-white relative text-center">
          <div className="inline-flex bg-brand-green text-white p-2 rounded-xl mb-3 items-center justify-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <h4 className="text-2xl font-display font-bold">
            {mode === "login" ? "Welcome Back to CVKaro" : "Create Your CVKaro Account"}
          </h4>
          <p className="text-xs text-white/70 mt-2 leading-relaxed" style={{ textAlign: "justify", textAlignLast: "justify" }}>
            {mode === "login" 
              ? "Sign in to access your saved resumes and learning paths." 
              : "Start building ATS-proof resumes and analyzing your skills today."}
          </p>
        </div>

        {/* Form area */}
        <div className="p-6 sm:p-8">
          {success ? (
            <div className="py-8 text-center animate-scale-up">
              <div className="inline-flex items-center justify-center bg-green-100 text-brand-green p-4 rounded-full mb-4">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h5 className="text-lg font-display font-bold text-navy-dark mb-1">
                Authentication Successful!
              </h5>
              <p className="text-xs text-text-muted px-4">
                Welcome {mode === "signup" ? fullName : "back"}! Unlocking your personal CVKaro Workspace dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {mode === "signup" && (
                <div>
                  <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-border-gray rounded-lg text-sm text-navy-dark focus:border-brand-green focus:outline-hidden bg-light-bg"
                    />
                    <User className="absolute left-3 top-2.5 h-4.5 w-4.5 text-text-muted" />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[10px] font-bold text-text-muted uppercase mb-1 block">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-border-gray rounded-lg text-sm text-navy-dark focus:border-brand-green focus:outline-hidden bg-light-bg"
                  />
                  <Mail className="absolute left-3 top-2.5 h-4.5 w-4.5 text-text-muted" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[10px] font-bold text-text-muted uppercase block">
                    Password
                  </label>
                  {mode === "login" && (
                    <a href="#reset" onClick={(e) => e.preventDefault()} className="text-[10px] text-brand-green hover:underline">
                      Forgot Password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-border-gray rounded-lg text-sm text-navy-dark focus:border-brand-green focus:outline-hidden bg-light-bg"
                  />
                  <Lock className="absolute left-3 top-2.5 h-4.5 w-4.5 text-text-muted" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-text-muted hover:text-navy-dark cursor-pointer focus:outline-hidden"
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-sm font-bold text-white bg-brand-green hover:bg-brand-green/90 rounded-xl shadow-md transition-all duration-300 mt-6 cursor-pointer flex items-center justify-center gap-2 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Credentials...</span>
                  </>
                ) : (
                  <span>{mode === "login" ? "Login to Workspace" : "Create Account"}</span>
                )}
              </button>

              {/* Mode Switcher */}
              <div className="text-center mt-6 text-xs text-text-muted border-t border-border-gray/55 pt-4">
                {mode === "login" ? (
                  <span>
                    New to CVKaro?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="text-brand-green font-bold hover:underline cursor-pointer"
                    >
                      Create Account
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="text-brand-green font-bold hover:underline cursor-pointer"
                    >
                      Login Here
                    </button>
                  </span>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
