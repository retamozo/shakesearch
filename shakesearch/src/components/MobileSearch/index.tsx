"use client";
import useTextBoardContext from "@/hooks/useTextBoardContext";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ShakespeareImage from "../../../public/shakespeare-icon.jpg";
import WorkIndex from "../WorkIndex";

const SearchDrawer = () => {
  const { setOpenMobileDrawer, openMobileDrawer } = useTextBoardContext();

  return (
    <>
      <SearchIcon onClick={() => setOpenMobileDrawer(true)} />
      <Drawer
        size={"full"}
        placement={"bottom"}
        onClose={() => setOpenMobileDrawer(false)}
        isOpen={openMobileDrawer}
      >
        <DrawerOverlay />
        <DrawerContent className="h-3/4 bg-white">
          <DrawerHeader className="p-4" borderBottomWidth="1px">
            <InputGroup className="flex px-2">
              <Input
                placeholder="Search Shakespeare's work..."
                variant={"unstyled"}
              />
              <InputRightElement>
                <Image
                  alt="shakespeare icon"
                  src={ShakespeareImage}
                  width={25}
                  height={25}
                  className="mb-2"
                />
              </InputRightElement>
            </InputGroup>
          </DrawerHeader>
          <DrawerBody className="p-4 overflow-y-scroll pb-16">
            <WorkIndex onIndexClick={() => setOpenMobileDrawer(false)}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
