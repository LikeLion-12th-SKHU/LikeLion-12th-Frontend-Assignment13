import { motion } from "framer-motion";
import "./App.css";
import { useNavigate } from "react-router-dom";
function NETFLIX() {
  const navigate = useNavigate();
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="wrap">
      <motion.div
        className="NetBox"
        variants={list}
        initial="hidden"
        animate="visible"
      >
        <motion.p id="NETFLIX" variants={item} whileHover={{ scale: 3 }}>
          N
        </motion.p>
        <motion.p id="NETFLIX" variants={item} whileHover={{ scale: 3 }}>
          E
        </motion.p>
        <motion.p id="NETFLIX" variants={item} whileHover={{ scale: 3 }}>
          T
        </motion.p>
        <motion.p id="NETFLIX" variants={item} whileHover={{ scale: 3 }}>
          F
        </motion.p>
        <motion.p id="NETFLIX" variants={item} whileHover={{ scale: 3 }}>
          I
        </motion.p>
        <motion.p id="NETFLIX" variants={item} whileHover={{ scale: 3 }}>
          L
        </motion.p>
        <motion.p id="NETFLIX" variants={item} whileHover={{ scale: 3 }}>
          X
        </motion.p>
      </motion.div>
      <button onClick={() => navigate("/NextPage")}>NextPage</button>
    </div>
  );
}

export default NETFLIX;
