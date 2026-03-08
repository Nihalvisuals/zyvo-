import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ChevronRight, 
  Layout, 
  Zap, 
  Shield, 
  Globe, 
  MessageSquare, 
  ShoppingBag,
  BarChart3,
  Users,
  Calendar,
  CreditCard,
  Truck,
  Database,
  Star,
  Bell,
  Settings,
  Menu,
  X,
  ArrowRight,
  Play,
  BookOpen,
  Utensils,
  LayoutDashboard,
  Package,
  Gift,
  QrCode,
  Store,
  Ticket,
  FileText,
  ClipboardList,
  UserCog,
  Target,
  Share2,
  Lightbulb,
  RefreshCw,
  GraduationCap,
  Network,
  Megaphone
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ZYVO_PRODUCTS, ZyvoProduct } from './constants';

// Initialize Gemini
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

// Icon mapping helper
const ProductIcon = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, any> = {
    Globe, MessageSquare, BookOpen, Utensils, LayoutDashboard, Package, Users, Gift, 
    Calendar, CreditCard, Bot, BarChart3, QrCode, Truck, ShoppingBag, Store, 
    Ticket, FileText, ClipboardList, UserCog, Target, Share2, Lightbulb, 
    RefreshCw, Star, GraduationCap, Network, Megaphone, Bell, Zap
  };
  const IconComponent = icons[name] || Layout;
  return <IconComponent className={className} />;
};

// Product Card Component for consistency
function ProductCard({ product }: { product: ZyvoProduct }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white border border-[#E2E8F0] rounded-2xl soft-shadow card-hover flex flex-col h-full p-8"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#E6F9F3] flex items-center justify-center shadow-sm">
          <ProductIcon name={product.iconName} className="w-6 h-6 text-[#00C896]" />
        </div>
        <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#E2E8F0]">
          #{product.id.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-black text-[#0F172A] mb-3 tracking-tight">{product.name}</h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-8 line-clamp-2 min-h-[2.5rem]">{product.description}</p>
        
        <div className="mb-8">
          <h4 className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest mb-4 flex items-center gap-2">
            <div className="w-1 h-3 bg-[#00C896] rounded-full" />
            Key Benefits
          </h4>
          <ul className="space-y-2.5">
            {product.benefits.slice(0, 4).map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                <Zap className="w-3.5 h-3.5 text-[#00C896] mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="mb-6">
            <h4 className="text-[10px] font-bold text-[#0F172A] uppercase tracking-widest mb-3">Estimated Price</h4>
            <div className="flex items-center gap-2 text-base font-bold text-[#0F172A] bg-[#F8FAFC] px-4 py-3 rounded-xl border border-[#E2E8F0]">
              <CreditCard className="w-4 h-4 text-[#00C896]" />
              {product.priceRange}
            </div>
          </div>

          <a 
            href={`https://wa.me/916374041042?text=Hello%20Zyvo,%20I%20want%20to%20build%20the%20${encodeURIComponent(product.name)}%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex py-4 bg-[#0F172A] text-white font-bold text-sm rounded-xl hover:bg-black transition-all items-center justify-center shadow-lg shadow-black/5 group"
          >
            Build This For My Business
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const model = "gemini-3-flash-preview";
      const productsList = ZYVO_PRODUCTS.map(p => `${p.id}. ${p.name}: ${p.description} (Benefits: ${p.benefits.join(', ')}, Estimated Price: ${p.priceRange})`).join('\n');
      
      const prompt = `
        You are the AI business advisor for Zyvo, a technology startup.
        Zyvo builds modern SaaS tools, AI automation systems, and digital platforms for SMBs.
        
        Visitor's Business Description: "${input}"
        
        Available Zyvo Products and Pricing:
        ${productsList}
        
        Your job is to:
        1. Understand the visitor's business.
        2. Recommend the best digital solution from the list above.
        3. Explain clearly what the product does.
        4. Explain the main benefits for the client.
        5. Provide the Estimated Project Price based on the list above.
        6. Keep the explanation simple and practical.
        
        Always respond in this EXACT format:
        
        Business Type:
        [Explain the type of business based on their description]
        
        Recommended Zyvo Product:
        [Suggest the best solution from the list]
        
        What This Product Does:
        [Explain what the system does]
        
        Main Benefits for the Client:
        [Explain how this improves sales, saves time, or grows the business]
        
        Estimated Project Price:
        [Display the recommended price range from the list above] (depending on features and customization)
        
        Tone: Friendly, modern, and professional. Explain that the final price depends on the features required.
      `;

      const response = await genAI.models.generateContent({
        model: model,
        contents: [{ parts: [{ text: prompt }] }],
      });

      setRecommendation(response.text || "Sorry, I couldn't generate a recommendation at this time.");
      
      // Scroll to result
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (err) {
      console.error(err);
      setError("An error occurred while analyzing your business. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatRecommendation = (text: string) => {
    const sections = text.split('\n\n');
    return sections.map((section, idx) => {
      const lines = section.split('\n');
      const title = lines[0];
      const content = lines.slice(1).join(' ');
      
      if (!title || title.toLowerCase().includes('tone')) return null;
      
      return (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="mb-8 last:mb-0"
        >
          <h3 className="text-[#00C896] font-display font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {title.replace(':', '')}
          </h3>
          <p className="text-[#475569] leading-relaxed text-lg">
            {content}
          </p>
        </motion.div>
      );
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#00C896] rounded-lg flex items-center justify-center shadow-lg shadow-[#00C896]/20">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-display font-black tracking-tighter text-[#0F172A]">ZYVO</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-semibold text-[#475569] hover:text-[#00C896] transition-colors">Products</a>
            <a href="#advisor" className="text-sm font-semibold text-[#475569] hover:text-[#00C896] transition-colors">AI Advisor</a>
            <a href="#" className="text-sm font-semibold text-[#475569] hover:text-[#00C896] transition-colors">Solutions</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/916374041042" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#E6F9F3] text-[#00C896] text-sm font-bold rounded-full hover:bg-[#D1F2E8] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </a>
            <button className="px-6 py-2.5 bg-[#00C896] text-white text-sm font-bold rounded-full hover:bg-[#00B084] transition-all shadow-lg shadow-[#00C896]/20">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center mb-32 py-12 relative hero-gradient">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F9F3] border border-[#00C896]/20 text-[#00C896] text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Bot className="w-4 h-4" />
              AI-Powered Business Growth
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-black tracking-tight mb-8 leading-[1.1] text-[#0F172A]"
            >
              Welcome to <span className="text-[#00C896]">ZYVO</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#0F172A] text-2xl md:text-3xl font-bold max-w-4xl mx-auto leading-tight mb-8"
            >
              We are here to help your business grow, automate operations, and increase profit using modern websites, SaaS tools, and AI-powered digital solutions.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#475569] text-lg max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Zyvo helps local businesses and startups build powerful digital systems such as business websites, online ordering platforms, management dashboards, and AI automation tools.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <a 
                href="#advisor"
                className="w-full sm:w-auto px-10 py-4 bg-[#00C896] text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#00B084] transition-all shadow-xl shadow-[#00C896]/20"
              >
                Analyze My Business <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/916374041042?text=Hello%20Zyvo,%20I%20want%20to%20build%20a%20digital%20solution%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-white text-[#0F172A] font-bold rounded-xl border border-[#E2E8F0] flex items-center justify-center gap-3 hover:bg-[#F8FAFC] transition-all shadow-sm"
              >
                <MessageSquare className="w-5 h-5 text-[#00C896]" />
                Chat on WhatsApp
              </a>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#64748B] text-sm font-medium mb-12"
            >
              Serving local businesses with AI-powered digital solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[#E2E8F0] max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-2 text-[#475569]">
                <div className="w-8 h-8 rounded-full bg-[#E6F9F3] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-[#00C896]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#94A3B8]">Phone / WhatsApp</p>
                  <p className="text-sm font-bold">+91 6374041042</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#475569]">
                <div className="w-8 h-8 rounded-full bg-[#E6F9F3] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#00C896]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#94A3B8]">Location</p>
                  <p className="text-sm font-bold">Vaniyambadi, Tamil Nadu, India</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* How Zyvo Helps Your Business Grow Section */}
          <section className="mb-32 py-16 bg-white rounded-3xl border border-[#E2E8F0] soft-shadow overflow-hidden">
            <div className="max-w-6xl mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#0F172A] mb-4">
                  How Zyvo Helps Your Business Grow
                </h2>
                <p className="text-[#475569] text-lg max-w-3xl mx-auto">
                  We help local businesses go digital, attract more customers, and increase profit using modern websites, SaaS tools, and automation.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative lg:max-w-[500px]"
                >
                  <div className="absolute -inset-4 bg-[#E6F9F3] rounded-full blur-3xl opacity-50" />
                  <div className="relative z-10 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 soft-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
                      alt="Zyvo digital expert helping a business owner with analytics" 
                      className="w-full h-auto rounded-xl shadow-inner"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative elements to simulate the illustration style */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00C896]/10 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00C896]/5 rounded-full blur-2xl animate-pulse" />
                </motion.div>

                <div className="space-y-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#E6F9F3] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Globe className="w-7 h-7 text-[#00C896]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#0F172A] mb-2">Grow Your Business Online</h3>
                      <p className="text-[#475569] leading-relaxed">
                        We build modern websites that help customers find your business on Google.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#E6F9F3] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Zap className="w-7 h-7 text-[#00C896]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#0F172A] mb-2">Automate Your Operations</h3>
                      <p className="text-[#475569] leading-relaxed">
                        Our SaaS tools manage orders, customers, and products automatically.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#E6F9F3] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-7 h-7 text-[#00C896]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#0F172A] mb-2">Increase Sales and Profit</h3>
                      <p className="text-[#475569] leading-relaxed">
                        Digital tools help you attract more customers and grow your revenue.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Business Advisor Section */}
          <section id="advisor" className="max-w-4xl mx-auto mb-32">
            <div className="glass-panel p-8 md:p-12 soft-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C896]/5 blur-3xl rounded-full -mr-32 -mt-32" />
              
              <form onSubmit={handleAnalyze} className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#E6F9F3] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-[#00C896]" />
                  </div>
                  <label className="text-sm font-bold text-[#0F172A] uppercase tracking-widest">
                    Describe your business
                  </label>
                </div>
                
                <div className="space-y-6">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Example: I run a leather shop and want more online orders."
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 text-lg text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#00C896]/20 focus:border-[#00C896] transition-all min-h-[160px] resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="w-full md:w-auto px-10 py-4 bg-[#00C896] text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#00B084] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-[#00C896]/20"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Analyze Business <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl mt-6 flex items-center gap-3"
                >
                  <X className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Result Section */}
            <div ref={resultRef} className="mt-12">
              <AnimatePresence>
                {recommendation && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-8 md:p-12 border-[#00C896]/20 soft-shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00C896] to-transparent" />
                    <div className="relative z-10">
                      {formatRecommendation(recommendation)}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <h4 className="font-display font-bold text-xl text-[#0F172A] mb-1">Ready to scale?</h4>
                        <p className="text-[#475569] text-sm">Our experts are ready to implement this solution for you.</p>
                      </div>
                      <a 
                        href="https://wa.me/916374041042?text=Hello%20Zyvo,%20I%20want%20to%20build%20this%20solution%20for%20my%20business.%20Please%20tell%20me%20the%20next%20steps."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-8 py-4 bg-[#0F172A] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-all group shadow-xl shadow-black/10"
                      >
                        Build This For My Business <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-[#0F172A] mb-4">Our Digital Solutions</h2>
              <p className="text-[#475569] text-lg max-w-2xl mx-auto">Explore our range of specialized SaaS products designed for modern businesses.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {ZYVO_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Products Drawer removed for standardization */}
      <AnimatePresence>
        {/* Drawer logic removed */}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#F1F5F9] py-20 px-6 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="text-[#00C896] w-6 h-6 fill-current" />
                <span className="text-2xl font-display font-black tracking-tighter text-[#0F172A]">ZYVO</span>
              </div>
              <p className="text-[#0F172A] font-bold mb-2">AI Powered Digital Business Solutions</p>
              <p className="text-[#475569] max-w-sm leading-relaxed mb-4">
                Empowering small and medium businesses with enterprise-grade digital solutions. We build the future of local commerce.
              </p>
              <div className="space-y-2 text-sm text-[#475569]">
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#00C896]" />
                  Location: Vaniyambadi, Tamil Nadu
                </p>
                <p className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#00C896]" />
                  WhatsApp: +91 6374041042
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] mb-6">Company</h4>
              <ul className="space-y-4 text-[#475569]">
                <li><a href="#" className="hover:text-[#00C896] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#00C896] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#00C896] transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0F172A] mb-6">Support</h4>
              <ul className="space-y-4 text-[#475569]">
                <li><a href="#" className="hover:text-[#00C896] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#00C896] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#00C896] transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[#64748B] text-sm">© 2026 Zyvo Technologies. All rights reserved.</span>
            <div className="flex gap-8">
              <a href="#" className="text-[#64748B] hover:text-[#00C896] transition-colors">Twitter</a>
              <a href="#" className="text-[#64748B] hover:text-[#00C896] transition-colors">LinkedIn</a>
              <a href="#" className="text-[#64748B] hover:text-[#00C896] transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
