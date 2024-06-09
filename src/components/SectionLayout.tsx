import { ReactNode } from "react";

interface SectionLayoutProps {
  backgroundColor: string;
  content: ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  backgroundColor,
  content,
}) => {
  return <div className={`bg-[${backgroundColor}]`}>{content}</div>;
};
