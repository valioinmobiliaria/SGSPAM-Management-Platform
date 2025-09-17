// Add global types for libraries loaded via script tags
declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
  }
}

// Fix: Add React import to resolve error 'Cannot find namespace React'.
import React from 'react';

export interface Company {
    name: string;
    logoUrl: string;
    primaryColor: string;
}

export interface User {
    name: string;
    role: 'Admin Empresa' | 'Responsable Elemento' | 'Auditor Interno' | 'Empleado Reportante' | 'Solo Lectura';
}

export type ModuleStatus = 'pending' | 'in-progress' | 'complete';

export interface Module {
    id: number;
    title: string;
    description: string;
    guidelines: string[];
}

export interface Evidence {
    name:string;
    url: string;
    date: string;
}

export interface ModuleData {
    id: number;
    status: ModuleStatus;
    progress: number;
    evidences: Evidence[];
    responsibles: string[];
}

export type View =
    | { name: 'dashboard' }
    | { name: 'module'; id: number }
    | { name: 'settings' };

export interface AppContextType {
    company: Company;
    user: User;
    modules: ModuleData[];
    setCompany: React.Dispatch<React.SetStateAction<Company>>;
    updateModuleProgress: (moduleId: number, newProgress: number) => void;
    addEvidenceToModule: (moduleId: number, evidence: { name: string; url: string; date: string }) => void;
}

export interface IncidentReportData {
    date: string;
    description: string;
    location: string;
    rootCause: string;
    correctiveActions: string;
    involvedPersonnel: string;
}
