import { ReactNode } from "react";

interface SectionLayoutProps {
  backgroundColor: string;
  content: ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  backgroundColor,
  content,
}) => {
  return (
    <div className={`bg-[${backgroundColor}]`}>
      <div className="flex">
        <div className="w-1/3"></div>
        <div className="w-2/3 py-[96px] pr-[120px] flex flex-col justify-center items-center">
          {" "}
          {content}
        </div>
      </div>
    </div>
  );
};
