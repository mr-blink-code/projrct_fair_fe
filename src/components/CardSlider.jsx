import React from "react";
import { motion } from "framer-motion";
import { useState ,useEffect} from "react";
import ProjectCard from "../components/ProjectCard";
import { Row } from "react-bootstrap";

const positions = [
  "second_left",
  "first_left",
  "middle",
  "first_right",
  "second_right",
];

const imageVariants = {
  second_left: { x: "-20%", scale: 0.4, zIndex: 3 },
  first_left: { x: "5%", scale: 0.7, zIndex: 4 },
  middle: { x: "50%", scale: 1, zIndex: 5 },
  first_right: { x: "95%", scale: 0.7, zIndex: 4 },
  second_right: { x: "120%", scale: 0.4, zIndex: 3 },
};

export default function CardSlider({homeProject}) {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <>
          {
            homeProject?.length>0?
            homeProject.map((item,index)=>(
      <motion.div
        key={index}
        initial="middle"
        animate={positions[positionIndexes[index]]}
        variants={imageVariants}
        transition={{ duration: 0.8 }}
        className="position-absolute h-50 w-50"
      >
        <ProjectCard project={item} />
      </motion.div>)):
            <p>No projects Found</p>
          }
          </>
  );
}
