import NavBar from '../components/NavBar';
import ItemDetailsContainer from '../components/ItemDetailContainer';
import { useParams } from 'react-router-dom';
function ItemRoot() {
  const params = useParams();
  return (
    <div>
      <NavBar />
      <ItemDetailsContainer idProduct={params.id} />
    </div>
  );
}

export default ItemRoot;
