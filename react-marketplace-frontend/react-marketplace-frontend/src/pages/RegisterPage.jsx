import { useState } from "react";
import { authApi } from "../api";

export default function RegisterPage() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await authApi.post("/auth/register", form);

            alert("Registration successful");
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <div className="card">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            username: e.target.value,
                        })
                    }
                />

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

                <button type="submit">Register</button>
            </form>
        </div>
    );
}