import { useState } from "react";
import { marketplaceApi } from "../api";

export default function CreateAdPage() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await marketplaceApi.post("/ads/", {
                ...form,
                price: Number(form.price),
            });

            alert("Advertisement created");
        } catch (error) {
            alert("Failed to create advertisement");
        }
    };

    return (
        <div className="card">
            <h1>Create Advertisement</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            title: e.target.value,
                        })
                    }
                />

                <textarea
                    placeholder="Description"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            description: e.target.value,
                        })
                    }
                />

                <input
                    type="number"
                    placeholder="Price"
                    onChange={(e) =>
                        setForm({
                            ...form,
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