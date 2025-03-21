"use client"
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react" // Import icons for email and phone

export default function ContactPage() {
    const handlesubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // Add your logic here
    }
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-black"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Animated circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-700/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-6xl mx-4 bg-gray-900/80 p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.7)] border border-gray-800 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">CONTACT US</h2>
            <p className="text-gray-400 mb-6">Details about our society</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                SEND
              </motion.button>
            </form>
          </div>

          {/* Right Side: Society Roles */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* President */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/100" // Replace with actual photo
                    alt="President"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">John Doe</h3>
                    <p className="text-gray-400">President</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-400"><strong>Phone:</strong> +123 456 7890</p>
                  <p className="text-gray-400">
                    <strong>LinkedIn:</strong>{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>

              {/* Vice President */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/100" // Replace with actual photo
                    alt="Vice President"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Jane Smith</h3>
                    <p className="text-gray-400">Vice President</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-400"><strong>Phone:</strong> +123 456 7890</p>
                  <p className="text-gray-400">
                    <strong>LinkedIn:</strong>{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>

              {/* General Secretary */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/100" // Replace with actual photo
                    alt="General Secretary"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Alice Johnson</h3>
                    <p className="text-gray-400">General Secretary</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-400"><strong>Phone:</strong> +123 456 7890</p>
                  <p className="text-gray-400">
                    <strong>LinkedIn:</strong>{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>

              {/* Treasurer */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/100" // Replace with actual photo
                    alt="Treasurer"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Bob Brown</h3>
                    <p className="text-gray-400">Treasurer</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-400"><strong>Phone:</strong> +123 456 7890</p>
                  <p className="text-gray-400">
                    <strong>LinkedIn:</strong>{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer: Society Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 w-full max-w-6xl mx-4 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.7)] border border-purple-500/20 mb-8"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">About Our Society</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-white" />
              <p className="text-gray-200">society@example.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-white" />
              <p className="text-gray-200">+123 456 7890</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}