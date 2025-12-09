export interface SocialLinkData {
  id: string;
  label: string;
  url: string;
  iconType: 'youtube' | 'instagram' | 'facebook' | 'tiktok' | 'maps' | 'whatsapp' | 'website';
  description?: string;
  customColor?: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  avatarUrl: string;
  websiteUrl?: string;
}