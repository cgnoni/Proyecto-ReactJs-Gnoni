import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", pid);
    getDoc(queryDoc)
      .then((res) => setProducto({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [pid]);

  return (
    <div>{isLoading ? <Loading /> : <ItemDetail producto={producto} />}</div>
  );
};

export default ItemDetailContainer;
