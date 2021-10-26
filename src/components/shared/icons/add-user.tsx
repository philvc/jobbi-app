export const AddUser = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke="#293352"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3268 15.0759C12.8888 15.0255 12.4453 15 12.0001 15C10.0807 15 8.19395 15.4738 6.63126 16.3732C5.06914 17.2721 3.88136 18.5702 3.33103 20.1106C3.14522 20.6307 3.4162 21.203 3.93629 21.3888C4.45638 21.5746 5.02863 21.3036 5.21444 20.7835C5.57571 19.7723 6.39665 18.8157 7.62884 18.1066C8.64285 17.523 9.86387 17.1503 11.1581 17.0368C11.489 16.0601 12.3092 15.3092 13.3268 15.0759Z"
        fill="#293352"
      />
      <path
        d="M18 14L18 22"
        stroke="#293352"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22 18L14 18"
        stroke="#293352"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
