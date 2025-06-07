import { ButtonClickBox } from "@/components/ButtonClickBox";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Constant, MouseButtonType } from "@/constants";
import { Repeat2, RotateCcw, Settings2 } from "lucide-react";
import { FC, useState } from "react";

export type Click = {
  type: MouseButtonType;
  time: number;
};

const App: FC = () => {
  const [threshold, setThreshold] = useState<number | null>(
    Constant.Threshold.Default
  );

  const [clicks, setClicks] = useState<Array<Click>>([]);

  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-50 dark:bg-neutral-950 select-none justify-center items-center gap-4">
      <ModeToggle />
      <div className="flex flex-col items-center">
        <h1>Tapper</h1>
        <span className="text-sm">
          test your mouse by detecting double clicks
        </span>
      </div>
      <ButtonClickBox
        clicks={clicks}
        onClick={(click) => setClicks((og) => [...og, click])}
      />
      <div className="flex flex-row gap-2">
        {clicks.length > 0 && (
          <Button
            variant="outline"
            onClick={(event) => {
              event.stopPropagation();
              setClicks([]);
            }}
          >
            <RotateCcw />
            Reset
          </Button>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Settings2 />
              Advanced
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="flex flex-col gap-2">
            <Label htmlFor="threshold">Threshold: {threshold}ms</Label>
            <Slider
              value={[threshold ?? 0]}
              min={0}
              max={1000}
              step={1}
              onValueChange={(value) => {
                const num = value[0];
                setThreshold(num);
              }}
              className="my-2"
            />
            <div className="text-xs text-neutral-600 dark:text-neutral-300 italic w-full text-end">
              max error-free interval between clicks
            </div>
            <Button
              className="bg-foreground hover:bg-foreground/80"
              onClick={() => setThreshold(Constant.Threshold.Default)}
            >
              <Repeat2 />
              reset
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default App;
