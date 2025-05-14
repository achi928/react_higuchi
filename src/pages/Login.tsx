import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>ユーザーID</label>
      <input {...register('username', { required: 'ユーザーIDは必須です' })} />
      <ErrorMessage errors={errors} name="username" render={({ message }) => <p>{message}</p>} />

      <label>パスワード</label>
      <input type="password" {...register('password', { required: 'パスワードは必須です' })} />
      <ErrorMessage errors={errors} name="password" render={({ message }) => <p>{message}</p>} />

      <button type="submit">ログイン</button>
    </form>

  );
};

export default Login;
