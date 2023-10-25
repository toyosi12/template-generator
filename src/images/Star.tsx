const Star: React.FC<{ pathColor?: string }> = ({ pathColor }) => {
  return (
    <svg
      width="481"
      height="482"
      viewBox="0 0 481 482"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M240.5 0L258.472 122.53L311.588 10.7671L292.821 133.177L376.359 42.1117L322.521 153.525L429.058 91.2486L344.933 181.765L465.004 153.812L358.065 215.389L481 224.242L360.75 251.409L475.628 296.282L352.752 286.625L449.363 363.53L334.78 317.907L404.54 420.011L308.43 342.474L345.142 460.707L276.044 358.147L276.446 482L240.5 363.53L204.555 482L204.957 358.147L135.859 460.707L172.571 342.474L76.4599 420.011L146.221 317.907L31.637 363.53L128.249 286.625L5.37231 296.282L120.25 251.409L0 224.242L122.936 215.389L15.997 153.812L136.069 181.765L51.9425 91.2486L158.48 153.525L104.642 42.1117L188.18 133.177L169.413 10.7671L222.528 122.53L240.5 0Z"
        fill={pathColor || "#FFB800"}
      />
    </svg>
  );
};
export default Star;
