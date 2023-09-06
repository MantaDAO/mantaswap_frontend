import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={320}
    height={320}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={320}
      height={320}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <circle cx={160} cy={160} r={160} fill="#C4C4C4" />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M-63-63h445.2v445.2H-63z" />
      <mask
        id="d"
        width={446}
        height={446}
        x={-63}
        y={-63}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="url(#c)" d="M-63-63h445.2v445.2H-63z" />
      </mask>
      <g filter="url(#e)" mask="url(#d)" opacity={0.5}>
        <ellipse
          cx={159.883}
          cy={351.575}
          fill="url(#f)"
          rx={471.301}
          ry={340.686}
        />
      </g>
      <g fillRule="evenodd" clipRule="evenodd" filter="url(#g)">
        <path
          fill="#FFC780"
          d="M160.487 40a120.916 120.916 0 0 1 59.053 15.342 120.247 120.247 0 0 1 43.926 42.181c-16.641 0-32.6 6.582-44.367 18.296a62.32 62.32 0 0 0-18.378 44.169 62.322 62.322 0 0 0 18.378 44.17c11.767 11.714 27.726 18.295 44.367 18.295a120.306 120.306 0 0 1-44.838 42.693 120.968 120.968 0 0 1-60.228 14.835 120.946 120.946 0 0 1-59.662-16.953 120.248 120.248 0 0 1-43.288-44.25 119.58 119.58 0 0 1-15.445-59.823 119.593 119.593 0 0 1 16.489-59.546 120.279 120.279 0 0 1 44.055-43.492A120.96 120.96 0 0 1 160.499 40h-.012Z"
        />
        <path
          fill="url(#h)"
          d="M263.466 97.523c-16.641 0-32.601 6.581-44.368 18.295a62.325 62.325 0 0 0-18.377 44.17 62.323 62.323 0 0 0 18.377 44.169c11.767 11.715 27.727 18.296 44.368 18.296l-.396.591a85.479 85.479 0 0 1-43.813 20.937 85.67 85.67 0 0 1-48.189-6.274 85.213 85.213 0 0 1-36.932-31.449 84.66 84.66 0 0 1-13.694-46.421 84.671 84.671 0 0 1 13.986-46.335 85.237 85.237 0 0 1 37.13-31.218 85.678 85.678 0 0 1 48.228-5.972 85.481 85.481 0 0 1 43.68 21.21Z"
        />
      </g>
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(90 0 159.6) scale(222.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#311810" />
        <stop offset={1} stopColor="#1E0E0A" />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(90 0 159.6) scale(222.6)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#311810" />
        <stop offset={1} stopColor="#1E0E0A" />
      </radialGradient>
      <radialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 340.686 -471.301 0 159.883 351.575)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A744F4" />
        <stop offset={0.411} stopColor="#B2B1EE" stopOpacity={0.46} />
        <stop offset={1} stopColor="#B1C2EE" stopOpacity={0} />
      </radialGradient>
      <filter
        id="e"
        width={1172.88}
        height={911.648}
        x={-426.557}
        y={-104.249}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_2091_233870"
          stdDeviation={57.569}
        />
      </filter>
      <filter
        id="g"
        width={237.467}
        height={254}
        x={33}
        y={33}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={2}
          result="effect1_dropShadow_2091_233870"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2091_233870"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2091_233870"
          result="shape"
        />
      </filter>
      <linearGradient
        id="h"
        x1={191.947}
        x2={191.947}
        y1={245.072}
        y2={75.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC780" />
        <stop offset={1} stopColor="#964B48" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
