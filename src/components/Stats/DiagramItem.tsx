interface DiagramItemProps {
  completedRounds: number;
  max: number;
}

export const DiagramItem = ({ completedRounds, max }: DiagramItemProps) => {
  const height = (100 / max) * completedRounds;

  return (
    <li
      className="h-[150px] w-[25px] dark:bg-primary bg-primary-dark rounded-large overflow-hidden
    flex flex-col"
    >
      <div
        style={{ height: height + "%" }}
        className={`mt-auto mb-0 bg-active `}
      />
    </li>
  );
};
