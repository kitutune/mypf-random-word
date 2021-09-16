import { useLogin } from 'components/Hooks/useLogin';
export const Login = () => {
  const { session, signInWithGithub, signOut } = useLogin();
  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>SIGNOUT</button>
      ) : (
        <button onClick={() => signInWithGithub()}>LOGIN</button>
      )}
    </>
  );
};
