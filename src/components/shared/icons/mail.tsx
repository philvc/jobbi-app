import React from "react";

const Email = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3.75H3C2.58579 3.75 2.25 4.08579 2.25 4.5V13.5C2.25 13.9142 2.58579 14.25 3 14.25H15C15.4142 14.25 15.75 13.9142 15.75 13.5V4.5C15.75 4.08579 15.4142 3.75 15 3.75ZM3 2.25C1.75736 2.25 0.75 3.25736 0.75 4.5V13.5C0.75 14.7426 1.75736 15.75 3 15.75H15C16.2426 15.75 17.25 14.7426 17.25 13.5V4.5C17.25 3.25736 16.2426 2.25 15 2.25H3Z"
        fill="#23225B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.92385 5.51982C4.18903 5.20161 4.66195 5.15862 4.98016 5.42379L8.51988 8.37356C8.79802 8.60534 9.20202 8.60534 9.48016 8.37356L13.0199 5.42379C13.3381 5.15862 13.811 5.20161 14.0762 5.51982C14.3414 5.83803 14.2984 6.31095 13.9802 6.57612L10.4404 9.52589C9.60603 10.2212 8.39401 10.2212 7.55961 9.52589L4.01988 6.57612C3.70167 6.31095 3.65868 5.83803 3.92385 5.51982Z"
        fill="#23225B"
      />
    </svg>
  );
};

export default Email;
