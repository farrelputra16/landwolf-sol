export default function SvgLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="wolfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <path
        d="M50 8C35 8 22 18 18 32L14 42C12 48 16 54 22 54H26L28 62C30 70 36 76 44 78L50 92L56 78C64 76 70 70 72 62L74 54H78C84 54 88 48 86 42L82 32C78 18 65 8 50 8Z"
        fill="url(#wolfGrad)"
        opacity="0.95"
      />
      <ellipse cx="50" cy="62" rx="14" ry="10" fill="#050505" opacity="0.3" />
      <ellipse cx="38" cy="36" rx="4" ry="5" fill="#050505" />
      <ellipse cx="62" cy="36" rx="4" ry="5" fill="#050505" />
      <ellipse cx="38" cy="35" rx="2.5" ry="3" fill="white" />
      <ellipse cx="62" cy="35" rx="2.5" ry="3" fill="white" />
      <ellipse cx="50" cy="48" rx="3" ry="2" fill="#050505" />
      <path
        d="M44 58C46 60 48 61 50 61C52 61 54 60 56 58"
        stroke="#050505"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 42L16 38M76 42L84 38"
        stroke="url(#wolfGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
