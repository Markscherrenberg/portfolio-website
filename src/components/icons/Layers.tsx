export default function Layers({ ...rest }: { [x: string]: any }) {
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
        d="M32.6118 12.9087L18.5888 4.5L4.56574 12.9087L18.5888 21.322L32.6118 12.9087ZM18.5888 7.23323L28.0471 12.9087L18.5888 18.5888L9.1305 12.9087L18.5888 7.23323ZM32.6776 20.3088L18.5888 28.7621L4.5 20.3088V23.0479L18.5888 31.5L32.6776 23.0479V20.3088ZM32.6776 15.2239V17.9618L18.5888 26.4151L4.5 17.9618V15.2239L18.5888 23.6771L32.6776 15.2239Z"
        fill="currentColor"
      />
    </svg>
  );
}
