import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import Link from "next/link";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  author: string;
  href: string;
  date: string;
}

export default function BlogCard({
  category,
  title,
  description,
  author,
  href,
  date,
}: BlogCardProps) {
  return (
    <Link href={href} className="group">
      <p className="text-sm text-primary-50 font-semibold underline group-hover:text-accent-300">
        {category}
      </p>
      <div className="flex justify-between items-center my-3">
        <h3 className="font-display text-primary-50 text-2xl font-semibold">
          {title}
        </h3>
        <ArrowUpRightIcon className="text-primary-50 w-[18px] group-hover:text-accent-300" />
      </div>
      <p className="text-primary-300 text-ellipsis line-clamp-3">
        {description}
      </p>
      <p className="mt-8 text-primary-50 font-medium">{author}</p>
      <p className="text-primary-400">
        <time dateTime={moment(date).toISOString()}>
          {moment(date).format("DD MMM YYYY")}
        </time>
      </p>
    </Link>
  );
}
