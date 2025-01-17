export default function MinusCircle({ ...rest }: { [x: string]: any }) {
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
        d="M18 4.5C10.5559 4.5 4.5 10.5559 4.5 18C4.5 25.4441 10.5559 31.5 18 31.5C25.4441 31.5 31.5 25.4441 31.5 18C31.5 10.5559 25.4441 4.5 18 4.5ZM18 29.25C11.7968 29.25 6.75 24.2033 6.75 18C6.75 11.7968 11.7968 6.75 18 6.75C24.2033 6.75 29.25 11.7968 29.25 18C29.25 24.2033 24.2033 29.25 18 29.25ZM12.375 16.875H23.625V19.125H12.375V16.875Z"
        fill="currentColor"
      />
    </svg>
  );
}
