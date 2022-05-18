import React, { useState } from "react";
import { InputFieldProps } from "./props";
import { useField, useFormikContext } from "formik";
import { COLORS } from "../../../../constants/colors";
import InputPasswordField from "./password-field";
import string from "../../../../utils/string";
import { Box, Flex } from "@chakra-ui/layout";
import Paragraph from "../../typography/paragraph";
import { FONT_SIZES } from "../../../../constants/typography";
import Reset from "../../icons/reset";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";

const InputField = ({
  name,
  type,
  placeholder,
  disabled,
  disableReset = false,
  style,
}: InputFieldProps) => {
  // Attributes
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [{ value, onBlur, ...rest }, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  // Functions
  function getBorderColor() {
    if (isHovered || isFocused) {
      return COLORS.BLACK.T500.hex;
    }
    if (meta.touched && meta.error) {
      return COLORS.DANGER.T500.hex;
    }

    return COLORS.GREY.T100.hex;
  }

  // Input is empty
  function isEmpty() {
    return value === undefined || value.length === 0;
  }

  if (type == "password") {
    return (
      <InputPasswordField
        disabled={disabled}
        name={name}
        placeholder={placeholder}
      />
    );
  }

  if (type == "textarea") {
    return (
      <Box style={style}>
        <Box
          background={COLORS.WHITE.hex}
          outline="none"
          rounded={10}
          px={3}
          pt={string.isNullOrUndefined(value) ? `${2.25 * 4}px` : 1.5}
          pb={string.isNullOrUndefined(value) ? `${2.25 * 4}px` : 0.5}
          w={"full"}
          borderStyle={"solid"}
          borderColor={getBorderColor()}
          borderWidth={1}
          cursor={disabled ? "not-allowed" : undefined}
        >
          <Flex direction="row" align="center">
            <Box w="100%">
              {!string.isNullOrUndefined(meta.value) && (
                <Paragraph color={COLORS.GREY.T500} size={FONT_SIZES.TINY}>
                  {placeholder}
                </Paragraph>
              )}
              <Textarea
                onBlur={(e) => {
                  setIsFocused(false);
                  onBlur(e);
                }}
                onFocus={() => setIsFocused(true)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={disabled}
                type={type}
                p={0}
                placeholder={placeholder}
                outline={"none"}
                _focus={{ outline: "none" }}
                h="auto"
                onChange={(event) => setFieldValue(name, event?.target?.value)}
                background={COLORS.TRANSPARENT.hex}
                w="full"
                border="none"
                _placeholder={{ fontSize: FONT_SIZES.REGULAR }}
                fontSize={FONT_SIZES.REGULAR}
                value={value}
                name={name}
              />
            </Box>
            {!disableReset && !isEmpty() && (
              <Box
                mt={-1}
                cursor="pointer"
                whilehover={{ scale: 0.9875 }}
                whiletap={{ scale: 1.0125 }}
                ml={"auto"}
                onClick={() => setFieldValue(name, "")}
              >
                <Reset height="16px" width="16px" />
              </Box>
            )}
          </Flex>
        </Box>
        {meta.touched && meta.error && (
          <Box my={2} ml={1}>
            <Paragraph color={COLORS.DANGER.T500} size={FONT_SIZES.EXTRA_SMALL}>
              {meta.error}
            </Paragraph>
          </Box>
        )}
      </Box>
    );
  }

  // Render
  return (
    <Box style={style}>
      <Box
        background={COLORS.WHITE.hex}
        outline="none"
        rounded={10}
        px={3}
        pt={string.isNullOrUndefined(value) ? `${2.25 * 4}px` : 1.5}
        pb={string.isNullOrUndefined(value) ? `${2.25 * 4}px` : 0.5}
        w={"full"}
        borderStyle={"solid"}
        borderColor={getBorderColor()}
        borderWidth={1}
        cursor={disabled ? "not-allowed" : undefined}
      >
        <Flex direction="row" align="center">
          <Box w="100%">
            {!string.isNullOrUndefined(meta.value) && (
              <Paragraph color={COLORS.GREY.T500} size={FONT_SIZES.TINY}>
                {placeholder}
              </Paragraph>
            )}
            <Input
              onBlur={(e) => {
                setIsFocused(false);
                onBlur(e);
              }}
              onFocus={() => setIsFocused(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              disabled={disabled}
              name={name}
              type={type}
              p={0}
              placeholder={placeholder}
              outline={"none"}
              _focus={{ outline: "none" }}
              h="auto"
              background={COLORS.TRANSPARENT.hex}
              w="full"
              border="none"
              _placeholder={{ fontSize: FONT_SIZES.REGULAR }}
              fontSize={FONT_SIZES.REGULAR}
              value={value}
              {...rest}
            />
          </Box>
          {!disableReset && !isEmpty() && (
            <Box
              mt={-1}
              cursor="pointer"
              whilehover={{ scale: 0.9875 }}
              whiletap={{ scale: 1.0125 }}
              ml={"auto"}
              onClick={() => setFieldValue(name, "")}
            >
              <Reset height="16px" width="16px" />
            </Box>
          )}
        </Flex>
      </Box>
      {meta.touched && meta.error && (
        <Box my={2} ml={1}>
          <Paragraph color={COLORS.DANGER.T500} size={FONT_SIZES.EXTRA_SMALL}>
            {meta.error}
          </Paragraph>
        </Box>
      )}
    </Box>
  );
};

export default InputField;
