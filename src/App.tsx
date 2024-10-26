import { FC, useState } from "react";
import { ButtonWidget } from "./components/ButtonWidget";

const App: FC = () => {
  const [threshold, setThreshold] = useState<number | null>(100);

  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-950 select-none justify-center items-center">
      <div className="flex flex-col w-fit gap-8">
        <div className="text-emerald-400 font-bold text-4xl select-none flex flex-row gap-2">
          <h1>Mouse tester</h1>
        </div>
        <section className="flex flex-col text-white w-fit">
          <label htmlFor="threshold" className="font-bold text-lg text-red-400">
            Threshold
          </label>
          <span className="text-sm text-neutral-300">
            change the threshold to better suit your test case
          </span>
          <input
            className="appearance-none bg-neutral-800 h-2 my-4"
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
            className="bg-neutral-800 px-4 py-2 text-lg rounded-sm text-white outline-none w-96"
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
    </div>
  );
};

export default App;
