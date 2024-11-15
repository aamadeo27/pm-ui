import { useState } from "react";
import Button from "../../components/Button";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";
import classNames from "classnames";

export default function WelcomePage(){

  const [mode, setMode] = useState<string>('Landing')
  const logoSize = mode === 'Landing' ? 'w-80' : 'w-40'
  const titleSize = mode === 'Landing' ? 'text-8xl' : 'text-6xl'

  return <div className="bg-slate-800 w-[100vw] h-[100vh] py-20 text-white">
    <div className="flex flex-col mx-auto w-96 h-full">
      <div className={classNames('mx-auto py-10', logoSize)}>
        <img src="/logo.png"/>
      </div>
      <div className={classNames('w-full font-semibold text-center', titleSize)}>TaskNest</div>
      
      {mode === 'Landing' && (
        <div className="mx-auto flex flex-col gap-5 my-4">
          <Button onClick={() => setMode('Sign Up')} fullwidth>
            Sign Up
          </Button>
          <Button onClick={() => setMode('Login')} fullwidth>
            Login
          </Button>
        </div>
      )}

      {mode === 'Sign Up' && <SignUp onCancel={() => setMode('Landing')} onSuccess={() => setMode('Login')}/>}
      {mode === 'Login' && <Login onCancel={() => setMode('Landing')}/>}
    </div>
  </div>
}