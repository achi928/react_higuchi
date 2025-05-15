import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    if (data.username && data.password) {
      navigate('/customers');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          ログイン
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <TextField
            label="ユーザーID"
            fullWidth
            variant="outlined"
            margin="normal"
            {...register('username', { required: 'ユーザーIDは必須です' })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ''}
          />

          <TextField
            label="パスワード"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
            {...register('password', { required: 'パスワードは必須です' })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            ログイン
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
