import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { signInWithEmail } from "../supa/supa-client";

export default function Welcome() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signIn() {
        const {error} = await signInWithEmail(email, password);
        if (error) {
            alert(error);
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="on"
        >
            <div>
                <TextField
                    id="email-input"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    disabled={(email.length == 0) || (password.length == 0)}
                    onClick={signIn}
                >
                    Sign in
                </Button>
            </div>
        </Box>
    );
}