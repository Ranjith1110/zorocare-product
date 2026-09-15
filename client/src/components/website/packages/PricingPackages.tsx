import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const pricingPlans = [
    {
        id: 'essential',
        badge: 'Good Start',
        name: 'Essential Care',
        description: 'Simple and reliable healthcare support for your everyday needs.',
        monthlyPrice: '499',
        yearlyPrice: '399',
        features: [
            'Basic health assessment',
            'Doctor consultation',
            'Health reminders',
            'Digital health records',
            'Email support'
        ],
        buttonText: 'Choose Essential Care',
        isPopular: false
    },
    {
        id: 'complete',
        badge: 'Recommended',
        popularTag: 'Most Popular',
        name: 'Complete Care',
        description: 'A complete healthcare plan designed for individuals and families.',
        monthlyPrice: '999',
        yearlyPrice: '799',
        features: [
            'Everything in Essential Care',
            'Priority doctor consultation',
            'Personalized health plan',
            'Preventive health tracking',
            'Family health support',
            'Priority customer support'
        ],
        buttonText: 'Choose Complete Care',
        isPopular: true
    },
    {
        id: 'premium',
        badge: 'Premium',
        name: 'Premium Care',
        description: 'Enhanced healthcare support with a more personalized care journey.',
        monthlyPrice: '1,999',
        yearlyPrice: '1,599',
        features: [
            'Everything in Complete Care',
            'Unlimited consultations',
            'Advanced health monitoring',
            'Dedicated care assistance',
            'Personalized wellness guidance',
            '24/7 support'
        ],
        buttonText: 'Choose Premium Care',
        isPopular: false
    }
];

const PricingPackages: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="relative w-full bg-[#faf9fb] py-20 lg:py-32 overflow-hidden">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#5301ab]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#fd5800]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- HEADER & TOGGLE --- */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
                        Flexible plans for <br className="sm:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">
                            every health journey.
                        </span>
                    </h2>

                    {/* Monthly / Yearly Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        
                        <button 
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-16 h-8 rounded-full bg-[#5301ab]/10 border border-[#5301ab]/20 p-1 transition-colors hover:bg-[#5301ab]/20 focus:outline-none"
                            aria-label="Toggle pricing period"
                        >
                            <div className={`w-6 h-6 rounded-full bg-[#5301ab] shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        </button>
                        
                        <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                                Yearly
                            </span>
                            <span className="bg-[#fd5800]/10 text-[#fd5800] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </div>

                {/* --- PRICING CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto items-start">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.id}
                            className={`relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${
                                plan.isPopular 
                                    ? 'shadow-2xl border-2 border-[#5301ab] md:-mt-4' 
                                    : 'shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl'
                            }`}
                        >
                            {/* "Most Popular" Ribbon for Complete Care */}
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1 uppercase tracking-wider">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        {plan.popularTag}
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-8">
                                <span className={`text-xs font-bold tracking-wider uppercase mb-4 block ${plan.isPopular ? 'text-[#fd5800]' : 'text-[#5301ab]'}`}>
                                    {plan.badge}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm font-medium h-10">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-8 pb-8 border-b border-gray-100">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-gray-900">₹</span>
                                    <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
                                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span className="text-gray-500 font-medium">/ month</span>
                                </div>
                                {isYearly && (
                                    <div className="mt-2 text-sm font-semibold text-green-600">
                                        Billed yearly • Save 20%
                                    </div>
                                )}
                            </div>

                            {/* Features List */}
                            <div className="mb-10">
                                <p className="text-sm font-bold text-gray-900 mb-4">What's included</p>
                                <ul className="space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-[#5301ab]/10' : 'bg-gray-50'}`}>
                                                <Check className={`w-3.5 h-3.5 ${plan.isPopular ? 'text-[#5301ab]' : 'text-gray-400'}`} strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-600 text-[15px] font-medium leading-tight">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <button 
                                className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all shadow-sm ${
                                    plan.isPopular 
                                        ? 'bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white hover:opacity-90 shadow-[#fd5800]/20' 
                                        : 'bg-white border-2 border-gray-100 text-gray-900 hover:border-[#5301ab] hover:text-[#5301ab]'
                                }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PricingPackages;