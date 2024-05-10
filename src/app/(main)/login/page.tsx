'use client';
import React from 'react';
import {useState} from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase-config';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const [registerEmail, setRegisterEmail]= useState("");
  const [registerPassword, setRegisterPassword]= useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const router = useRouter();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  const register = async () => {
   
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail, 
        registerPassword
      );
      router.push('/point-of-sale');
    } catch (error) {
      console.log('Une erreur inattendue s\'est produite');
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      router.push('/point-of-sale');
    } catch (error) {
        console.log('Une erreur inattendue s\'est produite');
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inscription</h2>
      <form action="/submit" method="post">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email :</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required onChange={(event)=> {setRegisterEmail(event.target.value);}}/>
        </div>
        <div className="mb-4">
          <label htmlFor="password1" className="block text-gray-700 font-medium mb-1">Mot de passe :</label>
          <input type="password" id="password1" name="password1" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required onChange={(event)=> {setRegisterPassword(event.target.value);}}/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Utilisateur :</label>
          {user?.email} 
        </div>
        <button type="button" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"  onClick={register} >S&apos;inscrire</button>




        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Déconnexion</h2>
        <button type="button" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-white-600 transition duration-300"  onClick={logout} >Se déconnecter</button>





        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connexion</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email :</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required onChange={(event)=> {setRegisterEmail(event.target.value);}}/>
        </div>
        <div className="mb-4">
          <label htmlFor="password1" className="block text-gray-700 font-medium mb-1">Mot de passe :</label>
          <input type="password" id="password1" name="password1" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" required onChange={(event)=> {setRegisterPassword(event.target.value);}}/>
        </div>
        <button type="button" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-white-600 transition duration-300"    onClick={login} >Se connecter</button>
      </form>
    </div>
  );
};//
export default SignupForm;