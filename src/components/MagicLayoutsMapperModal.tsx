import React, { useState, useEffect } from "react";
import { Modal } from "@mantine/core";

interface MagicLayoutsMapperModalProps {
  opened: boolean;
  onClose: () => void;
}

export function MagicLayoutsMapperModal({ opened, onClose }: MagicLayoutsMapperModalProps) {
  
  const handleClose = () => {
    onClose();
  };

  return(
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Magic Layouts Mapper"
      size="xl"
      fullscreen
    >
    </Modal>
  );
}
