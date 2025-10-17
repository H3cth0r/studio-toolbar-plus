import React, { useState, useEffect } from "react";
import { 
  Modal,
  Box,
  Title,
} from "@mantine/core";
import {
  getAllLayouts,
} from "../studio/layoutHandler";
import { appStore } from "../modalStore";

interface MagicLayoutsMapperModalProps {
  opened: boolean;
  onClose: () => void;
}

export function MagicLayoutsMapperModal({ opened, onClose }: MagicLayoutsMapperModalProps) {
  const raiseError = appStore((store) => store.raiseError);

  const handleClose = () => {
    onClose();
  };

  // Function that gets all Magic Layouts
  const getMagicLayouts = async () => {
    // Get all layouts
    const layoutsResult = await getAllLayouts(window.SDK);
    if (layoutsResult.isError()) {
      raiseError(new Error("Failed to get layouts"));
      throw new Error("Failed to get layouts");
    }
    const layouts = layoutsResult.value;

    // Ensure layouts is defined
    if (!layouts) {
      raiseError(new Error("Layouts data is undefined"));
      throw new Error("Layouts data is undefined");
    }

    // Find all layouts that start with ✨
    const magicLayouts = layouts.filter((layout) =>
      layout.name.startsWith("✨"),
    );
    console.log(magicLayouts);

  };

  useEffect(() => {
    const executeLayoutDataFetch = async () => {
      try {
        await getMagicLayouts();
      } catch (error) {
        console.error("Magic process failed:", error);
      }
    };
    executeLayoutDataFetch();
  }, [opened]);

  return(
    <Modal
      opened={opened}
      onClose={handleClose}
      title="✨ Magic Layouts Mapper"
      size="xl"
      fullScreen
    >
      <Box
        style={{
          height: "calc(100vh - 120px)",
          overflowY: "auto",
          padding: "16px",
        }}
      >
      </Box>
    </Modal>
  );
}
