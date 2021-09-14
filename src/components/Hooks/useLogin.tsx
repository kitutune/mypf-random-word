import { useEffect, useState } from 'react';
import { supabase } from 'libs/supabase';

export const useLogin = () => {
  const [session, setSession] = useState<object | null>();
  const [userId, setUserId] = useState<string | undefined>();
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      session ? setUserId(session.user.id) : null;
    });
    if (authListener === null) {
      return;
    }
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const signInWithGithub = () => {
    supabase.auth.signIn({ provider: 'github' });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return { session, signInWithGithub, signOut, userId };
};
