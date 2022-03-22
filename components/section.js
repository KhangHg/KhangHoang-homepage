import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StydedDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0}) => (
    <StydedDiv
        initial={{ y : 10, opacity: 0}}
        animate={{ y : 0, opacity: 1}}
        transition={{ duration : 0.8, delay}}
        mb={6}
    >
        {children}
    </StydedDiv>
)

export default Section