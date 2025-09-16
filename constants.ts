
import { Module } from './types';

export const SGSPAM_ELEMENTS: Module[] = [
    {
        id: 1,
        title: "Política de prevención de accidentes mayores",
        description: "Establecer y comunicar la política de la empresa para prevenir accidentes mayores.",
        guidelines: [
            "Definir el compromiso de la alta dirección.",
            "Asegurar la disponibilidad de recursos.",
            "Comunicar la política a todos los niveles de la organización y contratistas.",
            "Revisar periódicamente para asegurar su adecuación."
        ]
    },
    {
        id: 2,
        title: "Información de seguridad",
        description: "Mantener y disponibilizar información sobre peligros, tecnología y equipos del proceso.",
        guidelines: [
            "Compilar hojas de datos de seguridad (HDS) para todas las sustancias peligrosas.",
            "Documentar los diagramas de flujo de proceso (DFP) y diagramas de tuberías e instrumentación (DTI).",
            "Establecer límites operativos seguros para los equipos.",
            "Evaluar las consecuencias de desviaciones."
        ]
    },
    {
        id: 3,
        title: "Identificación de peligros, análisis y evaluación de riesgos",
        description: "Identificar, analizar y evaluar sistemáticamente los riesgos de accidentes mayores.",
        guidelines: [
            "Utilizar metodologías reconocidas (HAZOP, What-If, FMEA).",
            "Involucrar a un equipo multidisciplinario en los análisis.",
            "Documentar los escenarios de riesgo y los controles existentes.",
            "Priorizar los riesgos para su gestión."
        ]
    },
    {
        id: 4,
        title: "Participación de los trabajadores",
        description: "Asegurar la participación activa de los trabajadores en la gestión de la seguridad.",
        guidelines: [
            "Establecer canales de comunicación para reportar peligros.",
            "Involucrar a los trabajadores en los análisis de riesgos e investigación de incidentes.",
            "Crear comités de seguridad con representación de los trabajadores.",
            "Garantizar el acceso a toda la información de seguridad relevante."
        ]
    },
    {
        id: 5,
        title: "Procedimientos de operación",
        description: "Desarrollar y mantener procedimientos claros para operar los procesos de forma segura.",
        guidelines: [
            "Cubrir todas las fases de operación: arranque, operación normal, parada, emergencia.",
            "Definir límites operativos seguros y pasos a seguir en caso de desviación.",
            "Asegurar que los procedimientos sean accesibles y entendidos por los operadores.",
            "Revisar y actualizar los procedimientos periódicamente y después de cambios."
        ]
    },
    {
        id: 6,
        title: "Entrenamiento",
        description: "Capacitar al personal para que realicen sus tareas de forma segura y competente.",
        guidelines: [
            "Identificar las necesidades de capacitación para cada rol.",
            "Desarrollar programas de entrenamiento inicial y de refuerzo.",
            "Verificar la comprensión y efectividad del entrenamiento.",
            "Mantener registros de la capacitación realizada."
        ]
    },
    {
        id: 7,
        title: "Evaluación de contratistas",
        description: "Asegurar que los contratistas trabajen de forma segura y cumplan con los estándares de la empresa.",
        guidelines: [
            "Evaluar el desempeño en seguridad de los contratistas antes de la contratación.",
            "Comunicar los peligros y procedimientos de seguridad del sitio.",
            "Supervisar el trabajo de los contratistas.",
            "Evaluar el desempeño al finalizar el trabajo."
        ]
    },
    {
        id: 8,
        title: "Revisión de seguridad pre-arranque",
        description: "Verificar que las instalaciones nuevas o modificadas son seguras antes de introducir sustancias peligrosas.",
        guidelines: [
            "Confirmar que la construcción e instalación cumplen con las especificaciones de diseño.",
            "Asegurar que los procedimientos de seguridad y operación están implementados.",
            "Verificar que todo el personal ha sido entrenado.",
            "Completar una lista de chequeo (checklist) antes del arranque."
        ]
    },
    {
        id: 9,
        title: "Integridad mecánica",
        description: "Mantener la integridad de los equipos críticos para prevenir fallas y fugas.",
        guidelines: [
            "Identificar equipos críticos (tanques, tuberías, reactores, sistemas de alivio).",
            "Establecer programas de inspección, prueba y mantenimiento preventivo.",
            "Utilizar personal calificado para el mantenimiento.",
            "Documentar todas las actividades de integridad mecánica."
        ]
    },
    {
        id: 10,
        title: "Permisos de trabajo",
        description: "Controlar trabajos de alto riesgo (en caliente, en espacios confinados) mediante un sistema de permisos.",
        guidelines: [
            "Definir los tipos de trabajo que requieren permiso.",
            "Establecer un procedimiento para la emisión, seguimiento y cierre de permisos.",
            "Asegurar la comunicación entre el personal de operaciones y de mantenimiento.",
            "Verificar que las condiciones seguras se mantienen durante el trabajo."
        ]
    },
    {
        id: 11,
        title: "Gestión del cambio",
        description: "Evaluar los riesgos asociados a cambios en el proceso, tecnología, equipos o personal.",
        guidelines: [
            "Establecer un procedimiento formal para gestionar cualquier cambio (MoC).",
            "Analizar el impacto del cambio en la seguridad y la salud.",
            "Aprobar los cambios por personal autorizado antes de su implementación.",
            "Actualizar toda la documentación relevante (procedimientos, DTI, etc.)."
        ]
    },
    {
        id: 12,
        title: "Preparación y respuesta ante emergencias",
        description: "Planificar y prepararse para responder eficazmente a emergencias y accidentes mayores.",
        guidelines: [
            "Desarrollar un plan de respuesta a emergencias basado en los escenarios de riesgo.",
            "Equipar las instalaciones con sistemas de alarma y equipos de control de emergencias.",
            "Entrenar al personal y realizar simulacros periódicos.",
            "Coordinar con organismos de respuesta externos."
        ]
    },
    {
        id: 13,
        title: "Investigación de incidentes y accidentes mayores",
        description: "Investigar todos los incidentes para identificar causas raíz y prevenir su recurrencia.",
        guidelines: [
            "Establecer un procedimiento de investigación claro.",
            "Formar un equipo de investigación con conocimiento del proceso.",
            "Utilizar metodologías de análisis de causa raíz (ACR).",
            "Desarrollar un plan de acción correctivo y preventivo y hacerle seguimiento."
        ]
    },
    {
        id: 14,
        title: "Indicadores de desempeño",
        description: "Medir y monitorear el desempeño del sistema de gestión para impulsar la mejora continua.",
        guidelines: [
            "Establecer indicadores proactivos (ej. auditorías completadas) y reactivos (ej. número de incidentes).",
            "Definir metas y umbrales para cada indicador.",
            "Analizar las tendencias y reportar los resultados a la dirección.",
            "Tomar acciones basadas en el análisis de los indicadores."
        ]
    },
    {
        id: 15,
        title: "Auditorías de cumplimiento",
        description: "Realizar auditorías periódicas para verificar el cumplimiento y la efectividad del SGSPAM.",
        guidelines: [
            "Establecer un programa de auditorías internas y externas.",
            "Utilizar auditores calificados e independientes al área auditada.",
            "Documentar los hallazgos y las no conformidades.",
            "Hacer seguimiento a los planes de acción para cerrar los hallazgos."
        ]
    },
    {
        id: 16,
        title: "Revisión por la dirección",
        description: "La alta dirección debe revisar el SGSPAM a intervalos planificados para asegurar su idoneidad y eficacia.",
        guidelines: [
            "Realizar revisiones gerenciales al menos una vez al año.",
            "Evaluar el desempeño general, los resultados de auditorías y el estado de los objetivos.",
            "Asignar recursos para la mejora continua del sistema.",
            "Documentar las decisiones y acciones resultantes de la revisión."
        ]
    }
];
