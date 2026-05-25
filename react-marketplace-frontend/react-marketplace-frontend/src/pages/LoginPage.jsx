import { useState } from "react";
import { authApi, setToken } from "../api";

export default function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await authApi.post(
                "/auth/login",
                form
            );

            setToken(response.data.token);

            alert("Login successful");
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <div className="card">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value,
                        })
                    }
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}