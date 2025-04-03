import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const schema = z.object({
  nick: z.string().min(3, "O nick deve ter pelo menos 3 caracteres"),
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
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
          label="E-mail"
          type="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Senha"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </form>
    </Box>
  );
}
