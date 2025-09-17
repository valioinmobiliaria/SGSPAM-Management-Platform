import React, { useState, useRef } from 'react';
import { IncidentReportData } from '../../types';
import { useAppContext } from '../../context/AppContext';

const IncidentReportForm: React.FC = () => {
    const { company, addEvidenceToModule } = useAppContext();
    const [formData, setFormData] = useState<IncidentReportData>({
        date: new Date().toISOString().split('T')[0],
        description: '',
        location: '',
        rootCause: '',
        correctiveActions: '',
        involvedPersonnel: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const reportRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generatePdf = async () => {
        const { jsPDF } = window.jspdf;
        const reportElement = reportRef.current;
        if (!reportElement) return;

        // Temporarily make the report visible for rendering
        reportElement.style.display = 'block';
        
        const canvas = await window.html2canvas(reportElement);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        
        // Hide the report again
        reportElement.style.display = 'none';

        return pdf;
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitSuccess(false);

        // Simulate PDF generation and upload
        try {
            const pdf = await generatePdf();
            const pdfBlob = pdf.output('blob');
            const pdfUrl = URL.createObjectURL(pdfBlob);
            
            const newEvidence = {
                name: `Reporte-Incidente-${formData.date}.pdf`,
                url: pdfUrl,
                date: new Date().toISOString().split('T')[0],
            };
            addEvidenceToModule(13, newEvidence); // Module 13 is for incidents

            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData({
                    date: new Date().toISOString().split('T')[0], description: '', location: '',
                    rootCause: '', correctiveActions: '', involvedPersonnel: '',
                });
                setTimeout(() => setSubmitSuccess(false), 4000);
            }, 1500);

        } catch (error) {
            console.error("Failed to generate PDF", error);
            setIsSubmitting(false);
        }
    };
    
    // Hidden div for PDF generation
    const PdfContent = () => (
        <div ref={reportRef} className="p-8 bg-white text-black" style={{ display: 'none', width: '210mm' }}>
            <div className="flex justify-between items-center border-b-2 pb-4 mb-6">
                <h1 className="text-3xl font-bold" style={{color: company.primaryColor}}>Reporte de Incidente</h1>
                <img src={company.logoUrl} alt="logo" className="h-16"/>
            </div>
            <h2 className="text-xl font-semibold mb-4">Detalles del Incidente</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <p><strong>Fecha:</strong> {formData.date}</p>
                <p><strong>Ubicación:</strong> {formData.location}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold border-b pb-1 mb-2">Descripción del Evento</h3>
                <p className="text-sm whitespace-pre-wrap">{formData.description}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold border-b pb-1 mb-2">Personal Involucrado</h3>
                <p className="text-sm whitespace-pre-wrap">{formData.involvedPersonnel}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold border-b pb-1 mb-2">Análisis de Causa Raíz</h3>
                <p className="text-sm whitespace-pre-wrap">{formData.rootCause}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold border-b pb-1 mb-2">Acciones Correctivas y Preventivas</h3>
                <p className="text-sm whitespace-pre-wrap">{formData.correctiveActions}</p>
            </div>
            <div className="mt-16 text-xs text-gray-500 text-center">
                <p>Generado por SGSPAM Management Platform</p>
                <p>{company.name}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
            <h4 className="font-semibold mb-4">Formulario: Reporte de Incidente/Accidente Mayor</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Fecha del Incidente</label>
                        <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Ubicación</label>
                        <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                    </div>
                </div>
                 <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción Detallada</label>
                    <textarea name="description" id="description" rows={4} value={formData.description} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                 <div>
                    <label htmlFor="involvedPersonnel" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Personal Involucrado</label>
                    <textarea name="involvedPersonnel" id="involvedPersonnel" rows={2} value={formData.involvedPersonnel} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                 <div>
                    <label htmlFor="rootCause" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Análisis de Causa Raíz</label>
                    <textarea name="rootCause" id="rootCause" rows={3} value={formData.rootCause} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                 <div>
                    <label htmlFor="correctiveActions" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Acciones Correctivas y Preventivas</label>
                    <textarea name="correctiveActions" id="correctiveActions" rows={3} value={formData.correctiveActions} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                </div>
                <div className="flex items-center justify-end space-x-4">
                    {submitSuccess && (
                        <div className="text-green-600 dark:text-green-400 flex items-center text-sm">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Reporte enviado y guardado como evidencia.
                        </div>
                    )}
                    <button type="submit" disabled={isSubmitting} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 dark:disabled:bg-blue-800">
                        {isSubmitting ? 'Generando PDF...' : 'Enviar y Generar PDF'}
                    </button>
                </div>
            </form>
            <PdfContent />
        </div>
    );
};

export default IncidentReportForm;
