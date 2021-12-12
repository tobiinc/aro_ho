import { ReactElement } from "react";
import useStyles from "./styles";

export interface timeSlotProps {
  slot: {
    start_time: string;
    end_time: string;
    day: string;
    start: string;
    end: string;
    unixTimeStamp: number;
    isSelected: boolean;
    isBlocked: boolean;
  };
}
const SelectedSlot = ({ slot }: timeSlotProps): ReactElement => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div>{slot.day}</div>
      <div>
        {slot.start} / {slot.end}
      </div>
    </div>
  );
};

export default SelectedSlot;