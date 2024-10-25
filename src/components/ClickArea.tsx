import { FC } from "react";

interface ClickAreaProps {
  title: string;
}

export const ClickArea: FC<ClickAreaProps> = ({ title }) => {
  return (
    <div className="bg-neutral-800 m-4 w-80 h-80 rounded-lg">
      <h3 className="w-450px w-full text-center text-lg bg-emerald-50 text-black font-semibold p-2 rounded-lg select-none">
        {title}
      </h3>
    </div>
  );
};
