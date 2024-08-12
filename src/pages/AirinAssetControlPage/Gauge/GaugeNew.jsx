import "./ProgressIndicator.css";

export const GaugeChart = ({ percentage }) => {
  const adjustedPercentage = percentage * 2; // Adjust percentage to visually match the specification
  const strokeVal = (adjustedPercentage / 100) * 180; // Compute the stroke based on adjusted percentage

  return (
    <div className="gauge-container">
      <svg className="svg-gauge" width="400" height="290" viewBox="0 0 200 110">
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="transparent"
          stroke="#4c39a0"
          strokeWidth="10"
        />
        <path
          d="M 10 100 A 90 90 0 0 1 190 100"
          fill="transparent"
          stroke="#202434"
          strokeWidth="10"
          strokeDasharray="180"
          strokeDashoffset={strokeVal - 270}
        />
        <text
          x="105"
          y="90"
          fill="white"
          fontSize="40"
          fontWeight="bold"
          textAnchor="middle"
          className="font-default"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};
