export default function Cross({ ...rest }: { [x: string]: any }) {
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
        d="M28.5 9.55554L26.4445 7.5L18.75 15.1945L11.0555 7.5L9 9.55554L16.6945 17.25L9 24.9445L11.0555 27L18.75 19.3055L26.4445 27L28.5 24.9445L20.8055 17.25L28.5 9.55554Z"
        fill="currentColor"
      />
    </svg>
  );
}
