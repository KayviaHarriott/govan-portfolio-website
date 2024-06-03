interface SectionHeaderProps {
  subtext?: string;
  title: string;
  text?: string;
  stylePreference?: {
    darkBackground?: true;
    width?: number;
    leftAligned?: true;
    twoColumns?: true;
  };
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtext,
  title,
  text,
  stylePreference,
}) => {
  return (
    <div
      className={`${
        stylePreference?.leftAligned ? "text-left" : "text-center"
      } ${stylePreference?.twoColumns ? "flex justify-between" : "max-w-[520px] "}`}
    >
      <div>
        <h5 className="text-[#546E7A] uppercase text-[400] text-[14px] text-subtext-custom">
          {subtext}
        </h5>
        <h1
          className={`text-[${
            stylePreference?.darkBackground ? `#ECEFF1` : `#263238`
          }] text-[32px] font-[700] text-title-custom`}
        >
          {title}
        </h1>
      </div>
      <p className={`text-[#37474F] ${stylePreference?.twoColumns ? "max-w-[520px]" : " "}`}>{text}</p>
    </div>
  );
};
