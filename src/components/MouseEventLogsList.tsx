import { FC } from "react";
import { cn } from "../helpers";

interface MouseEventLogsListProps {
  events: Array<number>;
  threshold: number;
}

export const MouseEventLogsList: FC<MouseEventLogsListProps> = ({
  events,
  threshold,
}) => {
  if (events.length <= 1) {
    return null;
  } else {
    return (
      <div
        className="h-full overflow-auto w-full p-2 flex flex-col items-end gutter-stable"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
        {events.map((event, index) => {
          if (events.length > index + 1) {
            const prevTime: number = events[index + 1];
            const result = event - prevTime;
            return (
              <div key={index}>
                <span
                  className={cn("text-white me-1", {
                    "text-red-500 font-bold text-lg": result < threshold,
                  })}
                >
                  {result}
                </span>
                <span className="text-neutral-400">ms</span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
};
