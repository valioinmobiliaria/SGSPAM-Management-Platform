import React from 'react';
import { Module, ModuleData, View } from '../../types';

interface ModuleCardProps {
    moduleInfo: Module;
    moduleData: ModuleData;
    setView: (view: View) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ moduleInfo, moduleData, setView }) => {
    const statusClasses: { [key: string]: { bg: string; text: string; ring: string } } = {
        complete: { bg: 'bg-green-100 dark:bg-green-900', text: 'text-green-800 dark:text-green-200', ring: 'ring-green-500' },
        'in-progress': { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-800 dark:text-yellow-200', ring: 'ring-yellow-500' },
        pending: { bg: 'bg-red-100 dark:bg-red-900', text: 'text-red-800 dark:text-red-200', ring: 'ring-red-500' },
    };
    
    const statusText: { [key: string]: string } = {
        complete: 'Completo',
        'in-progress': 'En Progreso',
        pending: 'Pendiente',
    };

    const currentStatus = statusClasses[moduleData.status];

    return (
        <div 
            onClick={() => setView({ name: 'module', id: moduleInfo.id })}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-900 transition-all duration-200"
            style={{ '--tw-ring-color': currentStatus.ring } as React.CSSProperties}
        >
            <div className="flex items-start justify-between">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300">
                    {moduleInfo.id}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold leading-tight rounded-full ${currentStatus.bg} ${currentStatus.text}`}>
                    {statusText[moduleData.status]}
                </span>
            </div>
            <h4 className="mt-3 font-semibold text-gray-800 dark:text-white truncate" title={moduleInfo.title}>
                {moduleInfo.title}
            </h4>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                    className={`${moduleData.status === 'complete' ? 'bg-green-500' : moduleData.status === 'in-progress' ? 'bg-yellow-500' : 'bg-red-500'} h-2 rounded-full`} 
                    style={{ width: `${moduleData.progress}%` }}
                ></div>
            </div>
            <p className="mt-1 text-right text-xs font-medium text-gray-500 dark:text-gray-400">{moduleData.progress}%</p>
        </div>
    );
};

export default ModuleCard;
