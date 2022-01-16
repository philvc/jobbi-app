import { SVGProps } from "react";

const EditPen = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.34317 1.22358L2.48428 8.1196C2.08145 8.5246 1.80263 9.03619 1.68059 9.59422L0.832905 13.4701C0.728593 13.9445 0.8744 14.439 1.21981 14.7823C1.56522 15.1257 2.06271 15.2706 2.53992 15.1669L6.43117 14.3261C6.99751 14.2037 7.5163 13.9199 7.92484 13.5091L14.7849 6.61005C15.3401 6.05228 15.3378 5.15355 14.7798 4.59861L11.3792 1.21741C11.1088 0.948948 10.742 0.798662 10.3599 0.79982C9.97776 0.800978 9.61185 0.953485 9.34317 1.22358ZM3.59457 13.5996L2.39941 12.4043L3.00958 9.59961L6.39941 12.9927L3.59457 13.5996Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default EditPen;