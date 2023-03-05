import './App.css';
import NavBAr from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

function App() {
  const [itemCount, setAddItemCount] = useState(0);

  const handleAddAddWidget = () => {
    setAddItemCount(itemCount + 1);
  };

  const handleSubstractWidget = () => {
    setAddItemCount(() => {
      if (itemCount - 1 > 0) {
        return itemCount - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'
      ></link>
      <NavBAr initialValue={itemCount} />
      <ItemListContainer
        addValueToWidget={handleAddAddWidget}
        substractValueToWidget={handleSubstractWidget}
      />
    </div>
  );
}

export default App;
