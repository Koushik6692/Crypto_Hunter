import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/cpy.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box w={"full"} bgColor={"blackAlpha.900"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={["90vw", "full"]}
          h={"80%"}
          objectFit={"contain"}
          src={btcSrc}
        />
      </motion.div>

      <Text
        fontSize={["4xl", "6xl"]}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        ---Crypto Hunter---
      </Text>
    </Box>
  );
};

export default Home;
