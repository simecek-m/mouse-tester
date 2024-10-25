import { FC } from "react";
import { ClickArea } from "./components/ClickArea";
import MouseLogo from "./assets/mouse.svg?react";

const App: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-neutral-900">
      <div className="text-emerald-400 font-bold text-4xl m-12 select-none flex flex-row gap-2">
        <MouseLogo className="fill-emerald-400 w-12 h-12" />
        <h1>Mouse tester</h1>
      </div>
      <div className="h-full w-full flex flex-row justify-center items-center">
        <ClickArea title="Left button" />
        <ClickArea title="Middle button" />
        <ClickArea title="Right button" />
      </div>
    </div>
  );
};

export default App;
