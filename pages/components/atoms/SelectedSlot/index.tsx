import { ReactElement } from "react";
import useStyles from "./styles";

export interface timeSlotProps {
  slot: {
    day: string;
    start: string;
    end: string;
  };
}
const SelectedSlot = ({
  slot: { day, start, end },
}: timeSlotProps): ReactElement => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      {day}
      <br />
      {start} / {end}
    </div>
  );
};

export default SelectedSlot;
