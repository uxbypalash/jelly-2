import axios from 'axios';
import Input from '@/components/Input';
import React from 'react';
import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react'

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';


const auth = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // ---- Toggle of login & New account
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);
    // -----

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles'
            });

        }catch (error) {
            console.log(error);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);


  return (
    <div className='relative h-full w-full bg-[url("/images/loginbanner.png")] bg-no-repeat bg-center bg-fixed'>
        <div className='bg-[#000018] lg:bg-black w-full h-full lg:bg-opacity-40'>
            <nav className='px-12 py-5'>
                <h1 className='text-[24px] text-white'>Jelly</h1>
            </nav>

            <div className='flex justify-center'>
                <div className='lg:bg-black lg:bg-opacity-80 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>
                        {variant === 'login' ? 'Sign in' : 'Register'}
                    </h2>
                    <div className='flex flex-col gap-4'>
                        {/* ---- Toggle */}
                        {variant === 'register' && (
                            <Input 
                                label='Username'
                                onChange={(ev: any) => setName (ev.target.value)}
                                id='name'
                                value={name}
                            />
                        )}
                        {/* ---- */}
                        <Input 
                            label='Email'
                            onChange={(ev: any) => setEmail (ev.target.value)}
                            id='email'
                            type='email'
                            value={email}
                        />
                        <Input 
                            label='Password'
                            onChange={(ev: any) => setPassword (ev.target.value)}
                            id='password'
                            type='password'
                            value={password}
                        />
                    </div>
                    <button onClick={variant === 'login' ? login : register} className='bg-indigo-700 py-3 text-white rounded-md w-full mt-10 hover:bg-indigo-800 transition'>
                        {/* ---- Button Label Change on toggle */}
                        {variant === 'login' ? 'Login' : 'Sign up'}
                    </button>

                    <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                        <div
                            onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                            className='
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                            '
                        >
                            <FcGoogle size={30}/>
                        </div>

                        <div
                            onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                            className='
                                w-10
                                h-10
                                bg-white
                                rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transition
                            '
                        >
                            <FaGithub size={30}/>
                        </div>
                    </div>

                    <p className='text-neutral-500 mt-12'>
                        {variant === 'login' ? 'First time using Jelly?' : 'Already have an account?'}
                        <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                            {variant === 'login' ? 'Create an account' : 'Login'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default auth