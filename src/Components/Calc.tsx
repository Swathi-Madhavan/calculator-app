import { Box, Button, Typography, styled } from "@mui/material";
import { appColorsData } from "../Themes/ColorPallet";
import BackIcon from "../Assets/BackIcon";
import { useState } from "react";

const EraseButton = styled(Button)({
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
});

const BlueButton = styled(Button)({
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
});

const GrayButton = styled(Button)({
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
});

const OPERATORS = ["+", "-", "*", "/"];

export default function Calc() {
  const [result, setResult] = useState<string>("");
  const [userInput, setUserInput] = useState("");

  function handleOperands(value: string) {
    setUserInput((prevVal) => {
      if (result !== "") {
        setResult("");
        if (prevVal === "" && OPERATORS.includes(value)) {
          return "0" + value;
        } else {
          return value;
        }
      }

      if (prevVal === "" && OPERATORS.includes(value)) {
        return "0" + value;
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
            {calcDisplay()}
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
        </div>
        <div
          style={{
            marginTop: "16px",
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
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <GrayButton onClick={() => handleOperands("4")}>4</GrayButton>
          <GrayButton onClick={() => handleOperands("5")}>5</GrayButton>
          <GrayButton onClick={() => handleOperands("6")}>6</GrayButton>
          <BlueButton
            sx={{
              margin: "0px",
            }}
            onClick={() => handleOperands("+")}
          >
            +
          </BlueButton>
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <GrayButton onClick={() => handleOperands("1")}>1</GrayButton>
          <GrayButton onClick={() => handleOperands("2")}>2</GrayButton>
          <GrayButton onClick={() => handleOperands("3")}>3</GrayButton>
          <BlueButton
            sx={{
              margin: "0px",
            }}
            onClick={() => handleCalculateValue()}
          >
            =
          </BlueButton>
        </div>
        <div
          style={{
            marginTop: "16px",
          }}
        >
          <GrayButton onClick={() => handleOperands("0")}>0</GrayButton>
          <BlueButton
            sx={{
              margin: "0px",
            }}
            onClick={() => handleOperands(".")}
          >
            .
          </BlueButton>
        </div>
      </Box>
    </Box>
  );
}
