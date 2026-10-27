import type { CSSProperties, ReactNode } from 'react';

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface SocialLink extends LinkItem {
  icon: string;
}

export interface ButtonLink {
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: LinkItem[];
  callLabel: string;
  phone: string;
  phoneUrl: string;
  cta: ButtonLink;
  menuOpenLabel: string;
  menuCloseLabel: string;
}

export interface HeroStat {
  id: string;
  value: string;
  label: string;
}

export interface HeroData {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryButton: ButtonLink;
  secondaryButton: ButtonLink;
  image: string;
  imageAlt: string;
  serviceLabel: string;
  serviceValue: string;
  stats: HeroStat[];
}

export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  experienceValue: string;
  experienceLabel: string;
  features: AboutFeature[];
  button: ButtonLink;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  linkLabel: string;
  url: string;
}

export interface ServicesData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface WhyChooseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: WhyChooseItem[];
  ctaLabel: string;
  ctaValue: string;
  ctaUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  phoneUrl: string;
  linkedinUrl: string;
}

export interface TeamData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  members: TeamMember[];
  phoneLabel: string;
  linkedinLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  avatarAlt: string;
}

export interface TestimonialsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ratingLabel: string;
  testimonials: TestimonialItem[];
}

export interface ContactField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

export interface SelectOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactDetail {
  id: string;
  icon: string;
  label: string;
  value: string;
  url: string;
}

export interface ContactUsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  details: ContactDetail[];
  formTitle: string;
  formDescription: string;
  fields: ContactField[];
  serviceLabel: string;
  servicePlaceholder: string;
  serviceOptions: SelectOption[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: LinkItem[];
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  description: string;
  columns: FooterColumn[];
  socialLabel: string;
  socialLinks: SocialLink[];
  copyright: string;
  legalText: string;
}

export interface NotFoundData {
  id: string;
  code: string;
  title: string;
  description: string;
  button: ButtonLink;
}

export interface GlobalUIData {
  loadingText: string;
}

export interface SiteMetadataData {
  title: string;
  description: string;
}

export interface ThemeData {
  fontFamily: string;
  fontStylesheet: string;
}

export interface ThemeStyle extends CSSProperties {
  '--font-primary': string;
  '--font-heading': string;
}

export interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  fade?: boolean;
}

export interface Variant<T> {
  variants: Record<string, T>;
}

export interface PageComponentEntry {
  id: string;
  key: string;
  component: string;
}

export interface PageDefinition {
  components: PageComponentEntry[];
}

export interface HomeOneTemplateData {
  common: {
    globalUI: GlobalUIData;
    siteMetadata: SiteMetadataData;
    theme: ThemeData;
    Footer: Variant<FooterData>;
  };
  categories: {
    HomeOne: {
      sections: {
        Header: Variant<HeaderData>;
        Hero: Variant<HeroData>;
        AboutUs: Variant<AboutUsData>;
        Services: Variant<ServicesData>;
        WhyChooseUs: Variant<WhyChooseUsData>;
        Team: Variant<TeamData>;
        Testimonials: Variant<TestimonialsData>;
        ContactUs: Variant<ContactUsData>;
        NotFound: Variant<NotFoundData>;
      };
    };
  };
  pages: {
    home: PageDefinition;
    notFound: PageDefinition;
  };
}

