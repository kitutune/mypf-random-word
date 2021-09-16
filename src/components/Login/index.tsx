import { useLogin } from 'components/Hooks/useLogin';
export const Login = () => {
  const { session, signInWithGithub, signOut } = useLogin();
  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>サインアウト</button>
      ) : (
        <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
      )}
    </>
  );
};
