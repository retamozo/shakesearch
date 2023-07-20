import React, { FunctionComponent, ReactNode } from "react";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import chakraTheme from "@chakra-ui/theme";

const { Button, Input, Divider, Drawer, Menu, Tag, Kbd } =
  chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Divider,
    Drawer,
    Menu,
    Tag,
    Kbd,
  },
});

const ChakraProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </CacheProvider>
  );
};

export default ChakraProvider;
