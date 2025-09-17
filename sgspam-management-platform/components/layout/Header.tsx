import React from 'react';
import { useAppContext } from '../../context/AppContext';

interface HeaderProps {
    setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
    const { user } = useAppContext();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="relative mx-4 lg:mx-0">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <input className="w-32 sm:w-64 form-input pl-10 pr-4 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-300 dark:focus:border-gray-600 focus:ring-0 text-sm" type="text" placeholder="Buscar módulo..." />
                </div>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <button className="flex items-center text-sm focus:outline-none">
                        <div className="flex flex-col items-end mr-3">
                            <span className="font-semibold text-gray-800 dark:text-white">{user.name}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{user.role}</span>
                        </div>
                        <img className="h-8 w-8 rounded-full object-cover" src={`https://i.pravatar.cc/150?u=${user.name}`} alt="Your avatar" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
