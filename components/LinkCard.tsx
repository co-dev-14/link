import React from 'react';
import { SocialLinkData } from '../types';
import { 
  InstagramIcon, 
  FacebookIcon, 
  YoutubeIcon, 
  TiktokIcon, 
  MapPinIcon,
  ExternalLinkIcon
} from './Icons';

interface LinkCardProps {
  data: SocialLinkData;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ data, index }) => {
  const getIcon = () => {
    const classes = "w-6 h-6 group-hover:scale-110 transition-transform duration-300";
    switch (data.iconType) {
      case 'instagram': return <InstagramIcon className={classes} />;
      case 'facebook': return <FacebookIcon className={classes} />;
      case 'youtube': return <YoutubeIcon className={classes} />;
      case 'tiktok': return <TiktokIcon className={classes} />;
      case 'maps': return <MapPinIcon className={classes} />;
      default: return <ExternalLinkIcon className={classes} />;
    }
  };

  const getGradient = () => {
    switch (data.iconType) {
      case 'instagram': return 'hover:from-purple-600 hover:to-pink-600';
      case 'youtube': return 'hover:from-red-600 hover:to-red-700';
      case 'facebook': return 'hover:from-blue-600 hover:to-blue-700';
      case 'tiktok': return 'hover:from-black hover:to-gray-800';
      case 'maps': return 'hover:from-green-600 hover:to-green-700';
      default: return 'hover:from-blue-500 hover:to-cyan-500';
    }
  };

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center p-4 mb-4 
        bg-white/10 backdrop-blur-md border border-white/20 
        rounded-2xl shadow-lg transition-all duration-300 
        hover:scale-[1.02] hover:shadow-2xl overflow-hidden
        animate-slide-up
        bg-gradient-to-r ${getGradient()} hover:border-transparent
      `}
      style={{ 
        animationDelay: `${index * 100 + 300}ms`,
        animationFillMode: 'backwards' 
      }}
    >
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon Container */}
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white/20 transition-colors">
        {getIcon()}
      </div>

      {/* Text Content */}
      <div className="ml-4 flex-grow min-w-0">
        <h3 className="font-semibold text-white text-lg truncate pr-2 group-hover:text-white transition-colors">
          {data.label}
        </h3>
        {data.description && (
          <p className="text-xs text-blue-200 truncate group-hover:text-blue-100 transition-colors">
            {data.description}
          </p>
        )}
      </div>

      {/* Arrow Indicator */}
      <div className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </a>
  );
};

export default LinkCard;