import { Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.webp";

const Header = () => {
  return (
    <>
      <HStack
        p={"4"}
        shadow={"base"}
        bgColor={"blackAlpha.900"}
        justifyContent={"space-between"}
      >
        <Image src={logo} w="10" borderRadius="50%" boxSize="50px" />
        <div>
          <Button
            marginRight={"3"}
            variant={"unstyled"}
            color={"white"}
            colorScheme={"blue"}
            css={{
              "&:hover": {
                color: "aqua",
              },
            }}
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            marginRight={"3"}
            variant={"unstyled"}
            color={"white"}
            css={{
              "&:hover": {
                color: "aqua",
              },
            }}
          >
            <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button
            marginRight={"3"}
            variant={"unstyled"}
            color={"white"}
            css={{
              "&:hover": {
                color: "aqua",
              },
            }}
          >
            <Link to="/coins">Coins</Link>
          </Button>
        </div>
      </HStack>
    </>
  );
};

export default Header;
