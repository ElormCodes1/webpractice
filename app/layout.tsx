import './globals.css'
import {Inter} from 'next/font/google'
import {Analytics} from '@vercel/analytics/react';
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: "Elorm's web development projects.",
    description: 'These projects are from frontend mentor and I am using them to learn web development.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5WJ0EM90VM"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5WJ0EM90VM');
              `,
                }}
            />

            <script
                dangerouslySetInnerHTML={
                    {
                        __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "hy5lx23rap");`,
                    }}
            />
        </Head>
        <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
