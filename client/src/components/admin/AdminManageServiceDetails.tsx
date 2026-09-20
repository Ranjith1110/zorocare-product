import type { FC } from 'react';
import AdminDoctorConsultationDetails from './detailed-services/AdminDoctorConsultationDetails';
import AdminOrderMedicineDetails from './detailed-services/AdminOrderMedicineDetails';
import AdminHealthCheckupDetails from './detailed-services/AdminHealthCheckupDetails';
import AdminCareProgramsDetails from './detailed-services/AdminCareProgramsDetails';
import AdminWellnessProgramsDetails from './detailed-services/AdminWellnessProgramsDetails';
import AdminAmbulanceServicesDetails from './detailed-services/AdminAmbulanceServicesDetails';
import AdminNRIServicesDetails from './detailed-services/AdminNRIServicesDetails';
import AdminDentalServicesDetails from './detailed-services/AdminDentalServicesDetails';
import AdminEyeCareServicesDetails from './detailed-services/AdminEyeCareServicesDetails';
import AdminOpticalServicesDetails from './detailed-services/AdminOpticalServicesDetails';

export interface ServiceData {
    name: string;
    [key: string]: any;
}

interface AdminManageServiceDetailsProps {
    service: ServiceData | null;
}

// Helper component to bypass strict TS checking for placeholder files
const RenderService = ({ Component, service }: { Component: any, service: ServiceData }) => {
    return <Component service={service} />;
};

const AdminManageServiceDetails: FC<AdminManageServiceDetailsProps> = ({ service }) => {
    if (!service) return null;

    switch (service.name) {
        case 'Instant Doctor Consultation':
            return <RenderService Component={AdminDoctorConsultationDetails} service={service} />;
        case 'Order Medicine':
            return <RenderService Component={AdminOrderMedicineDetails} service={service} />;
        case 'Health Checkup Booking':
            return <RenderService Component={AdminHealthCheckupDetails} service={service} />;
        case 'Care Programs': 
            return <RenderService Component={AdminCareProgramsDetails} service={service} />;
        case 'Wellness Programs': 
            return <RenderService Component={AdminWellnessProgramsDetails} service={service} />;
        case 'Ambulance Services': 
            return <RenderService Component={AdminAmbulanceServicesDetails} service={service} />;
        case 'NRI Services': 
            return <RenderService Component={AdminNRIServicesDetails} service={service} />;
        case 'Dental Services': 
            return <RenderService Component={AdminDentalServicesDetails} service={service} />;
        case 'Eye Care Services': 
            return <RenderService Component={AdminEyeCareServicesDetails} service={service} />;
        case 'Optical Services':
            return <RenderService Component={AdminOpticalServicesDetails} service={service} />;
        default:
            return (
                <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-500">Detailed management module for this service is currently under construction.</p>
                </div>
            );
    }
};

export default AdminManageServiceDetails;