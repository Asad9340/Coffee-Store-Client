import { useLoaderData } from "react-router-dom"
import PopularProducts from "../../components/PopularProducts"

function Homepage() {
  const coffees = useLoaderData();
  return (
    <div>
      <PopularProducts coffees={coffees} />
    </div>
  )
}

export default Homepage