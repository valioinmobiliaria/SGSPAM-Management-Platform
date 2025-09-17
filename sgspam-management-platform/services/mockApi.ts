
import { Company, User, ModuleData, ModuleStatus } from '../types';

const mockCompany: Company = {
    name: "Petroquímica del Caribe S.A.S.",
    logoUrl: "https://picsum.photos/seed/companylogo/200/200",
    primaryColor: "#059669", // emerald-600
};

const mockUser: User = {
    name: "Ana María Rojas",
    role: "Admin Empresa",
};

const generateInitialModules = (): ModuleData[] => {
    const statuses: ModuleStatus[] = ['complete', 'in-progress', 'pending'];
    return Array.from({ length: 16 }, (_, i) => {
        const status = statuses[i % 3];
        let progress = 0;
        if (status === 'complete') progress = 100;
        else if (status === 'in-progress') progress = Math.floor(Math.random() * 61) + 20; // 20-80
        
        return {
            id: i + 1,
            status: status,
            progress: progress,
            evidences: progress > 30 ? [
                { name: `Evidencia-00${i+1}.pdf`, url: '#', date: '2024-05-10' },
                { name: `Registro-Fotografico-${i+1}.jpg`, url: '#', date: '2024-05-12' }
            ] : [],
            responsibles: i % 2 === 0 ? ['Carlos Vélez', 'Sofía Pérez'] : ['Javier Mendoza']
        };
    });
};

const initialModules = generateInitialModules();

export const getCompany = (): Company => mockCompany;
export const getUser = (): User => mockUser;

export const getInitialModules = (): Promise<ModuleData[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(initialModules);
        }, 500);
    });
};
