interface Props {
  className?: string;
}

const SupabaseIcon: React.FC<Props> = ({ className = "" }) => (
  <svg
    className={className}
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <linearGradient
      id="paint0_linear"
      x1="53.973801"
      y1="54.973999"
      x2="94.163498"
      y2="71.829498"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"
    >
      <stop stopColor="#249361" id="stop8" />
      <stop offset="1" stopColor="#3ECF8E" id="stop10" />
    </linearGradient>
    <linearGradient
      id="paint1_linear"
      x1="36.1558"
      y1="30.577999"
      x2="54.484402"
      y2="65.080597"
      gradientUnits="userSpaceOnUse"
      gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"
    >
      <stop id="stop13" />
      <stop offset="1" stopOpacity="0" id="stop15" />
    </linearGradient>
    <path
      d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z"
      id="path2"
      fill="url(#paint0_linear)"
      strokeWidth="0.57177335"
    />
    <path
      d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z"
      id="path4"
      fill="url(#paint1_linear)"
      fillOpacity="0.2"
      strokeWidth="0.57177335"
    />
    <path
      d="m 26.89694,1.0634102 c 1.634986,-2.05918508 4.950125,-0.93090008 4.989521,1.698149 L 32.138899,41.214003 H 6.607076 c -4.6832501,0 -7.29518376,-5.409032 -4.3830007,-9.07673 z"
      id="path6"
      fill="#3ecf8e"
      strokeWidth="0.57177335"
    />
  </svg>
);

export { SupabaseIcon };
