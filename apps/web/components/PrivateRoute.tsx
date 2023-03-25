import { useRouter } from 'next/router';
import { useAuth } from '../context';
import React from 'react';
import { ChildrenProps } from '../../../packages/types/src/props/children.types';

export default function PrivateRoute({ children }: ChildrenProps) {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.replace('/login');
    return null;
  }

  return <>{children}</>;
}
