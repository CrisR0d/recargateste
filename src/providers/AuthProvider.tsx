import { createContext, useContext, useEffect, useState } from 'react';
import type { AuthError, Session, User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClient';

type AuthCtxType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<{ error: AuthError }>;
}

const AuthContext = createContext<AuthCtxType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    }

  }, []);

  const value: AuthCtxType = {
    user: session?.user ?? null,
    session,
    loading,
    signOut: () => supabase.auth.signOut(),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>')
  return ctx
}
