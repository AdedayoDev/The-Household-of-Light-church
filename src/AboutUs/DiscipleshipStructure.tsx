import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

// --------------------
// TYPES
// --------------------
interface DisClass {
  id: number;
  header: string;
  body: string;
}

// --------------------
// DATA (outside component for performance)
// --------------------
const DISCIPLESHIP_STRUCTURE: DisClass[] = [
  {
    id: 1,
    header: "1. Membership Class",
    body: "Our Membership Class introduces you to the foundation of our faith, the values we uphold, and what it means to be part of our church family. It’s a simple, welcoming step that helps you understand who we are and how you can grow, belong, and serve with us.",
  },
  {
    id: 2,
    header: "2. Workforce Training School",
    body: "Our Workforce Training School equips volunteers with the knowledge and skills needed to serve effectively. It’s a simple, practical training that prepares you to serve with excellence, commitment, and a clear understanding of ministry.",
  },
  {
    id: 3,
    header: "3. Bible School",
    body: "Our Bible School helps believers grow deeper in the knowledge of Scripture. Through clear, structured teaching, you’ll gain a stronger foundation in the Word and learn how to apply it to everyday life.",
  },
  {
    id: 4,
    header: "4. Leadership School",
    body: "Our Leadership School equips believers to lead with vision, character, and Christlike influence. It’s a simple, practical training that prepares you to serve, guide, and impact others effectively in ministry and beyond.",
  },
];

// --------------------
// FRAMER MOTION VARIANTS
// --------------------
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" } as any,
  }),
};

// --------------------
// COMPONENT
// --------------------
const DiscipleshipStructure = () => {
  return (
    <section className="w-full py-12 ">
      {/* HEADER */}
      <div className="w-10/12 mx-auto flex flex-col gap-4 items-center text-center mb-14">
        <h2 className="uppercase font-bold text-4xl tracking-wide bg-linear-to-l from-black to-primary bg-clip-text text-transparent">
          Our Discipleship Structure
        </h2>

        <p className="max-w-3xl text-lg font-medium text-gray-700 leading-relaxed">
          Our discipleship structure is built to help believers grow steadily in
          the knowledge of Christ. Through guided teachings, small groups,
          intentional mentorship, and structured training, we raise grounded
          believers who walk in spiritual maturity and reflect Christ daily.
        </p>
      </div>

      {/* CARDS */}
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {DISCIPLESHIP_STRUCTURE.map((item, index) => (
          <motion.div
            key={item.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <Card
              className="
                bg-white rounded-2xl border border-gray-100 shadow-md 
                hover:shadow-xl transition-all duration-300
                hover:-translate-y-1 h-80 w-full 
              "
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-primary">
                  {item.header}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center py-12">
        <NavLink to="/become-a-member">
          <Button variant="church">Become a member</Button>
        </NavLink>
      </div>
    </section>
  );
};

export default DiscipleshipStructure;
