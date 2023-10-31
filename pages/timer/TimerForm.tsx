import Input from "../../components/shared/form/Input";

import classes from "./TimerForm.module.scss";

interface IProps {
  Description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  TimeInMinutes: number;
  setTimeInMinutes: React.Dispatch<React.SetStateAction<number>>;
  TimerStarted: boolean;
  setTimerStarted: React.Dispatch<React.SetStateAction<boolean>>;
  style?: object;
}

const TimerForm: React.FC<IProps> = ({
  Description,
  TimeInMinutes,
  setTimeInMinutes,
  setDescription,
  style,
}) => {
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10) || 0;
    setTimeInMinutes(inputValue);
  };

  return (
    <form className={classes.Container} style={style} onSubmit={() => {}}>
      <Input
        name="time"
        type="number"
        onChange={handleTimeChange}
        placeholder="Enter time in Seconds"
        label="Enter time in Seconds"
        value={TimeInMinutes?.toString()}
      />
      <Input
        name="desc"
        onChange={(e: any) => setDescription(e.target.value)}
        value={Description}
        placeholder="Short Description"
        label="Short Description"
        pattern="."
      />
    </form>
  );
};

export default TimerForm;
