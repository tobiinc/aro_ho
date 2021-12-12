import { ReactElement } from "react";
import useStyles from "./styles";

export interface timeSlotProps {
  timeSlot: {
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
const TimeSlot = ({
  timeSlot: { start, end, isSelected = true, isBlocked },
}: timeSlotProps): ReactElement => {
  const styles = useStyles({ isSelected, isBlocked });
  return (
    <div className={styles.root}>
      {start} / {end}
    </div>
  );
};

export default TimeSlot;
