import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Page = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
  >
    { children }
  </motion.div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
