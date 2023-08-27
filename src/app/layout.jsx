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
                <div className="main">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}