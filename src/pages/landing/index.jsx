import Navbar from "../../components/navbar"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import hero from "../../assets/images/hero.jpg"
import AboutProduct from "./componets/aboutProduct";
import AboutInnovator from "./componets/aboutInnovator";
import Contact from "./componets/contactUs";
import ContactUs from "./componets/contactUs";
import Footer from "../../components/footer";


const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="overflow-hidden">
                <motion.div
                    id="home"
                    className="relative w-full min-h-screen bg-cover bg-center pt-[80px]"
                    style={{ backgroundImage: `url(${hero})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Overlay (Darkens the Background Only) */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content (Remains Bright) */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 z-10">
                        <motion.h3
                            className="text-white text-3xl md:text-5xl font-bold mb-4"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Welcome to Juessel Original Mushroom Powder,
                        </motion.h3>
                        <motion.p
                            className="text-white text-base md:text-lg mb-6 max-w-lg md:max-w-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Your trusted source for high-quality, nutrient-rich mushroom products.
                        </motion.p>

                        <motion.button
                            onClick={() => window.location.href = "https://paystack.shop/juessel-original-mushroom-powder"}
                            className="cursor-pointer bg-amber-900 text-white px-6 py-3 rounded-md text-base md:text-lg font-medium hover:bg-amber-800"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Shop Now
                        </motion.button>
                    </div>
                </motion.div>


                <AboutProduct />
                <AboutInnovator />
                <ContactUs />
                <Footer/>

            </div>
        </>
    )
}

export default Landing