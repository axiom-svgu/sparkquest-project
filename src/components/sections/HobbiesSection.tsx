import { motion } from "framer-motion";

const hobbies = [
  {
    hobby: "Open Source Contributing",
    description: "Active contributor to various open-source projects",
    icon: "🌟",
    bgClass: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
  },
  {
    hobby: "Tech Blogging",
    description: "Writing technical articles and tutorials on Medium",
    icon: "✍️",
    bgClass: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
  },
  {
    hobby: "Photography",
    description: "Capturing moments through street photography",
    icon: "📸",
    bgClass: "bg-gradient-to-br from-green-500/10 to-teal-500/10",
  },
];

export default function HobbiesSection() {
  return (
    <section
      className="min-h-[60vh] px-4 py-24 relative overflow-hidden"
      id="hobbies"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMjJjNTVlIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat animate-[drift_30s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-500 mb-12 text-center"
        >
          Hobbies & Interests
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((item, index) => (
            <motion.div
              key={item.hobby}
              initial={{ opacity: 0, y: 20, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative p-8 rounded-lg border border-green-500/20 ${item.bgClass} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />

              <div className="relative">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {item.hobby}
                </h3>
                <p className="text-green-400/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
