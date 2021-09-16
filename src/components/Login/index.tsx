import { useLogin } from 'components/Hooks/useLogin';
export const Login = () => {
  const { signOut } = useLogin();
  return <button onClick={() => signOut()}>サインアウト</button>;
};
