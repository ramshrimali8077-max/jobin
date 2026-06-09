import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Mail, Briefcase, Send, MessageSquare, FileText, Settings, LogOut, ArrowRight, BarChart2 } from 'lucide-react';
import { useState, useEffect } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart)
      const easePercentage = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easePercentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export function Dashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Dashboard');

  const displayUser = user || { email: 'guest@example.com' };

  const navItems = [
    { name: 'Dashboard', icon: <Briefcase size={18} /> },
    { name: 'Auto Agent (Beta)', icon: <Mail size={18} /> },
    { name: 'Outreach Hub', icon: <Send size={18} /> },
    { name: 'Reply Scanner', icon: <MessageSquare size={18} /> },
    { name: 'Resume Manager', icon: <FileText size={18} /> },
    { name: 'Settings', icon: <Settings size={18} /> },
  ];

  const renderContent = () => {
    if (activeTab === 'Dashboard') {
      return (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          {/* STATS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-panel p-6 spotlight-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className="text-gray-400 font-medium">Active Campaigns</span>
                <Send size={20} className="text-accent-blue" />
              </div>
              <div className="relative z-10 text-4xl font-bold text-white mb-1"><AnimatedCounter end={3} /></div>
              <div className="relative z-10 text-[13px] text-accent-blue flex items-center gap-1">+1 this week</div>
            </div>

            <div className="glass-panel p-6 spotlight-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className="text-gray-400 font-medium">Emails Sent</span>
                <Mail size={20} className="text-accent-purple" />
              </div>
              <div className="relative z-10 text-4xl font-bold text-white mb-1"><AnimatedCounter end={142} /></div>
              <div className="relative z-10 text-[13px] text-accent-purple flex items-center gap-1">+28 today</div>
            </div>

            <div className="glass-panel p-6 spotlight-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-between mb-4">
                <span className="text-gray-400 font-medium">Interview Rate</span>
                <BarChart2 size={20} className="text-accent-cyan" />
              </div>
              <div className="relative z-10 text-4xl font-bold text-white mb-1"><AnimatedCounter end={12} />%</div>
              <div className="relative z-10 text-[13px] text-accent-cyan flex items-center gap-1">+4% from average</div>
            </div>
          </div>

          {/* MAIN CARD */}
          <div className="glass-panel p-8 sm:p-12 spotlight-border text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6 animate-pulse">
                <Briefcase size={28} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Auto Agent is Standing By</h2>
              <p className="text-[16px] leading-relaxed text-gray-400 max-w-lg mb-8">
                Your profile has been perfectly configured. The AI is ready to source contacts and automate your high-converting outreach sequence.
              </p>
              
              <button className="group relative bg-white text-primary text-[15px] font-bold rounded-full px-8 py-4 flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10">Start First Campaign</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-black opacity-10 group-hover:animate-shimmer" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Default Fallback for other tabs
    return (
      <div className="w-full max-w-4xl mx-auto glass-panel p-12 spotlight-border text-center">
        <h2 className="text-2xl font-bold text-white mb-4">{activeTab}</h2>
        <p className="text-gray-400">This section is currently being upgraded for Job Mail Loop 2.0.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex font-sans overflow-hidden">
      {/* NOISE TEXTURE */}
      <div className="fixed inset-0 z-0 noise-bg mix-blend-overlay pointer-events-none opacity-20"></div>

      {/* Sidebar */}
      <aside className="w-64 bg-white/[0.02] border-r border-white/5 flex flex-col z-20 backdrop-blur-xl shrink-0 hidden md:flex">
        <Link to="/" className="p-6 flex items-center gap-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer block">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center shadow-lg">
            <span className="text-white text-[10px] font-bold tracking-tight">JM</span>
          </div>
          <span className="font-semibold text-[16px] text-white tracking-tight">Job Mail Loop</span>
        </Link>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-300 ${
                activeTab === item.name
                  ? 'bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]' 
                  : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[13px] font-medium text-white border border-white/10">
              {displayUser.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-gray-300 truncate">{displayUser.email}</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2 text-[14px] font-medium text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10 p-6 sm:p-8 lg:p-12">
        <header className="mb-10 max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-white mb-2">{activeTab}</h1>
            <p className="text-[15px] text-gray-400">Welcome to your Job Mail Loop command center.</p>
          </div>
          <div className="hidden sm:block w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-white font-medium">{displayUser.email?.charAt(0).toUpperCase()}</span>
          </div>
        </header>

        {renderContent()}
      </main>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-6 inset-x-4 z-50">
        <nav className="glass-panel flex items-center justify-between p-2 pb-2 px-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 active:scale-90 relative ${activeTab === item.name ? 'text-accent-blue' : 'text-gray-400 hover:text-gray-200'}`}
            >
              {activeTab === item.name && <div className="absolute inset-0 bg-accent-blue/10 rounded-xl blur-md" />}
              <div className="relative z-10 mb-1">{item.icon}</div>
              <span className="text-[10px] font-medium relative z-10 line-clamp-1 truncate w-12 text-center">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
