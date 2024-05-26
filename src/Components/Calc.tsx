/* eslint-disable no-eval */
import React from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { appColorsData } from "../Themes/ColorPallet";
import BackIcon from "../Assets/BackIcon";
import { useState } from "react";

const EraseButton = styled(Button)({
  width: "62px",
  height: "62px",
  borderRadius: "16px",
  color: "#a5a5a5",
  fontSize: "24px",
  backgroundColor: appColorsData.grayButtonColor,
  textTransform: "none",
  "&:hover": {
    backgroundColor: appColorsData.grayButtonColor,
    color: "#a5a5a5",
  },
});

const BlueButton = styled(Button)({
  width: "62px",
  height: "62px",
  borderRadius: "16px",
  color: "#339dff",
  fontSize: "24px",
  backgroundColor: appColorsData.blueButtonColor,
  textTransform: "none",
  "&:hover": {
    backgroundColor: appColorsData.blueButtonColor,
    color: "#339dff",
  },
});

const GrayButton = styled(Button)({
  width: "62px",
  height: "60px",
  borderRadius: "16px",
  color: "#29a8ff",
  fontSize: "32px",
  backgroundColor: appColorsData.blackButtonColor,
  textTransform: "none",
  "&:hover": {
    backgroundColor: appColorsData.blackButtonColor,
    color: "#29a8ff",
  },
});

const OPERATORS = ["+", "-", "*", "/"];

export default function Calc() {
  const [result, setResult] = useState<string>("");
  const [userInput, setUserInput] = useState("");

  function handleOperands(value: string) {
    setUserInput((prevVal) => {
      if (result !== "") {
        setResult("");
        if (OPERATORS.includes(value)) {
          return "0" + value;
        } else {
          return value;
        }
      }
      const lastChar = prevVal.slice(-1);
      if (prevVal === "" && OPERATORS.includes(value)) {
        return "0" + value;
      } else if (OPERATORS.includes(lastChar) && OPERATORS.includes(value)) {
        return prevVal.slice(0, -1) + value;
      } else {
        return prevVal + value;
      }
    });
  }

  function handleCalculateValue() {
    if (userInput) {
      setResult(eval(userInput));
    }
  }

  function calcDisplay() {
    if (result === "") {
      return userInput;
    } else {
      return `${userInput} = ${result}`;
    }
  }

  function clearAll() {
    setUserInput("");
    setResult("");
  }

  function handleDelete() {
    if (userInput) {
      setUserInput((prev) => prev?.slice(0, -1));
      if (result) {
        setResult("");
      }
    }
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: appColorsData.bodyBackColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: "linear-gradient(203deg, #17181a 105%, #17181a -4%)",
          padding: "40px 33px 40px 34px",
          borderRadius: "39px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Stack
          style={{
            justifyContent: "flex-start",
            height: "50px",
            backgroundColor: "#FFF",
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            style={{
              width: "100%",
              textAlign: "right",
              fontFamily: "poppins",
              // fontWeight: "500",
              fontSize: "20px",
              fontStyle: "normal",
              marginBottom: "20px",
              backgroundColor: appColorsData.whiteColor,
              height: "28px",
            }}
          >
            {calcDisplay()}
          </Typography>
        </Stack>
        <Stack
          flexDirection="row"
          style={{
            marginTop: "16px",
            gap: "20px",
          }}
        >
          <EraseButton sx={{}} onClick={() => clearAll()}>
            Ac
          </EraseButton>
          <EraseButton onClick={handleDelete}>
            <BackIcon />
          </EraseButton>
          <BlueButton onClick={() => handleOperands("/")}>/</BlueButton>
          <BlueButton
            sx={{
              fontSize: "32px",
              margin: "0px",
            }}
            onClick={() => handleOperands("*")}
          >
            *
          </BlueButton>
        </Stack>
        <Stack
          flexDirection="row"
          style={{
            marginTop: "16px",
            gap: "20px",
          }}
        >
          <GrayButton onClick={() => handleOperands("7")}>7</GrayButton>
          <GrayButton onClick={() => handleOperands("8")}>8</GrayButton>
          <GrayButton onClick={() => handleOperands("9")}>9</GrayButton>
          <BlueButton
            sx={{ margin: "0px" }}
            onClick={() => handleOperands("-")}
          >
            -
          </BlueButton>
        </Stack>

        <Stack
          flexDirection="row"
          justifyContent="start"
          alignItems="stretch"
          sx={{
            gap: "20px",
          }}
        >
          <Stack
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
          >
            <Stack
              flexDirection="row"
              style={{
                marginTop: "16px",
                gap: "20px",
              }}
            >
              <GrayButton onClick={() => handleOperands("4")}>4</GrayButton>
              <GrayButton onClick={() => handleOperands("5")}>5</GrayButton>
              <GrayButton onClick={() => handleOperands("6")}>6</GrayButton>
            </Stack>

            <Stack
              flexDirection="row"
              style={{
                marginTop: "16px",
                gap: "20px",
              }}
            >
              <GrayButton onClick={() => handleOperands("1")}>1</GrayButton>
              <GrayButton onClick={() => handleOperands("2")}>2</GrayButton>
              <GrayButton onClick={() => handleOperands("3")}>3</GrayButton>
            </Stack>
            <Stack
              flexDirection="row"
              style={{
                marginTop: "16px",
                gap: "20px",
                width: "100%",
              }}
            >
              <GrayButton
                sx={{
                  width: "100%",
                }}
                onClick={() => handleOperands("0")}
              >
                0
              </GrayButton>
              <BlueButton
                sx={{
                  margin: "0px",
                }}
                onClick={() => handleOperands(".")}
              >
                .
              </BlueButton>
            </Stack>
          </Stack>

          <Stack
            flexDirection="column"
            justifyContent="start"
            alignItems="stretch"
            sx={{
              gap: "20px",
              marginTop: "16px",
              flex: 1,
            }}
          >
            <Stack
              display="flex"
              flexDirection="column"
              sx={{
                flex: 1,
              }}
            >
              <BlueButton
                sx={{
                  margin: "0px",
                  height: "100%",
                }}
                onClick={() => handleOperands("+")}
              >
                +
              </BlueButton>
            </Stack>
            <Stack
              display="flex"
              flexDirection="column"
              sx={{
                flex: 1,
              }}
            >
              <BlueButton
                sx={{
                  margin: "0px",
                  height: "100%",
                }}
                onClick={() => handleCalculateValue()}
              >
                =
              </BlueButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
