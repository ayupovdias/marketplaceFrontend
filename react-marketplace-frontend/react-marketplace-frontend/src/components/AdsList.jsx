import AdCard from "./AdCard";

export default function AdsList({ ads }) {
    return (
        <>
            <h2>Advertisements</h2>

            <div className="ads-grid">
                {ads.map((ad) => (
                    <AdCard key={ad.id} ad={ad} />
                ))}
            </div>
        </>
    );
}