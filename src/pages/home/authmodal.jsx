import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Email, Lock, VpnKey, VisibilityOff, Visibility } from '@mui/icons-material';
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, Box, Typography, TextField, Button, CircularProgress, InputAdornment, Divider, IconButton } from "@mui/material";

const formularioLogin = z.object({
    email: z.string().min(4, "Mínimo de 4 caracteres").email("Email inválido"),
    password: z.string().min(4, "Mínimo de 4 caracteres").max(30)
});

const formularioCadastro = z.object({
    email: z.string().min(4, "Mínimo de 4 caracteres").email("Email inválido"),
    password: z.string().min(4, "Mínimo de 6 caracteres").max(30),
    confirmarSenha: z.string().min(6, "Senha de confirmação deve ter no mínimo 6 caracteres")
        .refine((val, ctx) => val === ctx.parent.password, {
            message: "As senhas não coincidem"
        })
});

export function LoginModal({ open, onClose }) {
    const [loading, setLoading] = useState(false);
    const [isCadastro, setIsCadastro] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const alternarModal = () => {
        setIsCadastro(!isCadastro);
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(isCadastro ? formularioCadastro : formularioLogin),
        mode: 'onChange'
    });

    return (
        <Modal open={open} onClose={!loading ? onClose : undefined}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: 'auto',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 8,
                    borderRadius: '8px',
                    backgroundColor: '#0c0c0c',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        mt: -4,
                        mb: 2,
                        textAlign: 'center',
                        fontFamily: "Roboto, sans-serif",
                        color: '#cfc8c9',
                        fontWeight: 'bold',
                        fontSize: '28px'
                    }}
                >
                    {isCadastro ? "Cadastre-se" : "Login"}
                </Typography>

                <TextField
                    variant='standard'
                    fullWidth
                    required
                    {...register("email")}
                    InputLabelProps={{
                        required: false,
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        display: 'flex',
                                        gap: '0.5rem',
                                    }}
                                >
                                    <Email sx={{ color: '#cfc8c9' }} />
                                    <Divider orientation="vertical" flexItem sx={{ borderColor: '#cfc8c9' }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{
                        marginTop: '1rem',
                        marginBottom: '1rem',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#cfc8c9',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#cfc8c9',
                            height: '4rem',
                            padding: '0 18px',
                        },
                        '& .MuiInputLabel-root': {
                            color: '#cfc8c9',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#cfc8c9',
                        }
                    }}
                    label='E-mail'
                    placeholder="Insira seu email aqui"
                />

                <TextField
                    variant="standard"
                    fullWidth
                    required
                    {...register("password")}
                    InputLabelProps={{
                        required: false,
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start" sx={{ display: 'flex', gap: '0.5rem' }}>
                                    <Lock sx={{ color: '#cfc8c9' }} />
                                    <Divider orientation="vertical" flexItem sx={{ borderColor: '#cfc8c9' }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <IconButton onClick={() => setIsShowPassword((prev) => !prev)}>
                                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            ),
                        },
                    }}
                    sx={{
                        marginBottom: '1rem',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#cfc8c9',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#cfc8c9',
                            height: '4rem',
                            padding: '0 18px',
                        },
                        '& .MuiInputLabel-root': {
                            color: '#cfc8c9',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#cfc8c9',
                        },
                    }}
                    label="Senha"
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Insira sua senha aqui"
                />

                {isCadastro && (
                    <TextField
                        variant="standard"
                        fullWidth
                        required
                        {...register("confirmarSenha")}
                        InputLabelProps={{
                            required: false,
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ display: 'flex', gap: '0.5rem' }}>
                                        <VpnKey sx={{ color: '#cfc8c9' }} />
                                        <Divider orientation="vertical" flexItem sx={{ borderColor: '#cfc8c9' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <IconButton onClick={() => setIsShowConfirmPassword((prev) => !prev)}>
                                        {isShowConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                ),
                            },
                        }}
                        sx={{
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#cfc8c9',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: '#cfc8c9',
                                height: '4rem',
                                padding: '0 18px',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#cfc8c9',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#cfc8c9',
                            },
                        }}
                        label="Confirmar senha"
                        type={isShowConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirme sua senha"
                    />
                )}

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
                    sx={{
                        borderRadius: '12px',
                        backgroundColor: '#a8050d'
                    }}
                >
                    {loading ? <CircularProgress size={24} /> : (isCadastro ? "Cadastrar" : "Entrar")}
                </Button>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Typography
                        sx={{
                            color: '#cfc8c9',
                            fontSize: '18px',
                            marginTop: '50px',
                            display: 'flex'
                        }}
                    >
                        {isCadastro ? "Já tem uma conta?" : "Não tem conta?"}
                    </Typography>

                    <Box onClick={alternarModal} sx={{ color: '#a8050d', marginTop: '50px', fontSize: '18px', marginLeft: '8px', display: 'flex', fontFamily: 'Roboto, sans-serif', cursor: 'pointer' }}>
                        {isCadastro ? "Faça login" : "Cadastre-se"}
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}
