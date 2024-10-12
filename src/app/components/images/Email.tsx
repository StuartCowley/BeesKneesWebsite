import * as React from "react"

function Email({ className, height = "96px", width = "96px"}: {
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
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className={className}
    >
      <path d="M22.8 1.8H1.2C0.54 1.8 0 2.34 0 3v18c0 .66.54 1.2 1.2 1.2h21.6c.66 0 1.2-.54 1.2-1.2V3c0-.66-.54-1.2-1.2-1.2zm.4 18.4a.4.4 0 01-.4.4H1.2a.4.4 0 01-.4-.4V3a.4.4 0 01.4-.4h21.6a.4.4 0 01.4.4v17.2z" fill="currentColor" />
      <path d="M22.004 3.92a.4.4 0 00-.292.088L12.69 10.927a.8.8 0 01-1.029 0L2.288 4.007a.4.4 0 00-.515.613l9.372 7.871c.604.5 1.484.5 2.088 0l9.371-7.87a.4.4 0 00.05-.565.4.4 0 00-.25-.136zM7.694 13.5a.4.4 0 00-.385.124L2.095 18.88a.4.4 0 10.584.546l5.214-5.256a.4.4 0 00-.2-.67zM16.686 13.605a.4.4 0 10-.584.546l5.214 5.257a.4.4 0 00.584-.547l-5.214-5.256z" fill="currentColor" />
    </svg>
  )
}

export default Email
