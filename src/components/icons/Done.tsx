export default function Done({ ...rest }: { [x: string]: any }) {
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
        d="M18 4.5C15.33 4.5 12.7199 5.29176 10.4998 6.77516C8.27974 8.25856 6.54941 10.367 5.52763 12.8338C4.50585 15.3006 4.2385 18.015 4.7594 20.6337C5.28031 23.2525 6.56606 25.6579 8.45406 27.5459C10.3421 29.4339 12.7475 30.7197 15.3663 31.2406C17.985 31.7615 20.6994 31.4942 23.1662 30.4724C25.633 29.4506 27.7414 27.7203 29.2248 25.5002C30.7082 23.2801 31.5 20.67 31.5 18C31.4963 14.4207 30.0728 10.9891 27.5419 8.45811C25.0109 5.92716 21.5793 4.50367 18 4.5ZM24.1062 14.8846L17.3354 22.5C17.2447 22.603 17.1342 22.6867 17.0105 22.7461C16.8868 22.8056 16.7525 22.8396 16.6154 22.8461C16.4874 22.848 16.3604 22.8245 16.2415 22.7769C16.1227 22.7294 16.0145 22.6588 15.9231 22.5692L11.9631 19.0246C11.7719 18.8282 11.665 18.5649 11.665 18.2908C11.665 18.0167 11.7719 17.7534 11.9631 17.5569C12.1578 17.3625 12.4217 17.2532 12.6969 17.2532C12.9721 17.2532 13.2361 17.3625 13.4308 17.5569L16.5462 20.3262L22.6108 13.5C22.7962 13.2973 23.0535 13.1752 23.3277 13.1597C23.6019 13.1442 23.8714 13.2365 24.0785 13.4169C24.2767 13.6079 24.3909 13.8698 24.3961 14.145C24.4013 14.4202 24.297 14.6863 24.1062 14.8846Z"
        fill="currentColor"
      />
    </svg>
  );
}