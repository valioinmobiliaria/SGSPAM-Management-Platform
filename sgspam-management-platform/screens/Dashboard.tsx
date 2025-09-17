import React from 'react';
import { useAppContext } from '../context/AppContext';
import { SGSPAM_ELEMENTS } from '../constants';
import { View } from '../types';
import KpiCard from '../components/dashboard/KpiCard';
import ModuleCard from '../components/dashboard/ModuleCard';
import TasksList from '../components/dashboard/TasksList';

interface DashboardProps {
    setView: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
    const { modules } = useAppContext();

    const overallProgress = modules.length > 0 ? modules.reduce((acc, m) => acc + m.progress, 0) / modules.length : 0;
    const completedModules = modules.filter(m => m.status === 'complete').length;
    const pendingTasks = 5; // Mock data

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">Dashboard General</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                <KpiCard title="Progreso General SGSPAM" value={`${overallProgress.toFixed(1)}%`} icon="progress" />
                <KpiCard title="Elementos Completados" value={`${completedModules} / 16`} icon="completed" />
                <KpiCard title="Tareas Pendientes" value={String(pendingTasks)} icon="tasks" />
                <KpiCard title="Próxima Auditoría" value="30/08/2024" icon="audit" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Estado de los Elementos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SGSPAM_ELEMENTS.map(moduleInfo => {
                            const moduleData = modules.find(m => m.id === moduleInfo.id);
                            if (!moduleData) return null;
                            return <ModuleCard key={moduleInfo.id} moduleInfo={moduleInfo} moduleData={moduleData} setView={setView} />;
                        })}
                    </div>
                </div>
                <div>
                    <TasksList />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
