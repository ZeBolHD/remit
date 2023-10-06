import { DiagramItem } from "./DiagramItem";

const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

export const Diagram = () => {
  const maxRounds = 10;

  return (
    <div className="w-full mt-[50px]">
      <ul className="flex w-full justify-between ">
        {Array.from({ length: 7 }).map((_, i) => (
          <DiagramItem
            key={i}
            dayOfWeek={daysOfWeek[i]}
            completedRounds={Math.random() * 10}
            max={maxRounds}
          />
        ))}
      </ul>
    </div>
  );
};
