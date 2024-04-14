import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import "./style.css";
import Categories from "../../components/MainPage/Categories";
const Account = ({ user, setUser }) => {
  const responseGoogle = (res) => {
    const details = jwtDecode(res.credential);
    console.log(details);
    setUser(details);
  };

  return (
    <div className="mb-96 pb-96">
      <div className="absolute ml-20 w-[80%] text-xl">
        <Categories />
      </div>
      <div className="absolute ml-96 pl-16">
        <div className="flex flex-col mt-24 gap-5">
          <h3 className="text-4xl self-center font-bold">Login</h3>
          <div className="flex flex-col self-center">
            <button className="w-max h-max self-center bg-transparent border-4 border-black mb-3 flex items-center gap-2 rounded-lg py-2 justify-center hover:bg-gray-100">
              <GoogleOAuthProvider clientId="238420700429-gua260nmlhj7noct9v6ckcbkr4ifrj2l.apps.googleusercontent.com">
                <GoogleLogin
                  className="google-login-button"
                  onSuccess={responseGoogle}
                  onError={responseGoogle}
                />
              </GoogleOAuthProvider>
            </button>
            <button className="w-[235px] self-center mb-5 bg-blue-600 flex items-center gap-2 rounded-[4px] py-3 justify-center hover:">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                alt=""
                className="self-center w-6"
              />
              <p className="text-white self-center font-medium text-base">
                Continue with Facebook
              </p>
            </button>
            {/* <div></div> */}
            <button className="w-[235px] self-center bg-black flex items-center gap-4 rounded-[4px] py-3 justify-center hover:">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRJzmGg29-e0zaQFwcOGIIlKRI7wDfxWQ5rCGACbUlA&s"
                alt=""
                className="self-center w-5"
              />
              <p className="text-white self-center font-medium text-base">
                Continue with Apple
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute ml-96 pl-96 w-[490px ">
        <div className="mt-24 gap-5 absolute ">
          <h2 className="mb-4">
            <img
              src={user.picture}
              alt="User Picture"
              className="w-24 h-24 rounded-full"
            />
          </h2>
          <h2 className="text-xl mb-2">
            Аты: <label className="font-semibold">{user.given_name}</label>{" "}
            <i className="fas fa-envelope"></i>
          </h2>
          <h2 className="text-xl mb-2">
            Фамилиясы:{" "}
            <label className="font-semibold">{user.family_name}</label>{" "}
            <i className="fas fa-envelope"></i>
          </h2>
          <h2 className="text-xl mb-2">
            email: <label className="font-semibold">{user.email}</label>{" "}
            <i className="fas fa-envelope"></i>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Account;

// <div className="p-28 flex justify-around">
//     <div className="flex flex-col self-center mt-8 gap-5">
//       <h3 className="text-[24px] self-center">Login</h3>
//       <div className="flex flex-col self-center gap-[10px]">
//         <button className="w-max h-max self-center bg-transparent border-4 border-black flex gap-2 rounded-lg py-2 justify-center">
//           <GoogleOAuthProvider clientId="238420700429-gua260nmlhj7noct9v6ckcbkr4ifrj2l.apps.googleusercontent.com">
//             <GoogleLogin
//               className="google-login-button"
//               onSuccess={responseGoogle}
//               onError={responseGoogle}
//             />
//           </GoogleOAuthProvider>
//         </button>
//         <button className="w-[235px] self-center bg-[#1877F2] flex gap-2 rounded-[4px] py-2 justify-center">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
//             alt=""
//             className="self-center w-[25px]"
//           />
//           <p className="text-white self-center font-medium text-[14px]">
//             Continue with Facebook
//           </p>
//         </button>
//         <button className="w-[235px] self-center bg-black flex gap-2 rounded-[4px] py-2 justify-center">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRJzmGg29-e0zaQFwcOGIIlKRI7wDfxWQ5rCGACbUlA&s"
//             alt=""
//             className="self-center w-[22px]"
//           />
//           <p className="text-md text-white self-center font-medium text-[14px]">
//             Continue with Apple
//           </p>
//         </button>
//       </div>
//     </div>
//     <div className="mt-8 gap-5">
//       <h2>
//         Колдонуучунун суроту:
//         <img src={user.picture} />
//       </h2>
//       <h2>
//         Колдонуучунун аты: <label>{user.given_name} </label>
//         <i className="fa fa-envelope"></i>
//       </h2>{" "}
//       <h2>
//         Колдонуучунун фамилиясы: <label>{user.family_name} </label>
//         <i className="fa fa-envelope"></i>
//       </h2>{" "}
//       <h2>
//         Колдонуучунун email адреси: <label>{user.email} </label>
//         <i className="fa fa-envelope"></i>
//       </h2>
//     </div>
//   </div>
