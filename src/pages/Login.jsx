import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Header_uapa from "../components/Header_uapa"
import Footer from "../components/Footer"

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Header_uapa/>
    <div className="flex justify-center items-center h-70 bg-gray-100">
      
      <div className="max-w-md w-full">
        <h1 className="text-4xl text-center text-orange mb-8">Bienvenido</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          {isLogin ? (
            <>
              <LoginForm />
              <p className="text-center mt-4">
                ¿No tienes una cuenta?{" "}
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={toggleForm}
                >
                  Crear cuenta
                </button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm />
              <p className="text-center mt-4">
                ¿Ya tienes una cuenta?{" "}
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={toggleForm}
                >
                  Iniciar sesión
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;