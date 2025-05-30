import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingChat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialButtons = [
    {
      name: "WhatsApp",
      href: "https://wa.me/message/OCDVUSN2YOP5M1",
      icon: "ri:whatsapp-fill",
      bgColor: "bg-[#25D366] hover:bg-[#128C7E]",
    },
    {
      name: "Messenger",
      href: "https://m.me/ishtiaqrobins",
      icon: "ri:messenger-fill",
      bgColor: "bg-[#0099FF] hover:bg-[#006AFF]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Social Media Buttons */}
      <AnimatePresence>
        {isHovered && (
          <div className="flex flex-col gap-4 mb-4">
            {socialButtons.map((button, index) => (
              <motion.a
                key={button.name}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1,
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`${button.bgColor} text-white p-[14px] rounded-full shadow-lg flex items-center justify-center`}
                  aria-label={`Chat on ${button.name}`}
                >
                  <Icon icon={button.icon} className="w-6 h-6" />
                </motion.button>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-[14px] rounded-full shadow-lg flex items-center justify-center"
        aria-label="Open Chat"
      >
        <motion.div
          animate={isHovered ? { rotate: 15 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};
