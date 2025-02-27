import { motion } from "framer-motion"
import powder from "../../../assets/images/powder.jpg"
import mush1 from "../../../assets/images/mush1.jpg"
import mush2 from "../../../assets/images/mush2.jpeg"
import mush3 from "../../../assets/images/mush3.jpg"
import hero from "../../../assets/images/hero.jpg"
import mush5 from "../../../assets/images/mush5.jpg"

const products = [
    { id: 1, image: mush1, name: "Mushroom with Vegetables" },
    { id: 2, image: mush2, name: "Mushroom with eggs" },
    { id: 3, image: mush3, name: "Dried Mushrooms" },
    { id: 5, image: mush5, name: "Mother and Child Blend" },
    { id: 4, image: hero, name: "Pure Mushroom Powder" },
];

const AboutProduct = () => {
    return (
        <>

            <motion.div
                id="product"
                className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }} 
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Our Product
                    </motion.h2>

                    <motion.div className="flex flex-col sm:flex-row items-center gap-10">
                        {/* Image Animation (Appears from the Left) */}
                        <motion.div
                            className="sm:w-1/2 mb-8 sm:mb-0 sm:mr-6"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ amount: 0.2 }} 
                        >
                            <img
                                src={powder}
                                alt="About DAGRA SalePush Enterprise"
                                className="w-full h-full"
                            />
                        </motion.div>

                        {/* Text Animation (Appears from the Right) */}
                        <motion.div
                            className="sm:w-1/2"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ amount: 0.2 }} 
                        >
                            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-8">
                                At <strong>Juessel Original Mushroom Powder</strong>, we understand
                                the struggles of maintaining a nutritious diet in a fast-paced world.
                                Many people lack access to fresh, chemical-free, and nutrient-dense
                                food. That’s why we specialize in collecting fresh mushrooms from
                                local farmers, drying them, and processing them into fine powder—
                                making nutrition easy, convenient, and long-lasting.
                            </p>

                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                                Our products help solve problems such as:
                            </h3>
                            <ul className="list-disc pl-6 text-gray-600 text-base sm:text-lg mb-6">
                                <li>
                                    <span className="font-bold">Busy lifestyles – </span>Quick and easy
                                    to incorporate into meals.
                                </li>
                                <li>
                                    <span className="font-bold">Nutrient deficiencies – </span>Packed
                                    with vitamins, minerals, and antioxidants.
                                </li>
                                <li>
                                    <span className="font-bold">Food waste – </span>Extends the shelf
                                    life of fresh mushrooms.
                                </li>
                                <li>
                                    <span className="font-bold">
                                        Limited access to fresh produce –
                                    </span>{" "}
                                    Provides a sustainable and accessible solution.
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>;



            {/* Product Cards with Extended Bottom for Name */}
            <div className="mt-32">
                <h3 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-16">
                    Product Showcase
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-between gap-6 px-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="w-full sm:w-full md:w-[240px] h-[490px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col"
                            initial={{ opacity: 0, y: 100 }} // Start below
                            whileInView={{ opacity: 1, y: 0 }} // Move to normal position
                            transition={{ duration: 1, ease: "easeInOut", delay: index * 0.1 }} // Smooth stagger
                            viewport={{ once: false, amount: 0.1 }} // Trigger when 10% is in view
                        >
                            {/* Product Image */}
                            <div className="flex-1 h-full">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Product Name Section */}
                            <div className="bg-amber-50 py-3 text-center">
                                <h3 className="text-gray-800 text-base font-semibold">
                                    {product.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>;

        </>
    );
};

export default AboutProduct;
