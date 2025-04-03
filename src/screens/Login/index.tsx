import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, Box, Typography, Paper} from "@mui/material";

const schema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Login realizado:", data);
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 6,
      }}
    >
        <Box sx={{ width: 100, height: 100, alignSelf: "center"}}>
        <img 
          src="/src/assets/ResonanceLogo.jpg"
          alt="Logo da Resonance"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
      <Typography variant="h5" color="text.primary" textAlign="center">
        Login
      </Typography>

      <TextField
        label="E-mail"
        type="email"
        fullWidth
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Senha"
        type="password"
        fullWidth
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit(onSubmit)}>
        Entrar
      </Button>
    </Box>
  );
}
