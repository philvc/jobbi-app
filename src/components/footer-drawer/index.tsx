import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import React from "react";
import { COLORS } from "../../constants/colors";
import { DrawerFooter } from "@chakra-ui/modal";

interface IDrawerFooter {
  onClose: () => void;
  hasDelete?: boolean;
  handleDelete?: () => void;
}

export default function SearchDrawerFooter({
  onClose,
  hasDelete,
  handleDelete,
}: IDrawerFooter) {
  return (
    <DrawerFooter>
      <Stack w="full" direction="row" spacing={4}>
        <Button w="full" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        {hasDelete && (
          <Button w="full" variant="outline" onClick={handleDelete}>
            Delete
          </Button>
        )}
        <Button
          type="submit"
          bg={COLORS.BLUE.T500.hex}
          color={COLORS.WHITE.hex}
          w="full"
        >
          Sauver
        </Button>
      </Stack>
    </DrawerFooter>
  );
}
