const Arc: React.FC<{ pathColor?: string }> = ({ pathColor }) => {
  return (
    <svg
      width="422"
      height="232"
      viewBox="0 0 422 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M279.698 232H422C422 103.87 327.532 0 211 0C94.4678 0 0 103.87 0 232H142.302C142.302 190.283 173.059 156.465 211 156.465C248.941 156.465 279.698 190.283 279.698 232Z"
        fill={pathColor || "#FFB800"}
      />
    </svg>
  );
};
export default Arc;
