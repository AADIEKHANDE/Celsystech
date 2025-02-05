import React, { lazy, Suspense, useMemo } from "react";
import "../style/Home.css";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = lazy(() => import("./Navbar"));
const Typewriter = lazy(() => import("typewriter-effect"));
import { motion, useScroll, useTransform } from "framer-motion";

// Animation Variants
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const BlogCard = ({ title, excerpt, date, image, category }) => {
  return (
    <motion.div
      className="blog-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className="blog-card-image">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-emerald-600 font-semibold text-sm">
            {category}
          </span>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 flex-grow">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        <button
          className="
            bg-emerald-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            hover:bg-emerald-600 
            transition 
            duration-300
            self-start
          "
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const blogPosts = useMemo(
    () => [
      {
        id: 1,
        title: "The Future of Web Development in 2024",
        excerpt:
          "Dive deep into the emerging trends transforming web development, from AI-powered design to advanced performance optimization techniques.",
        date: "January 15, 2024",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        category: "Web Technology",
      },
      {
        id: 2,
        title: "AI and Machine Learning: Transforming Business Solutions",
        excerpt:
          "Explore how artificial intelligence is revolutionizing business strategies, from predictive analytics to intelligent automation and decision-making.",
        date: "February 3, 2024",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "Artificial Intelligence",
      },
      {
        id: 3,
        title: "Blockchain: Beyond Cryptocurrency Innovations",
        excerpt:
          "Uncover the transformative potential of blockchain technology across industries, from supply chain management to secure digital identities.",
        date: "March 20, 2024",
        image:
          "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
        category: "Blockchain Technology",
      },
    ],
    []
  );

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <Suspense fallback={<motion.div>Loading...</motion.div>}>
        <Navbar />
        <motion.div
          className="masterdiv"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Home Section */}
          <motion.section
            id="home"
            className="h-screen bg-white-200 p-8 sm:p-30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-12">
              <motion.div
                className="col-span-12 sm:col-span-6 justify-items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="sm:text-6xl text-4xl main-heading typewriter place-self-start">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Typewriter
                      options={{
                        strings: ["CUTTING EDGE", "ADVANCE", "INNOVATIVE"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </motion.span>
                </h1>

                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="sm:text-6xl text-4xl main-heading"
                >
                  TECHNOLOGICAL SOLUTIONS
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-3 text-justify"
                >
                  At Innovative Tech, we transform ideas into impactful digital
                  solutions. Specializing in website and app development,
                  project management, and blockchain technology, we empower
                  businesses to grow through technology.Our team is dedicated to
                  delivering tailored solutions that meet your unique needs with
                  creativity, precision, and expertise. Let’s build something
                  extraordinary together!
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-8 bg-emerald-500 text-white px-6 py-2 transition duration-300 ease-in-out transform rounded-lg shadow-md hover:bg-emerald-700"
                >
                  Get a Quote
                </motion.button>
              </motion.div>

              <motion.div
                className="col-span-12 sm:col-span-6 justify-items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-md"
                  src="https://img.freepik.com/free-vector/man-playing-online-games-concept_52683-37362.jpg?t=st=1738068513~exp=1738072113~hmac=7660445e5a3d0ea016191620f62a3dcfd216221dd8a2e8088a7f3fe2d0cdfd14&w=740"
                  alt="Hero Image"
                />
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="about"
            className="h-screen p-8 sm:p-30 mt-40 sm:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-center sm:text-6xl mb-15 font-bold text-4xl"
            >
              WHAT DO WE DO?
            </motion.h1>

            <div className="grid grid-cols-12">
              <motion.div
                className="col-span-12 sm:col-span-6 justify-items-center"
                variants={itemVariants}
              >
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-xs sm:w-xl"
                  src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8196.jpg?t=st=1738093439~exp=1738097039~hmac=557f82c6d8a15bc3e9bc99a03b81d84287a629accd10a69b0b97bd5cc731fbaf&w=996"
                  alt="About Us"
                />
              </motion.div>

              <motion.div
                className="col-span-12 sm:col-span-6 overflow-y-scroll mt-10 p-5 sm:p-10 h-95 w-full text-center custom-scrollbar sm:text-5xl text-3xl"
                variants={containerVariants}
              >
                {[
                  {
                    text: "Transform Your Business with",
                    highlightText: "Advanced Tech!",
                    description:
                      "Our specialists provide the latest solutions to drive your success in the digital world.",
                  },
                  {
                    text: "Harness the Power of Smart Technology!",
                    highlightText: "Advanced Tools",
                    description:
                      "Designed to streamline operations and sharpen your competitive edge in the digital landscape.",
                  },
                  {
                    text: "Unlock New Possibilities with Smart Tech Solutions!",
                    highlightText: "Dedicated Team",
                    description:
                      "Offers the most advanced tools to streamline operations and enhance your competitive edge in the digital realm.",
                  },
                ].map((item, index) => (
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                    className={`main-heading ${index !== 0 ? "mt-20" : ""}`}
                  >
                    {item.text}{" "}
                    <motion.span
                      initial={{ backgroundColor: "transparent" }}
                      whileInView={{
                        backgroundColor: "#fef08a", // yellow-200
                        transition: { duration: 0.5, delay: index * 0.2 + 0.3 },
                      }}
                      className="bg-yellow-200 inline-block px-2"
                    >
                      {item.highlightText}
                    </motion.span>{" "}
                    {item.description}
                  </motion.h1>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            id="services"
            className="h-screen p-8 sm:p-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="text-xl text-center">
              <motion.h1
                variants={itemVariants}
                className="text-center sm:text-6xl text-4xl mb-15 font-bold"
              >
                WHAT DO WE PROVIDE?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-justify mb-6"
              >
                We are a dynamic startup based in Pune, driven by a team of
                young and passionate developers dedicated to revolutionizing the
                IT industry. Our mission is to deliver exceptional services by
                leveraging our extensive skills and expertise. We are committed
                to understanding and addressing the unique pain points of our
                customers, ensuring that we meet their specific requirements
                while respecting budget constraints.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden sm:block text-justify indent-12"
              >
                Our innovative approach and customer-centric mindset empower us
                to create tailored solutions that not only fulfill immediate
                needs but also foster long-term success. By staying at the
                forefront of technology and industry trends, we strive to exceed
                expectations and build lasting partnerships with our clients.
                Join us on our journey to transform ideas into impactful digital
                solutions that drive growth and innovation.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="overflow-x-auto horizontal-scroll mt-20 custom-scrollbar"
            >
              <div className="inline-flex space-x-4">
                {[
                  {
                    name: "Website Development",
                    description: "Build stunning, high-performance websites",
                    icon: "💻", // Added icons for visual interest
                  },
                  {
                    name: "Android Development",
                    description: "Create seamless mobile experiences",
                    icon: "📱",
                  },
                  {
                    name: "iOS Development",
                    description: "Engaging users with cutting-edge tech",
                    icon: "🍎",
                  },
                  {
                    name: "Digital Marketing",
                    description: "Boost your reach with data-driven strategies",
                    icon: "📈",
                  },
                  {
                    name: "Graphic Design",
                    description: "Transform ideas into visual masterpieces",
                    icon: "🎨",
                  },
                  {
                    name: "UI/UX Design",
                    description: "Bring ideas to life with interactive designs",
                    icon: "🖌️",
                  },
                ].map((service, index) => (
<motion.div
  key={index}
  variants={itemVariants}
  className="
    w-72 
    h-80 
    bg-emerald-400 
    text-white 
    rounded-lg 
    shadow-lg 
    p-6 
    flex 
    flex-col 
    justify-between 
    items-center 
    transform 
    transition-all 
    duration-300 
    ease-in-out
    hover:shadow-2xl // Enhanced shadow on hover
  "
  whileHover={{
    scale: 1.05,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#059669", // Slightly darker emerald on hover
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    }
  }}
  whileTap={{ scale: 0.95 }}
>
  {/* Icon */}
  <motion.div
    className="text-6xl mb-4"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ 
      rotate: [0, 10, -10, 0], // Slight wiggle animation
      transition: { duration: 0.5 }
    }}
  >
    {service.icon}
  </motion.div>

  {/* Service Name */}
  <motion.h1
    className="
      text-center 
      text-2xl 
      font-bold 
      mb-4 
      text-white 
      opacity-100
    "
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ 
      scale: 1.1,
      transition: { duration: 0.2 }
    }}
  >
    {service.name}
  </motion.h1>

  {/* Description */}
  <motion.p
    className="
      text-center 
      text-sm 
      opacity-90 
      text-white 
      mb-4
    "
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
  >
    {service.description}
  </motion.p>

  {/* Learn More Button */}
  <motion.button
    className="
      bg-white 
      text-emerald-500 
      px-4 
      py-2 
      rounded-full 
      hover:bg-emerald-50 
      transition 
      duration-300
    "
    whileHover={{ 
      scale: 1.1,
      backgroundColor: "#f0fdf4", // Very light emerald background
      transition: { 
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    }}
    whileTap={{ scale: 0.95 }}
  >
    Learn More
  </motion.button>
</motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Blog Section */}
          <motion.section
            id="blog"
            className="min-h-screen p-8 sm:p-30 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-center sm:text-6xl text-4xl font-bold mb-12 text-gray-800"
            >
              OUR BLOGS
            </motion.h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  image={post.image}
                  category={post.category}
                />
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition duration-300 shadow-md"
              >
                View All Blogs
              </motion.button>
            </motion.div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="h-screen sm:p-30 bg-emerald-500 sm:bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-12 bg-emerald-500 w-full h-full gap-4 sm:p-15 p-8 rounded-2xl">
              <motion.div
                className="col-span-12 text-white sm:col-span-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="sm:text-7xl text-4xl font-bold">
                  WE'D LOVE TO HEAR FROM YOU!
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-justify mt-4"
                >
                  Whether you have a question about our services, need
                  assistance, or just want to share feedback, we're here to
                  help.
                </motion.p>
              </motion.div>

              <motion.div
                className="col-span-12 sm:col-span-6"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
                  <motion.form
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    className="space-y-4"
                  >
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </motion.div>

                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md"
                    >
                      Submit
                    </motion.button>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default Home;
