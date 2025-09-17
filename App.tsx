
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './screens/Dashboard';
import ModuleDetail from './screens/ModuleDetail';
import Settings from './screens/Settings';
import { Company, User, ModuleData, View } from './types';
import { getInitialModules, getCompany, getUser } from './services/mockApi';
import { SGSPAM_ELEMENTS } from './constants';

const App: React.FC = () => {
    const [view, setView] = useState<View>({ name: 'dashboard' });
    const [company, setCompany] = useState<Company>(getCompany());
    const [user, setUser] = useState<User>(getUser());
    const [modules, setModules] = useState<ModuleData[]>([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchModules = async () => {
            const data = await getInitialModules();
            setModules(data);
        };
        fetchModules();
    }, []);

    const updateModuleProgress = useCallback((moduleId: number, newProgress: number) => {
        setModules(prevModules =>
            prevModules.map(m =>
                m.id === moduleId ? { ...m, progress: Math.min(100, newProgress), status: newProgress === 100 ? 'complete' : 'in-progress' } : m
            )
        );
    }, []);
    
    const addEvidenceToModule = useCallback((moduleId: number, evidence: { name: string; url: string; date: string }) => {
        setModules(prevModules =>
            prevModules.map(m => {
                if (m.id === moduleId) {
                    const updatedEvidences = [...m.evidences, evidence];
                    const newProgress = Math.min(100, m.progress + 15); // Add progress for adding evidence
                    return { 
                        ...m, 
                        evidences: updatedEvidences,
                        progress: newProgress,
                        status: newProgress === 100 ? 'complete' : 'in-progress'
                    };
                }
                return m;
            })
        );
    }, []);

    const appContextValue = useMemo(() => ({
        company,
        user,
        modules,
        setCompany,
        updateModuleProgress,
        addEvidenceToModule
    }), [company, user, modules, updateModuleProgress, addEvidenceToModule]);

    const renderContent = () => {
        switch (view.name) {
            case 'module':
                const module = SGSPAM_ELEMENTS.find(m => m.id === view.id);
                const moduleData = modules.find(m => m.id === view.id);
                if (module && moduleData) {
                    return <ModuleDetail module={module} data={moduleData} />;
                }
                return <div>Módulo no encontrado</div>;
            case 'settings':
                return <Settings />;
            case 'dashboard':
            default:
                return <Dashboard setView={setView} />;
        }
    };

    return (
        <AppProvider value={appContextValue}>
            <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <Sidebar setView={setView} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header setSidebarOpen={setSidebarOpen} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
