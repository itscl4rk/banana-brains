import Footer from '@/components/Footer'; // Import the Footer component
import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar /> {/* Navbar at the top */}
            <div className="flex-1">
                <Outlet /> {/* This will render the nested route content */}
            </div>
            <Footer /> {/* Add Footer here */}
        </div>
    );
}
