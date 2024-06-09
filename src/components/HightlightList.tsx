interface HighlightListProp {
  list: { label: string; highlight?: true }[];
}

export const HighlightList: React.FC<HighlightListProp> = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li
            className={`text-[24px] text-[#FDFDFD] font-[700] ${
              item.highlight ? "" : "text-opacity-30"
            } `}
          >
            {index + 1}. {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
