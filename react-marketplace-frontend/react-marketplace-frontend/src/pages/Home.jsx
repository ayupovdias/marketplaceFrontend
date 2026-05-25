import { useEffect, useState } from "react";
import { marketplaceApi } from "../api";
import AdsList from "../components/AdsList";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import CreateAdForm from "../components/CreateAdForm";

export default function Home() {
    const [ads, setAds] = useState([]);
    const [message, setMessage] = useState("");

    const fetchAds = async () => {
        try {
            const response = await marketplaceApi.get("/ads/");
            setAds(response.data.ads || []);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    return (
        <div className="container">
            <h1>Marketplace Frontend</h1>

            {message && <div className="message">{message}</div>}

            <div className="forms-grid">
                <RegisterForm setMessage={setMessage} />
                <LoginForm setMessage={setMessage} />
            </div>

            <CreateAdForm
                setMessage={setMessage}
                fetchAds={fetchAds}
            />

            <AdsList ads={ads} />
        </div>
    );
}