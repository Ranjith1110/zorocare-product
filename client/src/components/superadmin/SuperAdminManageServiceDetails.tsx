import type { FC } from 'react';
import SADoctorConsultationDetails from './detailed-services/SADoctorConsultationDetails';
import SAOrderMedicineDetails from './detailed-services/SAOrderMedicineDetails';
import SAHealthCheckupDetails from './detailed-services/SAHealthCheckupDetails';
import SACareProgramsDetails from './detailed-services/SACareProgramsDetails';
import SAWellnessProgramsDetails from './detailed-services/SAWellnessProgramsDetails';
import SAAmbulanceServicesDetails from './detailed-services/SAAmbulanceServicesDetails';
import SANRIServicesDetails from './detailed-services/SANRIServicesDetails';
import SADentalServicesDetails from './detailed-services/SADentalServicesDetails';
import SAEyeCareServicesDetails from './detailed-services/SAEyeCareServicesDetails';
import SAOpticalServicesDetails from './detailed-services/SAOpticalServicesDetails';

export interface ServiceData {
    name: string;
    [key: string]: any;
}

interface SuperAdminManageServiceDetailsProps {
    service: ServiceData | null;
}

const SuperAdminManageServiceDetails: FC<SuperAdminManageServiceDetailsProps> = ({ service }) => {
    switch (service?.name) {
        case 'Instant Doctor Consultation':
            return <SADoctorConsultationDetails service={service} />;
        case 'Order Medicine':
            return <SAOrderMedicineDetails service={service} />;
        case 'Health Checkup Booking':
            return <SAHealthCheckupDetails service={service} />;
        case 'Care Programs': 
            return <SACareProgramsDetails service={service} />;
        case 'Wellness Programs': 
            return <SAWellnessProgramsDetails service={service} />;
        case 'Ambulance Services': 
            return <SAAmbulanceServicesDetails service={service} />;
        case 'NRI Services': 
            return <SANRIServicesDetails service={service} />;
        case 'Dental Services': 
            return <SADentalServicesDetails service={service} />;
        case 'Eye Care Services': 
            return <SAEyeCareServicesDetails service={service} />;
        case 'Optical Services':
            return <SAOpticalServicesDetails service={service} />;
        default:
            return (
                <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service?.name}</h3>
                    <p className="text-gray-500">Detailed management module for this service is currently under construction.</p>
                </div>
            );
    }
};

export default SuperAdminManageServiceDetails;