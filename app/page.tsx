import fs from 'fs';
import path from 'path';
import { type ReactNode } from 'react';

async function getStaticHTML(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'index.html');
    const html = fs.readFileSync(filePath, 'utf-8');
    return html;
  } catch (error) {
    console.error('Error reading HTML file:', error);
    return '<html><body><h1>SPA Booking Wireframes</h1></body></html>';
  }
}

export default async function Home(): Promise<ReactNode> {
  const htmlContent = await getStaticHTML();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      suppressHydrationWarning
    />
  );
}
