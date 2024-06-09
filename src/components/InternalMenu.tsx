interface InternalMenuProps {
  links: { label: string; ref: React.RefObject<HTMLDivElement> }[];
}

export const InternalMenu: React.FC<InternalMenuProps> = ({ links }) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#263238] w-fit rounded-[24px] py-[24px] px-[18px] text-[#CFD8DC] font-[700]">
     <div className="pr-[56px]">
        <ul className="flex flex-col gap-[16px]">
          {links.map((item, index) => (
            <li
              className="py-[6px] px-[16px]"
              key={index}
              onClick={() => scrollToRef(item.ref)}
            >
              {item.label}
            </li>
          ))}
        </ul>
     </div>
    </div>
  );
};
