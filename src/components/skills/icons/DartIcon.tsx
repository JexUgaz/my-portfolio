interface Props {
  className?: string;
}

const DartIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 48 48" width="48" height="48">
    <path
      fill="#1565c0"
      d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"
    ></path>
    <path
      fill="#42a5f5"
      d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"
    ></path>
    <path
      fill="#1565c0"
      d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"
    ></path>
    <polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43"></polygon>
  </svg>
);

export { DartIcon };
