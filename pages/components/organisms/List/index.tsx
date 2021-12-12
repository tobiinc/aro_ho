import { ReactElement, useEffect, useState } from "react";
import moment from "moment";
import TimeSlot from "../../atoms/TimeSlot";
import SelectedSlot from "../../atoms/SelectedSlot";
import useStyles from "./styles";

export interface timeSlotProps {
  start_time: string;
  end_time: string;
  day: string;
  start: string;
  end: string;
  unixTimeStamp: number;
  isSelected: boolean;
  isBlocked: boolean;
}
export interface viewDataProps {
  id: number;
  name: string;
  time_slots: timeSlotProps[];
  hasSelection: boolean;
}
const List = (): ReactElement => {
  const handleChange = (
    selectedItem: timeSlotProps,
    companyId: number,
    finalData: viewDataProps[],
    alreadySelected: boolean,
    alreadyBlocked: boolean,
    hasSelection: boolean
  ) => {
    const renderData = finalData.map((item) => {
      return {
        ...item,
        time_slots: item.time_slots.map(function (slot) {
          const isTimeStamp = slot.unixTimeStamp === selectedItem.unixTimeStamp;
          const isCompany = item.id !== companyId;
          const selected =
            isTimeStamp && item.id === companyId && !alreadySelected;
          if (!alreadyBlocked && !alreadySelected && !hasSelection) {
            return {
              ...slot,
              isSelected: selected || (slot.isSelected && !alreadyBlocked),
              isBlocked:
                (isTimeStamp && isCompany && !alreadySelected) ||
                slot.isBlocked,
            };
          }
          if (alreadySelected) {
            return {
              ...slot,
              isSelected: isCompany && slot.isSelected,
              isBlocked:
                slot.unixTimeStamp === selectedItem.unixTimeStamp
                  ? false
                  : slot.isBlocked,
            };
          } else {
            return {
              ...slot,
            };
          }
        }, []),
      };
    });
    return setfinalData(renderData);
  };

  const styles = useStyles();
  const [finalData, setfinalData] = useState<viewDataProps[]>([]);
  useEffect(() => {
    const url = "http://127.0.0.1:3000/companys";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        let json = await response.json();
        json = json.map((item: viewDataProps) => {
          return {
            ...item,
            hasSelection: false,
            time_slots: item.time_slots.map(function (slot) {
              return {
                ...slot,
                isSelected: false,
                isBlocked: false,
                unixTimeStamp: Date.parse(slot.start_time),
                start: moment(slot.start_time).format("hh:mm"),
                end: moment(slot.end_time).format("hh:mm"),
                day: moment(slot.start_time).format("dd"),
              };
            }, []),
          };
        });
        setfinalData(json);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.root}>
      {finalData &&
        finalData.map((item: viewDataProps) => {
          const selectedItem = item.time_slots.filter((item) => {
            return item.isSelected;
          });
          const hasSelection = selectedItem.length !== 0;

          return (
            <div key={item.id} className={styles.company}>
              <header className={styles.header}>
                <h2>{item.name}</h2>
                {item.time_slots.map((slot: timeSlotProps, i) => {
                  return (
                    slot.isSelected && <SelectedSlot key={i} slot={slot} />
                  );
                })}
              </header>
              {item.time_slots.map((slot: timeSlotProps, i: number) => {
                const prev = i === 0 ? i : i - 1;
                return (
                  <article
                    key={`${item.id}-${slot.unixTimeStamp}`}
                    className={styles.slot}
                    onClick={() =>
                      handleChange(
                        slot,
                        item.id,
                        finalData,
                        slot.isSelected,
                        slot.isBlocked,
                        hasSelection
                      )
                    }
                  >
                    {(slot.day !== item.time_slots[prev].day || i === 0) && (
                      <h3>{slot.day}</h3>
                    )}
                    <TimeSlot timeSlot={slot} />
                  </article>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default List;
