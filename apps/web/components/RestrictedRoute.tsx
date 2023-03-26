import { useRouter } from 'next/router';
import { useAuth } from '../context';
import React from 'react';
import { ChildrenProps } from '../../../packages/types/src/props/children.types';

export default function RestrictedRoute({ children }: ChildrenProps) {
  const router = useRouter();
  const { user } = useAuth();

  if (user) {
    router.replace('/');
    return null;
  }

  return <>{children}</>;
}
