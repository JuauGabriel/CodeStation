import { useState } from "react";
import { Modal, Box, Typography, TextField, Button, CircularProgress } from "@mui/material";

export function AuthModal({ open, onClose }) {
    console.log("Modal renderizado, open:", open);
    const [loading, setLoading] = useState(false);

    return (
        <Modal
            open={open}
            onClose={!loading ? onClose : undefined}
            sx={{ zIndex: 9999 }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '8px',
                }}
            >
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Login / Cadastro
                </Typography>
                <TextField label="E-mail" fullWidth sx={{ mb: 2 }} />
                <TextField label="Senha" type="password" fullWidth sx={{ mb: 2 }} />
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                            onClose();
                        }, 2000);
                    }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Entrar"}
                </Button>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={onClose}
                    sx={{ mt: 2 }}
                    disabled={loading}
                >
                    Fechar
                </Button>
            </Box>
        </Modal>
    );
}