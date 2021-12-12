import { makeStyles } from "@material-ui/styles";
export default makeStyles(
  () => {
    return {
      root: {
        background: "#CCC",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        width: 1000,
        margin: "auto",
        ["@media (max-width: 1200px)"]: {
          width: "auto",
        },
        ["@media (max-width: 600px)"]: {
          flexDirection: "column",
        },
      },
      company: {
        backgroundColor: "#858585",
        margin: 10,
        padding: 20,
        width: "33%",
        ["@media (max-width: 600px)"]: {
          width: "100%",
        },
      },
      header: {
        height: 90,
      },
    };
  },
  { name: "List" }
);
