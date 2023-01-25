import { useEffect, useRef, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";

function Restaurants() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalPages = useRef(0);

  useEffect(() => { 
    const fetchData = async (page) => {
      setLoading(true);
      const resp = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
      console.log(resp.headers)
      const data = await resp.json()
      totalPages.current = data.totalPages; 
      setData(data.data)
      setLoading(false);
    }
    fetchData(page);    
  }, [page])
 
    return loading ? <LoadingIndicator /> : (
      <div>
        <h1 data-testid="restaurants-header">Restaurants List</h1>
        <div data-testid="restaurants-container">
          {data.map((i) => (<RestaurantCard name={i.name} image={i.image} type={i.type} rating={i.rating} price_starts_from={i.price_starts_from} number_of_votes={i.number_of_votes} />
          ))}
        </div>
        <div>
          <Pagination current={page} total={totalPages.current} onChange={(p) => setPage(p) } />
        </div>
      </div>
    );
  }

export default Restaurants;