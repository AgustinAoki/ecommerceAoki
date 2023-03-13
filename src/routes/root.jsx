import './App.css';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';

function Root() {
  const params = useParams();

  const isFilteringByType = Boolean(params.id);
  console.log({ params });
  console.log({ params });
  return (
    <div>
      <NavBar />
      <ItemListContainer
        isFilteringByType={isFilteringByType}
        type={params.id}
      />
    </div>
  );
}

export default Root;
