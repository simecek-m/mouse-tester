import { FC, useState } from "react";
import { ClickArea } from "./components/ClickArea";
import MouseLogo from "./assets/mouse.svg?react";

const App: FC = () => {
  const [threshold, setTreshold] = useState<number | null>(500);
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-neutral-900 select-none">
      <div className="text-emerald-400 font-bold text-4xl m-12 select-none flex flex-row gap-2">
        <MouseLogo className="fill-emerald-400 w-12 h-12" />
        <h1>Mouse tester</h1>
      </div>
      <section className="flex flex-col text-white p-2">
        <label htmlFor="threshold" className="font-bold text-emerald-400">
          Threshold
        </label>
        <input
          className="bg-neutral-700 px-4 py-2 text-lg rounded-lg text-white outline-none w-96"
          value={threshold ?? ""}
          type="number"
          onChange={(e) => {
            try {
              const value = e.target.value;
              if (value == "") {
                setTreshold(null);
              }
              const num = parseInt(e.target.value);
              if (num >= 0 && num < 1000) {
                setTreshold(num);
              }
            } catch (error) {
              console.error(error);
            }
          }}
        />
        <div className="text-xs text-neutral-300 italic w-full text-end">
          max error-free interval (ms)
        </div>
      </section>
      <section className="h-full w-full flex flex-row justify-center items-center">
        <ClickArea title="Left button" />
        <ClickArea title="Middle button" />
        <ClickArea title="Right button" />
      </section>
    </div>
  );
};

export default App;
