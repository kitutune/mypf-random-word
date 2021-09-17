import { useEffect, useState } from 'react';
import { supabase } from 'libs/supabase';

export const useLogin = () => {
  const [session, setSession] = useState<object | null>();
  const [userId, setUserId] = useState<string>();
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      session ? setUserId(session.user?.id) : null;
    });
    if (authListener === null) {
      return;
    }
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const signInWithGoogle = () => {
    supabase.auth.signIn({ provider: 'google' });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return { session, signInWithGoogle, signOut, userId };
};
