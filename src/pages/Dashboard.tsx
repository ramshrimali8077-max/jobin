import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { Mail, Briefcase, Send, MessageSquare, FileText, Settings, LogOut, ArrowRight } from 'lucide-react';
import { useState } from 'react';

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
    switch (activeTab) {
      case 'Auto Agent (Beta)':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] text-center border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-100 via-white to-white" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Mail size={24} />
                </div>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3 tracking-[-0.01em]">Auto Agent Configuration</h2>
                <p className="text-[15px] leading-[1.65] text-gray-500 max-w-md mx-auto mb-8">
                  Tune your AI agent's aggressiveness, set daily application limits, and monitor live application status.
                </p>
              </div>
            </div>
          </div>
        );
      case 'Outreach Hub':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] text-center border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Send size={24} />
                </div>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3 tracking-[-0.01em]">Outreach Hub</h2>
                <p className="text-[15px] leading-[1.65] text-gray-500 max-w-md mx-auto mb-8">
                  Manage your active email campaigns, track open rates, and schedule follow-ups with recruiters.
                </p>
              </div>
            </div>
          </div>
        );
      case 'Reply Scanner':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] text-center border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <MessageSquare size={24} />
                </div>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3 tracking-[-0.01em]">Reply Scanner</h2>
                <p className="text-[15px] leading-[1.65] text-gray-500 max-w-md mx-auto mb-8">
                  AI-powered inbox scanner automatically categorizes recruiter responses and drafts suggested replies.
                </p>
              </div>
            </div>
          </div>
        );
      case 'Resume Manager':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] text-center border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <FileText size={24} />
                </div>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3 tracking-[-0.01em]">Resume Manager</h2>
                <p className="text-[15px] leading-[1.65] text-gray-500 max-w-md mx-auto mb-8">
                  Upload multiple resume versions and let the Auto Agent select the best match for each specific job description.
                </p>
              </div>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] text-center border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Settings size={24} />
                </div>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3 tracking-[-0.01em]">Account Settings</h2>
                <p className="text-[15px] leading-[1.65] text-gray-500 max-w-md mx-auto mb-8">
                  Manage your subscription, billing details, and Google Workspace integration.
                </p>
              </div>
            </div>
          </div>
        );
      case 'Dashboard':
      default:
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] text-center border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-100 via-white to-white" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-[20px] font-semibold text-gray-900 mb-3 tracking-[-0.01em]">Auto Agent is Standing By</h2>
                <p className="text-[15px] leading-[1.65] text-gray-500 max-w-md mx-auto mb-8">
                  Your profile has been configured successfully based on your onboarding answers. Job Mail Loop is ready to automate your outreach.
                </p>
                
                <div className="flex justify-center">
                  <button 
                    className="group bg-gray-900 text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-3 flex items-center gap-3 transition-colors duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                  >
                    <div className="overflow-hidden h-[20px] flex flex-col justify-start text-left w-[140px]">
                      <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Start First Campaign</span>
                      <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] leading-[20px]">Start First Campaign</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] -rotate-45 group-hover:rotate-0 shrink-0">
                      <ArrowRight size={14} className="text-gray-900" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-10 shadow-sm relative shrink-0">
        <Link to="/" className="p-6 flex items-center gap-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer block">
          <img src="/logo-icon.png" alt="Logo" className="h-10 w-auto object-contain mix-blend-multiply shrink-0" />
          <span className="font-semibold text-[16px] text-gray-900 tracking-tight">Job Mail Loop</span>
        </Link>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                activeTab === item.name
                  ? 'bg-gray-900 text-white shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-4 px-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[13px] font-medium text-gray-900 border border-gray-200">
              {displayUser.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-gray-900 truncate">{displayUser.email}</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2 text-[14px] font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative p-8 lg:p-12">
        <header className="mb-10 max-w-4xl mx-auto">
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium tracking-[-0.03em] text-gray-900">{activeTab}</h1>
          <p className="text-[15px] text-gray-500 mt-2">Welcome to your Job Mail Loop workspace.</p>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}
