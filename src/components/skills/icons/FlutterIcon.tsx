interface Props {
  className?: string;
}

const FlutterIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 48 48" width="48" height="48">
    <linearGradient
      id="gFTOxFpGMtrTwKmyJmDVma"
      x1="34.31"
      x2="21.223"
      y1="47.31"
      y2="34.223"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#0176d0"></stop>
      <stop offset=".454" stopColor="#0275ce"></stop>
      <stop offset=".617" stopColor="#0472c7"></stop>
      <stop offset=".733" stopColor="#076bbc"></stop>
      <stop offset=".827" stopColor="#0d63ab"></stop>
      <stop offset=".907" stopColor="#135895"></stop>
      <stop offset=".933" stopColor="#16538c"></stop>
    </linearGradient>
    <polygon
      fill="url(#gFTOxFpGMtrTwKmyJmDVma)"
      points="37,44 25,44 14,33 20,27"
    ></polygon>
    <polygon fill="#50e6ff" points="5,24 25,4 37,4 11,30"></polygon>
    <polygon fill="#50e6ff" points="37,22 20,39 14,33 25,22"></polygon>
    <rect
      width="8.485"
      height="8.485"
      x="15.757"
      y="28.757"
      fill="#35c1f1"
      transform="rotate(-45.001 20 33)"
    ></rect>
  </svg>
);

export { FlutterIcon };
