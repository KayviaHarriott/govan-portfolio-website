interface SectionHeaderProps {
  subtext?: string;
  title: string;
  text?: string;
  stylePreference?: {
    darkBackground?: true;
    width?: number;
  };
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtext,
  title,
  text,
  stylePreference,
}) => {
  return (
    <div className="text-center max-w-[520px]">
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
      <p className="text-[#37474F]">{text}</p>
    </div>
  );
};
