export default function DiagonalStripe({ color = '#ff6b6b' }) {
    return (
      <div
        style={{
          width: '130vw',
          height:'300px',
          backgroundColor: color,
          transform: 'rotate(15deg)',
          position: 'absolute',
          top: '200px',
          left: '-25%',
          zIndex: -1,
        }}
      />
    );
  }