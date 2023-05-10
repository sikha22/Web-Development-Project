import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

function App() {
  const [wordFrequency, setWordFrequency] = useState(null);

  const fetchTextFile = async () => {
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.split(/[^\w']+/).filter(word => word !== '');
    const frequency = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    const sortedFrequency = Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .reduce((acc, [word, freq]) => {
        acc[word] = freq;
        return acc;
      }, {});
    setWordFrequency(sortedFrequency);
  };

  const exportCSV = () => {
    const csv = Object.entries(wordFrequency)
      .map(([word, freq]) => `${word},${freq}`)
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'histogram.csv');
    link.click();
  };

  return (
    <div>
      <div className="buttons-container">
        <button onClick={fetchTextFile}>Submit</button>
        {wordFrequency && <button onClick={exportCSV}>Export</button>}
      </div>
      {wordFrequency && (
        <div>
          <Bar
            data={{
              labels: Object.keys(wordFrequency),
              datasets: [
                {
                  label: 'Word frequency',
                  data: Object.values(wordFrequency),
                  backgroundColor: 'blue',
                  borderColor: 'red',
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
