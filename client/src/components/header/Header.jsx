import "./header.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  return (
    <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                initial={{ opacity: 0, scale:0.5 }} 
                animate={{ opacity: 1, scale: 1, }} 
                transition={{ duration: 0.5 }}></motion.span>
                <span>The Mr. Fix It Shop</span>
                <div className="social">
                    <a href="#"><img src="Logo.png" alt="" /></a>
                   
                </div>
            </div>
        </div>
  )
};

export default Header;
