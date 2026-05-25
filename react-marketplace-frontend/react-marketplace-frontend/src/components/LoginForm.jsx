import { useState } from "react";
import { authApi, setToken } from "../api";

export default function LoginForm({ setMessage }) {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await authApi.post(
                "/auth/login",
                loginForm
            );

            setToken(response.data.token);

            setMessage("Login successful");
        } catch (error) {
            setMessage(
                error.response?.data?.error || "Login failed"
            );
        }
    };

    return (
        <div className="card">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={loginForm.email}
                    onChange={(e) =>
                        setLoginForm({
                            ...loginForm,
                            email: e.target.value,
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={(e) =>
                        setLoginForm({
                            ...loginForm,
                            password: e.target.value,
                        })
                    }
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}