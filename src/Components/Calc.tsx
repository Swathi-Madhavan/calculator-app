import { Box, Button } from "@mui/material";
import { appColorsData } from "../Themes/ColorPallet";
import BackIcon from "../Assets/BackIcon";

export default function Calc() {
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
          <input type="text"></input>
        </div>
        <div>
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
            &#181;
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
            sin
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
          >
            /
          </Button>
          <Button
            sx={{
              width: "62px",
              height: "62px",
              borderRadius: "16px",
              color: "#339dff",
              fontSize: "24px",
              // margin: "0px 20px 0px 0px",
              backgroundColor: appColorsData.blueButtonColor,
              textTransform: "none",
              "&:hover": {
                backgroundColor: appColorsData.blueButtonColor,
                color: "#339dff",
              },
            }}
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
          >
            -
          </Button>
        </div>
      </Box>
    </Box>
  );
}
