interface Props {
  className?: string;
}

const ShadcnIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} width="100" height="100" viewBox="0 0 100 100">
    <g>
      <path
        d="M81.25 49.9996L50 81.2496"
        stroke="black"
        strokeWidth="6.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75 15.6246L15.625 74.9996"
        stroke="black"
        strokeWidth="6.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export { ShadcnIcon };
