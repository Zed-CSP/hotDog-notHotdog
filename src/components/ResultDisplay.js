import React from 'react';

function ResultDisplay({ result }) {
  const isHotdog = result === 'Hotdog';

  return (
    <div className={`result-display mt-4 text-2xl font-bold p-4 rounded-lg ${isHotdog ? 'bg-green-400' : 'bg-red-400'} text-white`}>
      {result}
    </div>
  );
}

export default ResultDisplay;
