"use client";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Fade,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import list from "../../../text/appendix.json";

const WorksFilterList = () => {
  const [selected, setSelected] = useState("");
  console.log("selected", list[selected as keyof typeof list]);
  return (
    <Box color="#000" rounded="md" className="mt-2">
      <Menu>
        <Box ml={2} justifyContent="space-between" display={"flex"}>
          <MenuButton>
            filter by work
            <ChevronDownIcon />
          </MenuButton>
          <Fade in={Boolean(selected)} className="w-1/2 text-right">
            <Tag
              size={"md"}
              borderRadius="full"
              variant="solid"
              colorScheme={"gray"}
              fontWeight="bold"
            >
              <TagLabel>{list[selected as keyof typeof list]}</TagLabel>
              <TagCloseButton onClick={() => setSelected("")} />
            </Tag>
          </Fade>
        </Box>
        <MenuList className="h-60 overflow-y-scroll">
          {Object.keys(list).map((v) => {
            return (
              <MenuItem key={v} onClick={() => setSelected(v)}>
                {list[v as keyof typeof list]}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default WorksFilterList;
