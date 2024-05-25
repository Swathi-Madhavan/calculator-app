import { Box, Button, Typography } from "@mui/material";
import { appColorsData } from "../Themes/ColorPallet";
import BackIcon from "../Assets/BackIcon";
import React, { useState } from "react";

function convertToString(num: number): string {
  return num.toString();
}

export default function Calc() {
  const [operandOne, setOperandOne] = React.useState<string | undefined>("");
  const [operandTwo, setOperandTwo] = React.useState<string | undefined>("");
  const [operator, setOperator] = React.useState("");
  const [result, setResult] = React.useState<string | undefined>("");

  function handleOperands(value: string) {
    if (operator === "") {
      setOperandOne((prevVal) => prevVal + value);
    } else {
      setOperandTwo((prevVal) => prevVal + value);
    }
  }

  function handleOperator(operatorValue: string) {
    setOperator(operatorValue);
  }

  function calculateValue(
    operator: string,
    operandOne?: string,
    operandTwo?: string
  ) {
    if (operandOne && operandTwo) {
      const numoperandOne = +operandOne;
      const numoperandTwo = +operandTwo;

      switch (operator) {
        case "+":
          return convertToString(numoperandOne + numoperandTwo);
        case "-":
          return convertToString(numoperandOne - numoperandTwo);
        case "*":
          return convertToString(numoperandOne * numoperandTwo);
        case "/":
          return convertToString(numoperandOne / numoperandTwo);
      }
    }
  }

  function handleCalculateValue() {
    setResult(calculateValue(operator, operandOne, operandTwo));
  }

  function calcDisplay(
    operandOne?: string,
    operandTwo?: string,
    operator?: string,
    result?: string
  ) {
    if (result === "") {
      return `${operandOne} ${operator} ${operandTwo}`;
    } else {
      return result;
    }
  }

  function clearAll() {
    setOperandOne("");
    setOperandTwo("");
    setOperator("");
    setResult("");
  }

  function handleDelete() {
    if (operandTwo) {
      setOperandTwo((prev) => prev?.slice(0, -1));
    } else if (operator) {
      setOperator((prev) => prev?.slice(0, -1));
    } else if (operandOne) {
      setOperandOne((prev) => prev?.slice(0, -1));
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
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
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
            {calcDisplay(operandOne, operandTwo, operator, result)}
          </Typography>
        </div>
        {/* <div>
                <Button
                  sx={{
                    width: "62px",
                    height: "40px",
                    borderRadius: "24px",
                    margin: "0px 20px 0px 0px",
                    backgroundColor: appColorsData.blackButtonColor,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: appColorsData.blackButtonColor,
                    },
                  }}
                >
                  e
                </Button>
                <Button
                  sx={{
                    width: "62px",
                    height: "40px",
                    borderRadius: "24px",
                    margin: "0px 20px 0px 0px",
                    backgroundColor: appColorsData.blackButtonColor,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: appColorsData.blackButtonColor,
                    },
                  }}
                >
                  &#181;
                </Button>
                <Button
                  sx={{
                    width: "62px",
                    height: "40px",
                    borderRadius: "24px",
                    margin: "0px 20px 0px 0px",
                    backgroundColor: appColorsData.blackButtonColor,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: appColorsData.blackButtonColor,
                    },
                  }}
                >
                  sin
                </Button>
                <Button
                  sx={{
                    width: "62px",
                    height: "40px",
                    borderRadius: "24px",
                    // margin: "0px 20px 0px 0px",
                    backgroundColor: appColorsData.blackButtonColor,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: appColorsData.blackButtonColor,
                    },
                  }}
                >
                  deg
                </Button>
              </div> */}
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <Button
            sx={{
              width: "62px",
              height: "62px",
              borderRadius: "16px",
              color: "#a5a5a5",
              fontSize: "24px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.grayButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.grayButtonColor,
                color: "#a5a5a5",
              },
            }}
            onClick={() => clearAll()}
          >
            Ac
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "62px",
              borderRadius: "16px",
              color: "#a5a5a5",
              fontSize: "24px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.grayButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.grayButtonColor,
                color: "#a5a5a5",
              },
            }}
            onClick={handleDelete}
          >
            <BackIcon />
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "62px",
              borderRadius: "16px",
              color: "#339dff",
              fontSize: "24px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blueButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blueButtonColor,
                color: "#339dff",
              },
            }}
            onClick={() => handleOperator("/")}
          >
            /
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "62px",
              borderRadius: "16px",
              color: "#339dff",
              fontSize: "32px",
              // margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blueButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blueButtonColor,
                color: "#339dff",
              },
            }}
            onClick={() => handleOperator("*")}
          >
            *
          </Button>
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("7")}
          >
            7
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("8")}
          >
            8
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("9")}
          >
            9
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              // margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blueButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blueButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperator("-")}
          >
            -
          </Button>
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("4")}
          >
            4
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("5")}
          >
            5
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("6")}
          >
            6
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              flexGrow: "4",
              color: "#29a8ff",
              fontSize: "32px",
              // margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blueButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blueButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperator("+")}
          >
            +
          </Button>
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("1")}
          >
            1
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("2")}
          >
            2
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("3")}
          >
            3
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              flexGrow: "4",
              color: "#29a8ff",
              fontSize: "32px",
              // margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blueButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blueButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleCalculateValue()}
          >
            =
          </Button>
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              color: "#29a8ff",
              fontSize: "32px",
              margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blackButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blackButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands("0")}
          >
            0
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "60px",
              borderRadius: "16px",
              flexGrow: "4",
              color: "#29a8ff",
              fontSize: "32px",
              // margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blueButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blueButtonColor,
                color: "#29a8ff",
              },
            }}
            onClick={() => handleOperands(".")}
          >
            .
          </Button>
        </div>
      </Box>
    </Box>
  );
}
