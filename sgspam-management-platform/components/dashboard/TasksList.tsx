import React from 'react';

const mockTasks = [
    { id: 1, text: "Revisar permiso de trabajo #PT-2024-087", due: "Hoy", user: "Carlos Vélez" },
    { id: 2, text: "Aprobar plan de simulacro de emergencias", due: "Mañana", user: "Ana María Rojas" },
    { id: 3, text: "Cargar evidencia de capacitación de contratistas", due: "25/07/2024", user: "Sofía Pérez" },
    { id: 4, text: "Realizar inspección de integridad mecánica - Tanque T-101", due: "28/07/2024", user: "Javier Mendoza" },
    { id: 5, text: "Cerrar hallazgo de auditoría #AUD-03-01", due: "30/07/2024", user: "Ana María Rojas" },
];

const TasksList: React.FC = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tareas y Pendientes</h3>
            <ul className="space-y-4">
                {mockTasks.map(task => (
                    <li key={task.id} className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1 form-checkbox h-5 w-5 rounded text-blue-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500" />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{task.text}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Vence: {task.due} &bull; Asignado a: {task.user}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
             <button className="w-full mt-6 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Ver todas las tareas
            </button>
        </div>
    );
};

export default TasksList;
