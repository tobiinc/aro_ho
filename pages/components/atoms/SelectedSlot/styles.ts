import { makeStyles } from "@material-ui/styles";
export default makeStyles(
  () => {
    return {
      root: {
        background: "#282828",
        color: "#f6f6f7",
        padding: 5,
        fontWeight: "bold",
        textAlign: "center",
      },
    };
  },
  { name: "SelectedSlot" }
);
