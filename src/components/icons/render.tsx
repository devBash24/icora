// Helper function to convert icon data to SVG
const IconRenderer = ({ iconData }: { iconData: string }) => {
  try {
    // Extract the SVG data from the code string
    const match = iconData.match(/GenIcon\(([\s\S]*?)\)\(props\)/);
    if (!match) return null;
    
    const svgData = JSON.parse(match[1]);

    return (
      <svg
        {...svgData.attr}
        width="2em"
        height="2em"
        fill="currentColor"
      >
        {svgData.child.map((child: any, index: number) => (
          <path key={index} {...child.attr} />
        ))}
      </svg>
    );
  } catch (error) {
    console.error('Error rendering icon:', error);
    return null;
  }
};

export default IconRenderer;