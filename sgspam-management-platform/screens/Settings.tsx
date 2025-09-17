import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Settings: React.FC = () => {
    const { company, setCompany } = useAppContext();
    const [name, setName] = useState(company.name);
    const [logoUrl, setLogoUrl] = useState(company.logoUrl);
    const [primaryColor, setPrimaryColor] = useState(company.primaryColor);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--primary-color-hover', `${primaryColor}E6`); // Simple hover effect
    }, [primaryColor]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCompany({ name, logoUrl, primaryColor });
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };
    
    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">Configuración de la Empresa</h2>

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Nombre de la Empresa
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Logo
                        </label>
                        <div className="mt-1 flex items-center space-x-4">
                            <img src={logoUrl} alt="Current logo" className="h-16 w-16 rounded-full object-cover bg-gray-200" />
                            <label className="cursor-pointer bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span>Cambiar logo</span>
                                <input type="file" className="sr-only" accept="image/*" onChange={handleLogoUpload} />
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Color Primario
                        </label>
                        <div className="mt-1 flex items-center space-x-3">
                            <input
                                type="color"
                                id="primaryColor"
                                value={primaryColor}
                                onChange={(e) => setPrimaryColor(e.target.value)}
                                className="h-10 w-10 p-1 block border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer"
                            />
                            <input
                                type="text"
                                value={primaryColor}
                                onChange={(e) => setPrimaryColor(e.target.value)}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-end items-center space-x-4">
                        {saved && (
                             <div className="text-green-600 dark:text-green-400 flex items-center text-sm transition-opacity duration-300">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Cambios guardados.
                            </div>
                        )}
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;
