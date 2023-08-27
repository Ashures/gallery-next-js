import Navbar from './Navbar.jsx';
import './globals.css';

export const metadata = {
    title: 'Gallery - Ashures',
    description: 'Gallery made by Ashures',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="main">
                    {children}
                </div>
            </body>
        </html>
    );
}