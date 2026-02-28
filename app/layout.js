import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';

export const metadata= {
    title: "Art Inspo Prompt",
    description: "Prompts to draw from",
}

export default function RootLayout({children}){
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}