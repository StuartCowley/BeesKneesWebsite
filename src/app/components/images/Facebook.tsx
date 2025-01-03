import * as React from "react";

function Facebook({
  className,
  height = "96px",
  width = "96px",
}: {
  className: string;
  height: string;
  width: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 96 96"
      xmlSpace="preserve"
      className={className}
    >
      <path
        d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 00-1.96 1.961v15.803a1.96 1.96 0 001.96 1.96H36.57v39.876a1.96 1.96 0 001.96 1.96h16.352a1.96 1.96 0 001.96-1.96V54.287h14.654a1.96 1.96 0 001.96-1.96l.006-15.803a1.963 1.963 0 00-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 001.959-1.96V1.98A1.96 1.96 0 0072.089.02z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Facebook;
