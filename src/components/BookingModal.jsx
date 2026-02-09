import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, User, Phone, Mail, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        company: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="bg-primary p-8 text-white relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <h3 className="text-2xl font-bold mb-2">Book Your Consultation</h3>
                                <p className="text-primary-foreground/80">
                                    Fill in your details to proceed to scheduling your 1-on-1 call.
                                </p>
                            </div>

                            {/* Form */}
                            <form
                                action="https://formsubmit.co/dharun@hexitetechnologies.com"
                                method="POST"
                                className="p-8 space-y-6"
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_next" value="https://harivikash-b.dayschedule.com/1-on-1-for-booking-system" />
                                <input type="hidden" name="_subject" value="New Consultation Booking Lead" />
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="space-y-4">
                                    {/* Name Field */}
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 bg-secondary/50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Mobile Field */}
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            required
                                            type="tel"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 bg-secondary/50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 bg-secondary/50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>

                                    {/* Company Field */}
                                    <div className="relative group">
                                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            name="company"
                                            placeholder="Company Name"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 bg-secondary/50 border-none rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full py-7 text-lg font-bold rounded-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group"
                                >
                                    Next
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
