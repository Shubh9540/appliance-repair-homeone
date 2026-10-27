import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import { HomeOneTemplateData, ThemeStyle } from '@/types/templates.types';
import './globals.css';

const templateData: HomeOneTemplateData = rawData;
const themeStyle: ThemeStyle = {
  '--font-primary': templateData.common.theme.fontFamily,
  '--font-heading': templateData.common.theme.fontFamily,
};

export const metadata: Metadata = {
  title: templateData.common.siteMetadata.title,
  description: templateData.common.siteMetadata.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={templateData.common.theme.fontStylesheet} />
      </head>
      <body style={themeStyle} className="font-sans antialiased">{children}</body>
    </html>
  );
}
