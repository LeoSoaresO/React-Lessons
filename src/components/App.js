import './App.css';
import './card/card'
import Card from './card/card';

function App() {
  const products = [
    {
      "title": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      "price": "2.813,99",
      "promocionalPrice": "2.599,00",
      "division":"259,90",
    },
    {
      "title": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      "price": "2.813,99",
      "promocionalPrice": "2.599,00",
      "division":"259,90",
    }
  ]

  return (
    <div className="App">
      <div className="container">
        {products.map( (product, key) => 
          <Card key={key} i={product}></Card>
        )}
      </div>
    </div>
  );
}

export default App;
