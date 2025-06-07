import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Constant } from "@/constants";
import { Repeat2, Settings2 } from "lucide-react";
import { FC, useState } from "react";
import { ButtonWidget } from "./components/ButtonWidget";

const App: FC = () => {
  const [threshold, setThreshold] = useState<number | null>(
    Constant.Threshold.Default
  );

  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-50 dark:bg-neutral-950 select-none justify-center items-center">
      <ModeToggle />
      <div className="flex flex-col w-fit gap-8">
        <div>
          <h1>Tapper</h1>
          <span className="italic opacity-80">
            test your mouse by detecting double clicks
          </span>
        </div>
        <section className="flex flex-row gap-8 w-fit">
          <ButtonWidget
            title="Left"
            buttonType="left"
            threshold={threshold ?? 0}
          />
          <ButtonWidget
            title="Middle"
            buttonType="middle"
            threshold={threshold ?? 0}
          />
          <ButtonWidget
            title="Right"
            buttonType="right"
            threshold={threshold ?? 0}
          />
        </section>
      </div>
      <Popover>
        <PopoverTrigger className="mt-4" asChild>
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
  );
};

export default App;
