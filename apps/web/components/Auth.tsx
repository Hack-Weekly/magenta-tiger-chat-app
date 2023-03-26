import styled from 'styled-components';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context';

import { Button, Input } from 'ui';

import Image from 'next/image';
import Link from 'next/link';

import Banner from 'ui/assets/auth-banner.webp';
import Logo from 'ui/assets/logo.webp';

import { AuthPageProps } from '../../../packages/types/src/props/auth-page-props.types';

const AuthLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f3f3f3;
  overflow: auto;
  @media (min-height: 400px) and (min-width: 680px) {
    height: 100vh;
  }
`;

const AuthWrapper = styled.div`
  max-width: 950px;
  max-height: 30rem;
  min-width: 16rem;
  width: 100%;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 21px -3px rgba(0, 0, 0, 0.09);
  border-radius: 15px;
  padding: 0.7rem;
  @media (min-width: 680px) {
    flex-direction: row;
    max-height: 40rem;
  }
`;

const AuthContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
`;

const AuthBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: none;
  border-radius: 15px;
  @media (min-width: 680px) {
    display: block;
  }
`;

const AuthBanner = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
    border-radius: 15px;
  }
`;

const AuthHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  width: 95%;
  a {
    text-decoration: none;
  }
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
`;
const HeaderInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const HeaderTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  line-height: 37px;
  font-weight: 700;
  color: #2c2c2c;
  margin: 0;
`;

const HeaderSubTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #999999;
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.1rem;
  margin: 0;
`;

const AuthFormWrapper = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
`;

const AuthLink = styled.span`
  color: #999999;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 13px;
  cursor: pointer;
  span {
    color: #2c2c2c;
    font-weight: 600;
    text-decoration: underline;
  }
  :hover {
    span {
      color: #6d6d6d;
      text-decoration: underline;
    }
  }
`;

const FailedText = styled.p`
  color: #df3737;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 13px;
  margin: 0;
  align-self: flex-start;
`;

export default function Auth({ variant }: AuthPageProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValidated, setIsFormValidated] = useState(true);
  const [validationResponse, setValidationResponse] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login, user } = useAuth();

  const router = useRouter();
  const apiUrl = process.env.API_URL;

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    if (!validateEmail(email)) {
      setValidationResponse('Please enter a valid email address.');
      setIsFormValidated(false);
      return;
    } else {
      setValidationResponse('');
      setIsFormValidated(true);
    }
    if (!validatePassword(password)) {
      setValidationResponse(
        'Please enter a password that is at least 8 characters long.'
      );
      setIsFormValidated(false);
      return;
    } else {
      setValidationResponse('');
      setIsFormValidated(true);
    }

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      await login(data.user);

      // Reset form fields
      setEmail('');
      setPassword('');

      router.push('/');
    } catch (err: any) {
      setValidationResponse(err);
    }
  };

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password,
    };

    if (!validateName(username)) {
      setValidationResponse('Please enter a valid name.');
      setIsFormValidated(false);
      return;
    } else {
      setValidationResponse('');
      setIsFormValidated(true);
    }
    if (!validateEmail(email)) {
      setValidationResponse('Please enter a valid email address.');
      setIsFormValidated(false);
      return;
    } else {
      setValidationResponse('');
      setIsFormValidated(true);
    }
    if (!validatePassword(password)) {
      setValidationResponse(
        'Please enter a password that is at least 8 characters long.'
      );
      setIsFormValidated(false);
      return;
    } else {
      setValidationResponse('');
      setIsFormValidated(true);
    }

    try {
      const response = await fetch(`${apiUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      await login(data.user);

      // Reset form fields
      setUsername('');
      setEmail('');
      setPassword('');

      router.push('/');
    } catch (err: any) {
      setValidationResponse(err);
    }
  };

  const validateName = (name: string) => {
    return name.length > 0;
  };

  const validateEmail = (email: string) => {
    // Use a regular expression to check if the email address is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // Check if the password is at least 8 characters long
    return password.length >= 8;
  };

  return (
    <AuthLayoutWrapper>
      <AuthWrapper>
        <AuthContentWrapper>
          <AuthHeaderWrapper>
            <HeaderLogoWrapper>
              <Image src={Logo} alt="" width={50} height={50} />
            </HeaderLogoWrapper>
            <HeaderInfoWrapper>
              <HeaderTitle>
                {variant === 'login'
                  ? 'Hello, Welcome Back'
                  : 'Create an account'}
              </HeaderTitle>
              <HeaderSubTitle>
                {variant === 'login'
                  ? 'Happy to see you again, to use your account please login first.'
                  : 'Start chatting with our easy registration!'}
              </HeaderSubTitle>
            </HeaderInfoWrapper>
            <Link href={variant === 'login' ? '/signup' : '/login'}>
              <AuthLink>
                {`${
                  variant === 'login' ? "Don't" : 'Already'
                } have an account?`}
                <span>{`${variant === 'login' ? ' Sign up' : ' Log in'}`}</span>
              </AuthLink>
            </Link>
          </AuthHeaderWrapper>
          <AuthFormWrapper
            onSubmit={variant === 'login' ? handleLogin : handleRegistration}
          >
            {variant === 'signup' && (
              <Input
                variant="user"
                width="100%"
                required
                value={username}
                error={!isFormValidated}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
            )}
            <Input
              variant="email"
              width="100%"
              required
              value={email}
              error={!isFormValidated}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Input
              variant="password"
              width="100%"
              required
              value={password}
              error={!isFormValidated}
              onClick={handleTogglePasswordVisibility}
              isPassShowed={showPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            {validationResponse.length > 0 && (
              <FailedText>{validationResponse}</FailedText>
            )}
            <Button
              variant="primary"
              text={variant === 'login' ? 'Log in' : 'Sign up'}
              full
            />
          </AuthFormWrapper>
        </AuthContentWrapper>
        <AuthBannerWrapper>
          <AuthBanner>
            <Image src={Banner} alt="" fill />
          </AuthBanner>
        </AuthBannerWrapper>
      </AuthWrapper>
    </AuthLayoutWrapper>
  );
}
