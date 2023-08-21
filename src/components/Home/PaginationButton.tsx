import { FilterProps } from "@/data/types";
import Link from "next/link";
import { generateLink } from "@/utils/links";

const PaginationButton = ({
  searchParams,
  content,
  isActive,
}: {
  searchParams?: FilterProps;
  content: string | number;
  isActive?: boolean;
}) => {
  const classes = !isActive
    ? "bg-bg-primary text-secondary text-center text-[18px] leading-6 bg-parimary rounded-full p-4 w-[56px] h-[56px] aspect-[56/56] gap-[10px] border border-1 border-[#333333] shadow-[0px_16px_16px_4px_rgba(0, 0, 0, 0.01)]"
    : "bg-bg-primary text-secondary text-center text-[18px] leading-6 bg-parimary rounded-full p-4 w-[56px] h-[56px] aspect-[56/56] gap-[10px] border border-1 border-btn-primary shadow-[0px_16px_16px_4px_rgba(0, 0, 0, 0.01)]";

  if (!searchParams) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <Link href={generateLink(searchParams)} className={classes}>
      {content}
    </Link>
  );
};

export default PaginationButton;
