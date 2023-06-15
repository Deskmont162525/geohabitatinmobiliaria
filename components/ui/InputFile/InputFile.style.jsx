import { makeStyles } from "@material-ui/core";

export const useStylesInputFile = makeStyles((theme) => ({
  containerInput: {
    margin: "20px 0px",
  },
  input: {
    "& .MuiInputBase-input": {
      height: "26px",
      border: "1px solid #E6E6E6",
      padding: "8px 10px",
    },
  },
  btnFile: {
    background: "white",
    border: "1px solid #262626",
    borderRadius: 0,
    height: 44,
    textTransform: "initial",
    "&:hover": {
      background: "white",
    },
  },
  text: {
    fontSize: 18,
    [theme.breakpoints.down(500)]: {
      fontSize: 14,
    },
  },
  error: {
    fontSize: "0.75rem",
    color: "red",
    marginTop: 3,
  },
  success: {
    fontSize: "0.75rem",
    color: "#008f39",
    marginTop: 3,
  },
}));
