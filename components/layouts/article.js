import { motion } from "framer-motion";
import Head from "next/dist/shared/lib/head";
import { GridItemStyle } from "../grid-item";

const variant = {
    hidden : {opacity: 0, x : 0, y: 20},
    enter : {opacity: 1, x : 0, y: 0},
    exit : {opacity: 0, x : 0, y: 20}
}

const Layout = ({children, title}) => (
    <motion.article 
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variant}
    transition={{duration: 0.4, type: 'easeInOut'}}
    style={{ position: 'relative'}}
    >
      <>
      {title && (
          <Head>
              <title>{title} - Khang Hoang</title>
              <meta name="twitter:title" content={title} />
              <meta property="og:title" content={title} />
          </Head>
      )}
      {children}

      <GridItemStyle/>
      </>  
    </motion.article>
)

export default Layout