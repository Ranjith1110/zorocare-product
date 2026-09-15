import React, { useState } from 'react';
import { 
    Mail, 
    PhoneCall, 
    MapPin, 
    Clock, 
    Send, 
    AlertTriangle, 
    ArrowLeft 
} from 'lucide-react';

const contactDetails = [
    {
        id: 'email',
        label: 'Email',
        value: 'support@zorocare.com',
        icon: Mail,
        color: 'text-[#5301ab]',
        bg: 'bg-[#5301ab]/10'
    },
    {
        id: 'phone',
        label: 'Phone',
        value: '+91 78100 43538',
        icon: PhoneCall,
        color: 'text-[#fd5800]',
        bg: 'bg-[#fd5800]/10'
    },
    {
        id: 'office',
        label: 'Office',
        value: 'ZoroCare Healthcare Technologies\nTamil Nadu, India',
        icon: MapPin,
        color: 'text-[#5301ab]',
        bg: 'bg-[#5301ab]/10'
    },
    {
        id: 'hours',
        label: 'Working Hours',
        value: 'Monday – Saturday\n9:00 AM – 6:00 PM',
        icon: Clock,
        color: 'text-[#fd5800]',
        bg: 'bg-[#fd5800]/10'
    }
];

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="relative w-full bg-[#faf9fb] py-20 lg:py-32 overflow-hidden">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#5301ab]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#fd5800]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    
                    {/* --- LEFT SIDE: Contact Info --- */}
                    <div className="flex flex-col">
                        <div className="mb-10">
                            <h2 className="text-sm font-bold tracking-widest text-[#5301ab] uppercase mb-4">
                                Contact Information
                            </h2>
                            <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                                Let's talk about <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5301ab] to-[#fd5800]">
                                    your care.
                                </span>
                            </h3>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-lg">
                                Whether you need support, have a question, or simply want to learn more about ZoroCare, we're here for you.
                            </p>
                        </div>

                        {/* Contact Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            {contactDetails.map((detail) => {
                                const Icon = detail.icon;
                                return (
                                    <div key={detail.id} className="flex items-start gap-4 group">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${detail.bg} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className={`w-6 h-6 ${detail.color}`} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 mb-1">{detail.label}</h4>
                                            <p className="text-gray-600 text-[15px] leading-relaxed whitespace-pre-line font-medium">
                                                {detail.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Emergency Notice */}
                        <div className="mt-auto bg-red-50 border border-red-100 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500"></div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                                    <AlertTriangle className="w-5 h-5 text-red-600" strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-red-900 mb-2">Need urgent medical attention?</h4>
                                    <p className="text-red-700 text-sm leading-relaxed mb-6 font-medium">
                                        ZoroCare is not an emergency service. If you are experiencing a medical emergency, contact your local emergency services immediately.
                                    </p>
                                    <a href="/" className="inline-flex items-center gap-2 text-red-700 font-bold text-sm hover:text-red-800 transition-colors">
                                        <ArrowLeft className="w-4 h-4" />
                                        Go to Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: Contact Form --- */}
                    <div className="relative">
                        {/* Shadow Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#5301ab]/20 to-[#fd5800]/20 rounded-[3rem] blur-2xl transform scale-95"></div>
                        
                        <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                            <div className="mb-8">
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Send us a message</h3>
                                <p className="text-gray-500 text-sm">Fill out the form below and our team will get back to you.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="fullName" className="text-sm font-bold text-gray-700">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:ring-2 focus:ring-[#5301ab]/20 focus:border-[#5301ab] outline-none transition-all"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:ring-2 focus:ring-[#5301ab]/20 focus:border-[#5301ab] outline-none transition-all"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:ring-2 focus:ring-[#5301ab]/20 focus:border-[#5301ab] outline-none transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subject</label>
                                        <div className="relative">
                                            <select 
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:ring-2 focus:ring-[#5301ab]/20 focus:border-[#5301ab] outline-none transition-all appearance-none cursor-pointer"
                                                required
                                            >
                                                <option value="" disabled>Select a subject</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Customer Support">Customer Support</option>
                                                <option value="Partnership">Partnership</option>
                                                <option value="Feedback">Feedback</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-700">Your Message</label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:ring-2 focus:ring-[#5301ab]/20 focus:border-[#5301ab] outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#5301ab] to-[#fd5800] text-white px-10 py-4 rounded-xl font-bold text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-[#fd5800]/20"
                                >
                                    Send Message
                                    <Send className="w-4 h-4" strokeWidth={2.5} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;