import Logo from "@/assets/logo.svg?react";
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
import { Github, Repeat2, RotateCcw, Settings2 } from "lucide-react";
import { FC, useState } from "react";

export type Click = {
  type: MouseButtonType;
  times: number;
};

export type Clicks = {
  type: MouseButtonType;
  times: Array<number>;
};

const App: FC = () => {
  const [threshold, setThreshold] = useState<number>(
    Constant.Threshold.Default
  );

  const [clicks, setClicks] = useState<Clicks | null>();

  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-50 dark:bg-neutral-950 select-none justify-center items-center gap-4 p-4">
      <div className="flex flex-row absolute right-4 top-4 z-50 justify-center items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(Constant.Links.GitHub, "_blank")}
        >
          <Github />
        </Button>
        <ModeToggle />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
        <Logo className="stroke-primary stroke-12 w-48" />
        <div className="flex flex-col w-full text-center md:text-left">
          <h1>Tapper</h1>
          <span className="text-sm">
            test your mouse by detecting double clicks
          </span>
        </div>
      </div>
      <ButtonClickBox
        threshold={threshold}
        clicks={clicks ?? null}
        onClick={(click) => {
          if (clicks?.type === click.type) {
            const newClicks = {
              ...clicks,
              times: [Date.now(), ...clicks.times],
            };
            setClicks(newClicks);
          } else {
            const newClicks: Clicks = {
              type: click.type,
              times: [Date.now()],
            };
            setClicks(newClicks);
          }
        }}
      />
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-fit">
        {clicks && clicks.times.length > 0 && (
          <Button
            variant="outline"
            className="w-full md:w-fit"
            onClick={(event) => {
              event.stopPropagation();
              setClicks(null);
            }}
          >
            <RotateCcw />
            Reset
          </Button>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full md:w-fit">
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
