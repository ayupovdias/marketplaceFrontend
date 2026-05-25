import { useEffect, useState } from "react";
import { marketplaceApi } from "../api";
import AdCard from "../components/AdCard";

export default function AdsPage() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await marketplaceApi.get("/ads/");
                setAds(response.data.ads || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAds();
    }, []);

    return (
        <div className="container">
            <h1>Advertisements</h1>

            <div className="ads-grid">
                {ads.map((ad) => (
                    <AdCard key={ad.id} ad={ad} />
                ))}
            </div>
        </div>
    );
}