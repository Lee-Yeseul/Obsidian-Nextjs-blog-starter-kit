import { CompoundItem } from "@/types";

export default function Card({ children, className }: CompoundItem) {
  return <div className={className}>{children}</div>;
}

function Images({ children, className }: CompoundItem) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border-[0px] border-solid border-gray-300 ${className}`}
    >
      {children}
    </div>
  );
}

function Description({ children, className }: CompoundItem) {
  return (
    <div
      className={`flex w-full flex-col items-start justify-center pt-3 leading-5 ${className}`}
    >
      {children}
    </div>
  );
}

Card.Description = Description;
Card.Images = Images;
