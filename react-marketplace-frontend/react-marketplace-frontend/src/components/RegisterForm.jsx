import { useState } from "react";
import { authApi, setToken } from "../api";

export default function RegisterForm({ setMessage }) {
    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await authApi.post(
                "/auth/register",
                registerForm
            );

            if (response.data.token) {
                setToken(response.data.token);
            }

            setMessage("Registration successful");
        } catch (error) {
            setMessage(
                error.response?.data?.error ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="card">
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={registerForm.username}
                    onChange={(e) =>
                        setRegisterForm({
                            ...registerForm,
                            username: e.target.value,
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={registerForm.email}
                    onChange={(e) =>
                        setRegisterForm({
                            ...registerForm,
                            email: e.target.value,
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={registerForm.password}
                    onChange={(e) =>
                        setRegisterForm({
                            ...registerForm,
                            password: e.target.value,
                        })
                    }
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}