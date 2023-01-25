import styles from "./RestaurantCard.module.css"

function RestaurantCard({ name, image, type, rating, price_starts_from, number_of_votes }) {
  
  return (
    <div data-testid="restaurant-card" className={styles.container}>
      {/* display the props */}
      <img data-testid="restaurant-card-image" src={image} alt={name} />

      <h2 data-testid="restaurant-card-name">{name}</h2>

      <h3 data-testid="restaurant-card-type">{type}</h3>

      <h3 data-testid = "restaurant-card-price">{price_starts_from}</h3>

      <h3 data-testid="restaurant-card-rating">{rating}</h3>

      <h3 data-testid = "restaurant-card-votes">{number_of_votes}</h3>
    </div>
  );
}

export default RestaurantCard;