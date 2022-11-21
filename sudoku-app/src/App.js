import './App.css';
import { useState } from 'react';


function App() {
  const [matrix, setMatrix] = useState(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
  );

  function onCellChange(rowIndex, colIndex, value) {
    let newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = value;
    setMatrix(newMatrix);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h3>Soduku-App</h3>
        <table>
          <tbody>
            {
              matrix.map((row, rowIndex) => {
                return <tr key={rowIndex}>
                  {
                    row.map((col, colIndex) => {
                      return <td key={rowIndex + colIndex}>
                        <input className='cellInput' value={col} onChange={(e) => onCellChange(rowIndex, colIndex, parseInt(e.target.value) || 0)}/>
                      </td>
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
