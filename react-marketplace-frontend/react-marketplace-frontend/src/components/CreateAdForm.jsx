import { useState } from "react";
import { marketplaceApi } from "../api";

export default function CreateAdForm({
                                         setMessage,
                                         fetchAds,
                                     }) {
    const [adForm, setAdForm] = useState({
        title: "",
        description: "",
        price: "",
        city: "",
        image_url: "",
        category_id: 1,
    });

    const handleCreateAd = async (e) => {
        e.preventDefault();

        try {
            await marketplaceApi.post("/ads/", {
                ...adForm,
                price: Number(adForm.price),
                category_id: Number(adForm.category_id),
            });

            setMessage("Advertisement created");

            fetchAds();
        } catch (error) {
            setMessage(
                error.response?.data?.error ||
                "Failed to create advertisement"
            );
        }
    };

    return (
        <div className="card create-ad">
            <h2>Create Advertisement</h2>

            <form onSubmit={handleCreateAd}>
                <input
                    type="text"
                    placeholder="Title"
                    value={adForm.title}
                    onChange={(e) =>
                        setAdForm({
                            ...adForm,
                            title: e.target.value,
                        })
                    }
                />

                <textarea
                    placeholder="Description"
                    value={adForm.description}
                    onChange={(e) =>
                        setAdForm({
                            ...adForm,
                            description: e.target.value,
                        })
                    }
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={adForm.price}
                    onChange={(e) =>
                        setAdForm({
                            ...adForm,
                            price: e.target.value,
                        })
                    }
                />

                <button type="submit">
                    Create Advertisement
                </button>
            </form>
        </div>
    );
}