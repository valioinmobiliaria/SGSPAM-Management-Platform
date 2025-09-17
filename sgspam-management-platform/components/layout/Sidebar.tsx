
import React from 'react';
import { SGSPAM_ELEMENTS } from '../../constants';
import { View } from '../../types';
import { useAppContext } from '../../context/AppContext';

interface SidebarProps {
    setView: (view: View) => void;
    isSidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setView, isSidebarOpen, setSidebarOpen }) => {
    const { company } = useAppContext();

    const handleNavigation = (view: View) => {
        setView(view);
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    const navLinkClasses = "flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200";
    const activeNavLinkClasses = "bg-gray-200 dark:bg-gray-700";

    const iconDashboard = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    );
     const iconSettings = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );

    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            <aside className={`absolute lg:relative inset-y-0 left-0 bg-white dark:bg-gray-800 shadow-xl w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col`}>
                <div className="flex items-center justify-center px-4 py-5 border-b border-gray-200 dark:border-gray-700">
                    <img src={company.logoUrl} alt="Company Logo" className="h-10 w-10 rounded-full object-cover" />
                    <h1 className="ml-3 text-lg font-bold text-gray-800 dark:text-white truncate">{company.name}</h1>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                    <button onClick={() => handleNavigation({ name: 'dashboard' })} className={`${navLinkClasses} w-full text-left`}>
                        {iconDashboard}
                        Dashboard
                    </button>
                    <div className="pt-2">
                        <span className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Elementos SGSPAM</span>
                        <div className="mt-2 space-y-1">
                            {SGSPAM_ELEMENTS.map(module => (
                                <button key={module.id} onClick={() => handleNavigation({ name: 'module', id: module.id })} className={`${navLinkClasses} w-full text-left text-sm`}>
                                    <span className="mr-3 h-5 w-5 text-center font-semibold text-gray-500 dark:text-gray-400">{module.id}</span>
                                    {module.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
                <div className="px-2 py-4 border-t border-gray-200 dark:border-gray-700">
                     <button onClick={() => handleNavigation({ name: 'settings' })} className={`${navLinkClasses} w-full text-left`}>
                        {iconSettings}
                        Configuración
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
