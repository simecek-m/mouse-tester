import { FC, useState } from "react";
import { ButtonWidget } from "./components/ButtonWidget";
import MouseLogo from "./assets/mouse.svg?react";

const App: FC = () => {
  const [threshold, setThreshold] = useState<number | null>(100);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-neutral-900 select-none">
      <div className="text-emerald-400 font-bold text-4xl m-12 select-none flex flex-row gap-2">
        <MouseLogo className="fill-emerald-400 w-12 h-12" />
        <h1>Mouse tester</h1>
      </div>
      <section className="w-full flex flex-row justify-center items-center">
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
      <section className="flex flex-col text-white p-2">
        <label htmlFor="threshold" className="font-bold text-xl text-red-400">
          Threshold
        </label>
        <span>change the threshold to better suit your test case</span>
        <input
          className="appearance-none bg-neutral-600 h-2 my-4"
          type="range"
          min="0"
          max="1000"
          value={threshold ?? 0}
          onChange={(e) => {
            try {
              const value = e.target.value;
              const num = parseInt(value);
              setThreshold(num);
            } catch (error) {
              console.error(error);
            }
          }}
        />
        <input
          className="bg-neutral-700 px-4 py-2 text-lg rounded-sm text-white outline-none w-96"
          value={threshold ?? ""}
          type="number"
          onChange={(e) => {
            try {
              const value = e.target.value;
              if (value == "") {
                setThreshold(null);
              }
              const num = parseInt(e.target.value);
              if (num >= 0 && num <= 1000) {
                setThreshold(num);
              }
            } catch (error) {
              console.error(error);
            }
          }}
        />
        <div className="text-xs text-neutral-300 italic w-full text-end">
          max error-free interval between clicks in millisecond
        </div>
      </section>
    </div>
  );
};

export default App;
