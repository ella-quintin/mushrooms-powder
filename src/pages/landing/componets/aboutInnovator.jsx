import { motion } from "framer-motion"
import headshot from "../../../assets/images/headshot.jpg"

const AboutInnovator = () => {
    return (
        <div id="about-innovator" className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
            {/* About Founder & C.E.O Section */}
            <motion.div
                className="py-16 px-6 md:px-12"
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                initial={{ x: "0vw", opacity: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <motion.h4
                            className="text-black uppercase tracking-wide font-semibold mb-2"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5}}
                        >
                            About the Innovator
                        </motion.h4>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-amber-900 mb-4"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5}}
                        >
                            Juliet Essel
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 text-base md:text-lg mb-6"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5}}
                        >
                            My name is Juliet Essel, and my journey to creating Juessel Original Mushroom Powder began with my own experiences growing up in Biriwa. Life was not always easy. My parents separated when I was nine, and from that moment, I had to learn how to navigate life with limited support. I saw my mother struggle to provide for us, and I knew that if I wanted to change my story, I had to take action.

Growing up, I noticed how much fresh produce, including mushrooms, was lost after harvest due to a lack of proper preservation. At the same time, I saw many families, especially mothers and children, struggling to get nutritious meals. This inspired me to find a way to extend the shelf life of mushrooms while making them more accessible and beneficial for people’s health.
                        </motion.p>
                        <motion.p
                            className="text-gray-600 text-base md:text-lg mb-6"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >

I started working with local farmers, collecting fresh mushrooms, drying them, and turning them into powder. This not only helps solve post-harvest losses but also creates a sustainable and nutritious food product that can be added to any meal. Today, Juessel Original Mushroom Powder is more than just a business for me—it’s a mission to promote healthy eating, address post-harvest losses, and support my community.
                        </motion.p>

                    </div>
                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <img
                            src={headshot} // 
                            alt="About the Founder"
                            className=" shadow-lg w-full h-full sm:w-[420px] md:h-full "
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutInnovator