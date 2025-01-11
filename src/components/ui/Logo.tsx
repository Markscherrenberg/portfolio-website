export default function Logo(props: { className?: string }) {
  return (
    <svg
      className={props?.className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#E5FF76" />
    </svg>
  );
}
