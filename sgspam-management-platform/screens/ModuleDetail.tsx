import React from 'react';
import { Module, ModuleData } from '../types';
import IncidentReportForm from '../components/forms/IncidentReportForm';
import { useAppContext } from '../context/AppContext';

interface ModuleDetailProps {
    module: Module;
    data: ModuleData;
}

const ModuleDetail: React.FC<ModuleDetailProps> = ({ module, data }) => {
    const { addEvidenceToModule } = useAppContext();
    
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const newEvidence = {
                name: file.name,
                url: URL.createObjectURL(file), // In a real app, this would be an upload URL
                date: new Date().toISOString().split('T')[0],
            };
            addEvidenceToModule(module.id, newEvidence);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Elemento SGSPAM #{module.id}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-1">{module.title}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{module.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Progress Card */}
                <div className="md:col-span-1 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-3">Estado del Elemento</h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${data.progress}%` }}></div>
                    </div>
                    <p className="text-right text-sm font-medium text-gray-600 dark:text-gray-300 mt-2">{data.progress}% Completo</p>
                    <div className="mt-4">
                        <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Responsables</h5>
                        <div className="flex flex-wrap gap-2">
                            {data.responsibles.map(name => (
                                <span key={name} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
                                    <img className="h-5 w-5 rounded-full" src={`https://i.pravatar.cc/40?u=${name}`} alt={name} />
                                    <span>{name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Guidelines Card */}
                <div className="md:col-span-2 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-3">Lineamientos Clave</h4>
                    <ul className="space-y-3">
                        {module.guidelines.map((guideline, index) => (
                             <li key={index} className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className="text-gray-700 dark:text-gray-300">{guideline}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Evidences Card */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">Evidencias y Documentos</h4>
                     <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4 4-4-4h3V3h2v8z" /></svg>
                        <span>Cargar Evidencia</span>
                        <input type="file" className="hidden" onChange={handleFileUpload} />
                    </label>
                </div>
                {data.evidences.length > 0 ? (
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {data.evidences.map((evidence, index) => (
                             <li key={index} className="py-3 flex items-center justify-between">
                                <div className="flex items-center">
                                     <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    <a href={evidence.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">{evidence.name}</a>
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Subido: {evidence.date}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No hay evidencias</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Comienza por cargar tu primer documento.</p>
                    </div>
                )}
            </div>
            
            {/* Conditional Form for Module 13 */}
            {module.id === 13 && <IncidentReportForm />}
        </div>
    );
};

export default ModuleDetail;
