import React, { useState } from 'react';
import LinkCard from './components/LinkCard';
import { SocialLinkData, ProfileData } from './types';
import { ShareIcon, CheckIcon, VerifiedIcon } from './components/Icons';

// --- Configuration Data ---
const PROFILE: ProfileData = {
  name: "PT. Crystal Biru Meuligo",
  tagline: "Excellence in Service & General Trading",
  avatarUrl: "https://picsum.photos/id/193/300/300", // Using a professional looking architectural/blue placeholder
};

const LINKS: SocialLinkData[] = [
  {
    id: '1',
    label: 'Visit Our Office',
    description: 'Find us on Google Maps',
    url: 'https://maps.google.com/?q=PT+Crystal+Biru+Meuligo', // Placeholder query
    iconType: 'maps',
  },
  {
    id: '2',
    label: 'Instagram',
    description: '@crystalbiru.official',
    url: 'https://instagram.com',
    iconType: 'instagram',
  },
  {
    id: '3',
    label: 'TikTok',
    description: 'Follow our daily updates',
    url: 'https://tiktok.com',
    iconType: 'tiktok',
  },
  {
    id: '4',
    label: 'Facebook',
    description: 'Join our community',
    url: 'https://facebook.com',
    iconType: 'facebook',
  },
  {
    id: '5',
    label: 'YouTube Channel',
    description: 'Watch our latest projects',
    url: 'https://youtube.com',
    iconType: 'youtube',
  },
];

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: PROFILE.name,
        text: PROFILE.tagline,
        url: url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Container */}
      <main className="relative max-w-lg mx-auto min-h-screen flex flex-col items-center px-6 py-12">
        
        {/* Share Button (Top Right) */}
        <button 
          onClick={handleShare}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group z-10 border border-white/10"
          aria-label="Share profile"
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 text-green-400" />
          ) : (
            <ShareIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center w-full mb-10 animate-fade-in z-10">
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-28 h-28 rounded-full p-1 bg-slate-900">
              <img 
                src={PROFILE.avatarUrl} 
                alt={PROFILE.name} 
                className="w-full h-full rounded-full object-cover border-2 border-slate-800"
              />
            </div>
            {/* Verified Badge */}
            <div className="absolute bottom-1 right-1 bg-white rounded-full p-0.5" title="Verified Business">
               <VerifiedIcon className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-white text-center mb-2 tracking-wide flex items-center gap-2">
            {PROFILE.name}
          </h1>
          <p className="text-blue-200 text-center text-sm font-medium tracking-wide max-w-xs leading-relaxed">
            {PROFILE.tagline}
          </p>
        </div>

        {/* Links Grid */}
        <div className="w-full space-y-4 z-10 pb-12">
          {LINKS.map((link, index) => (
            <LinkCard key={link.id} data={link} index={index} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-auto py-6 text-center z-10 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-slate-400 text-xs font-light">
            © {new Date().getFullYear()} PT. Crystal Biru Meuligo. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;