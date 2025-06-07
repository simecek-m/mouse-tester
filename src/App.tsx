import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { FC, useState } from "react";
import { ButtonWidget } from "./components/ButtonWidget";

const App: FC = () => {
  const [threshold, setThreshold] = useState<number | null>(100);

  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-50 dark:bg-neutral-950 select-none justify-center items-center">
      <div className="flex flex-col w-fit gap-8">
        <div className="text-emerald-600 dark:text-emerald-400 font-bold text-4xl select-none flex flex-row gap-2">
          <h1>Tapper</h1>
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
        <PopoverTrigger className="mt-4">Advanced</PopoverTrigger>
        <PopoverContent side="top">
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default App;
