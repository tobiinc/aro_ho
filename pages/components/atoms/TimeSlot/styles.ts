import { makeStyles } from "@material-ui/styles";
interface StyleProps {
  isSelected: boolean;
  isBlocked: boolean;
}
export default makeStyles(
  () => {
    return {
      root: ({ isSelected, isBlocked }: StyleProps) => {
        let styles = {};
        if (isSelected) {
          styles = {
            background: "#282828",
            color: "#FAFAFA",
          };
        }
        if (isBlocked) {
          styles = {
            opacity: 0.2,
            cursor: "not-allowed",
          };
        }
        return {
          background: "#FAFAFA",
          cursor: "pointer",
          padding: 10,
          textAlign: "center",
          ...styles,
        };
      },
    };
  },
  { name: "TimeSlot" }
);
