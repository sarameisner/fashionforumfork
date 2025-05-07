export default function DiagonalStripe({ color, position }) {
    return (
      <div
        style={{
          width: '100%',
          height: '400px', 
          backgroundColor: color,
          position: 'absolute',
          top: position,
          left: 0, 
          zIndex: -1, 
          clipPath: 'polygon(0% 60%, 0% 0%, 100% 40%, 100% 100%, 80% 90%)', 
        }}
      />
    );
  }
  