export default function DiagonalStripe({ color = '#ff6b6b' }) {
    return (
      <div
        style={{
          width: '120vw',
          height:'300px',
          backgroundColor: color,
          transform: 'rotate(15deg)',
          position: 'absolute',
          top: '1700px',
          left: '-25%',
          zIndex: -1,
        }}
      />
    );
  }