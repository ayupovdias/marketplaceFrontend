export default function AdCard({ ad }) {
  return (
    <div className="ad-card">
      <img
        src={ad.image_url || "https://placehold.co/400x200"}
        alt={ad.title}
      />

      <div className="ad-content">
        <h3>{ad.title}</h3>
        <p>{ad.description}</p>

        <div className="ad-footer">
          <span>${ad.price}</span>
          <span>{ad.city}</span>
        </div>
      </div>
    </div>
  );
}