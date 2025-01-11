export default function BurgerMenu({ ...rest }: { [x: string]: any }) {
  return (
    <svg
      {...rest}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.5 9H4.5V11.25H31.5V9ZM31.5 16.875H4.5V19.125H31.5V16.875ZM4.5 24.75H31.5V27H4.5V24.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
