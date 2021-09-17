import { useLogin } from 'components/Hooks/useLogin';
export const Login = () => {
  const { session, signInWithGoogle, signOut } = useLogin();
  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>SIGNOUT</button>
      ) : (
        <button onClick={() => signInWithGoogle()}>LOGIN</button>
      )}
    </>
  );
};
