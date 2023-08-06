import React, { useState, useEffect } from 'react'
import './Testimonial.scss'
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const query = '*[_type == "testimonial"]';
    client.fetch(query).then((data) => {
      setTestimonial(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);


  return (
    <div>Testimonial 3.27.00</div>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
