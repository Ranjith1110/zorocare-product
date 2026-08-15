import type { FC } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Button from '../../common/Button';

interface Props {
    onBack: () => void;
}

const IDAmbulanceServicesOtherServices: FC<Props> = ({ onBack }) => {
    return (
        <div className="w-full space-y-6 animate-in fade-in duration-500 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                <div>
                    <div className="flex items-center gap-3">
                        <button onClick={onBack} className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#5301ab] hover:border-[#5301ab]/30 transition-colors shadow-sm">
                            <FiArrowLeft className="w-4 h-4" />
                        </button>
                        <h2 className="font-heading text-2xl lg:text-[28px] font-bold text-gray-900 leading-tight">Ambulance Services</h2>
                    </div>
                    <p className="text-[13px] text-gray-500 font-medium mt-1 ml-11">Manage emergency response, fleet tracking, and paramedical support.</p>
                </div>
            </div>

            <div className="bg-white p-10 rounded-md border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] text-center min-h-[400px] flex flex-col items-center justify-center">
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ambulance-4493309-3733076.png" alt="Ambulance" className="w-32 h-32 object-contain mb-4 drop-shadow-lg scale-x-[-1]" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ambulance Services Module</h3>
                <p className="text-gray-500 mb-6 max-w-md">The detailed dashboard for dispatching, tracking, and managing 24x7 ambulance services is currently under construction.</p>
                <Button variant="primary" className="!bg-[#5301ab] hover:!bg-[#43008a]" onClick={onBack}>Go Back to Services</Button>
            </div>
        </div>
    );
};

export default IDAmbulanceServicesOtherServices;