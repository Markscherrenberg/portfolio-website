export default function PaperPlane({ ...rest }: { [x: string]: any }) {
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
        d="M29.9037 4.5L9.11075 25.2963V19.2727L5.17938 15.3447C4.89498 15.0611 4.68967 14.708 4.58384 14.3206C4.47801 13.9331 4.47533 13.5247 4.57606 13.1358C4.67679 12.747 4.87744 12.3913 5.15809 12.1039C5.43875 11.8166 5.78965 11.6076 6.176 11.4977L29.9037 4.5ZM16.7102 26.8712H10.7237L31.4976 6.08952L24.5156 29.8341C24.4068 30.2195 24.1983 30.5695 23.9112 30.8488C23.6241 31.128 23.2684 31.3266 22.8801 31.4246C22.6879 31.4744 22.4902 31.4997 22.2918 31.5C21.9901 31.5 21.6914 31.4404 21.4128 31.3246C21.1342 31.2087 20.8813 31.039 20.6686 30.8251L16.7102 26.8712Z"
        fill="currentColor"
      />
    </svg>
  );
}