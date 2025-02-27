
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from "framer-motion";

const ContactUs = () => {

    
    return (
        <>
        
            <div id='contact-us' className="bg-white min-h-screen pt-8">
                {/* Header Section */}
                <motion.div
                    className="text-center py-12 text-amber-900 mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
                    <p className="text-base sm:text-lg mt-4">
                    We’d love to hear from you! Whether you have questions about our products, want to place an order, or collaborate with us, feel free to reach out.
                    </p>
                </motion.div>

                {/* Contact Details Section */}
                <motion.div
                    className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {/* Contact Info */}
                    <motion.div
                        className="flex flex-col justify-center space-y-6"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">Jussel Original Mushroom Powder</h2>

                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <MapPin className="text-amber-900 w-6 h-6 mr-3" />
                                <p className="text-sm sm:text-base text-gray-700">
                                    <span className="font-bold">Location:</span> Biriwa, Ghana
                                </p>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-amber-900 w-6 h-6 mr-3" />
                                <p className="text-sm sm:text-base text-gray-700">
                                    <span className="font-bold">Phone:</span> +233 4445 0000 / +233 5554 0000
                                </p>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-amber-900 w-6 h-6 mr-3" />
                                <p className="text-sm sm:text-base text-gray-700">
                                    <span className="font-bold">Email:</span> jusselpowder@gmail.com
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <iframe
                            className="w-full h-64 sm:h-80 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.491241006119!2d-1.1647225596630293!3d5.164227937740269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfde042fd57b32af%3A0x20ed3584584f50b9!2sBiriwa!5e0!3m2!1sen!2sgh!4v1740691904750!5m2!1sen!2sgh"
                            allowFullScreen=""
                            loading="lazy"
                            title="Juaben Quarters, Ashanti"
                        ></iframe>
                    </motion.div>
                </motion.div>

            </div>
           
            
        </>
    );
};

export default ContactUs;
