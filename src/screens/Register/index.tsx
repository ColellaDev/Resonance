import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    nick: z.string().min(3, "O nick deve ter pelo menos 3 caracteres"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "A confirmação deve ter pelo menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export function Register() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    try {
        console.log("Usuário cadastrado:", data);
        navigate("/home");
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
      }
  };

  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 400,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Box sx={{ width: 100, height: 100, alignSelf: "center" }}>
        <img
          src="/src/assets/ResonanceLogo.jpg"
          alt="Logo da Resonance"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>

      <Typography variant="h5" textAlign="center">
        Cadastro
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <TextField
          label="Nick do Main"
          {...register("nick")}
          error={!!errors.nick}
          helperText={errors.nick?.message}
        />

        <TextField
          label="Senha"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField
          label="Confirme sua Senha"
          type="password"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </form>
    </Box>
  );
}
