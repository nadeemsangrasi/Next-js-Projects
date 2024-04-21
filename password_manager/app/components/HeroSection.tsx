"use client";
import React, { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const HeroSection = () => {
  interface Inputs {
    url: string;
    user: string;
    password: string;
  }
  let [src, setSrc] = useState<string>("/images/open-eye.png");
  let [type, setType] = useState<string>("password");
  let [toggle, setToggle] = useState<boolean>(true);
  function handleChangeImage(): void {
    if (toggle) {
      setSrc("/images/close-eye.png");
      setType("text");
    } else {
      setSrc("/images/open-eye.png");
      setType("password");
    }
    setToggle(!toggle);
  }

  let [urlInput, setUrlInput] = useState<string>("");
  let [userNameInput, setUserNameInput] = useState<string>("");
  let [passwordInput, setPasswordInput] = useState<string>("");
  let [inputs, setInputs] = useState<Inputs[]>([]);

  function handleUrlInputCHange(e: React.ChangeEvent<HTMLInputElement>): void {
    setUrlInput(e.target.value);
  }
  function handleUserNameInputChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setUserNameInput(e.target.value);
  }
  function handlePasswordInputChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPasswordInput(e.target.value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>): any {
    e.preventDefault();
    if (
      urlInput.length === 0 ||
      userNameInput.length === 0 ||
      passwordInput.length === 0
    ) {
      toast("Please fill all inputs", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else
      setInputs([
        ...inputs,
        { url: urlInput, user: userNameInput, password: passwordInput },
      ]);
    setUrlInput("");
    setUserNameInput("");
    setPasswordInput("");
  }

  function handleDeletPassword(i: number): void {
    let copyInputs = [...inputs];
    copyInputs.splice(i, 1);
    setInputs(copyInputs);
  }
  function handleEditPassword(i: number): void {
    let copyInputs = [...inputs];
    if (
      urlInput.length === 0 &&
      userNameInput.length === 0 &&
      passwordInput.length === 0
    ) {
      setUrlInput(copyInputs[i].url);
      setUserNameInput(copyInputs[i].user);
      setPasswordInput(copyInputs[i].password);
      copyInputs.splice(i, 1);
      setInputs(copyInputs);
    } else {
      toast("Please empty the inputs", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  function copyText(text: any) {
    toast("copied to clipboard " + text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    navigator.clipboard.writeText(text);
  }
  let [type2, setType2] = useState("password");
  let [toggle2, setToggle2] = useState(false);
  function handleChangeType2(): void {
    setToggle2(!toggle2);
    if (toggle2) {
      setType2("text");
    } else {
      setType2("password");
    }
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className=" inset-0 -z-1 min-h-[100vh] w-full items-center px-5 py-2 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="myContainer text-white text-center ">
          <form action="#" onSubmit={handleSubmit}>
            <div className="heading">
              <span className="text-[#ee98fb] text-3xl"> &lt;</span>
              <span className="text-3xl font-bold">Manage</span>
              <span className="text-[#ee98fb] text-3xl mt-3 font-bold">
                Pass/&gt;
              </span>
              <p>Your own Password Manager</p>
            </div>
            <div className="inputs mt-4">
              <input
                onChange={handleUrlInputCHange}
                value={urlInput}
                type="text"
                placeholder="Enter website URL"
                className="w-[82%] p-2 rounded-2xl text-black text-sm  lg:text-xl"
              />
              <div className=" two my-6 space-x-4 relative">
                <input
                  onChange={handleUserNameInputChange}
                  value={userNameInput}
                  type="text"
                  placeholder="Enter Username"
                  className="w-[40%] text-sm  lg:text-xl lg:w-[58%] p-2 rounded-2xl text-black"
                />
                <input
                  onChange={handlePasswordInputChange}
                  value={passwordInput}
                  type={type}
                  placeholder="Enter Password"
                  className="w-[40%] text-sm  lg:text-lg lg:w-[23%] p-2 rounded-2xl text-black"
                />

                <img
                  onClick={handleChangeImage}
                  className="h-[33px] w-[33px] lg:w-[43px] lg:h-[40px] mix-blend-darken absolute right-[10%] top-[9%] "
                  src={src}
                  height={40}
                  width={40}
                  alt="eye image"
                />
              </div>
            </div>
            <button className="text-lg lg:text-2xl mx-auto font-bold flex items-center justify-center bg-[#c909e7] p-2 border-2 hover:bg-[#b562c2] rounded-3xl text-white">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#16c79e"
              ></lord-icon>
              Add Password
            </button>
          </form>
        </div>
        <div className=" md:myContainer  ">
          <div>
            <h1 className="text-center text-white font-bold text-3xl  mb-4">
              Your Passwords
            </h1>
            {inputs.length === 0 && (
              <h1 className="text-center  font-semibold text-white -mt-3">
                Plase add passwords
              </h1>
            )}
            {inputs.length !== 0 && (
              <table className="w-[100%]  lg:w-[85%] rounded-md overflow-hidden text-center mx-auto">
                <thead className="text-white bg-[#c909e7]  font-bold text-md ">
                  <tr>
                    <th className="py-3">Site</th>
                    <th>Username</th>
                    <th>Passwords</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-[#fafdfd]">
                  {inputs.map((input: Inputs, index: number) => (
                    <tr>
                      <td className="max-w-[70px] lg:max-w-[300px]   break-words lg:w-fit   py-2 border-white font-semibold text-md lg:px-2 px-2">
                        <a href={input.url} target="blank">
                          {input.url}{" "}
                        </a>
                        <lord-icon
                          src="https://cdn.lordicon.com/pcllgpqm.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#9cf4df,tertiary:#f4f19c"
                          style={{
                            width: "32px",
                            height: "32px",
                            paddingTop: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => copyText(input.url)}
                        ></lord-icon>
                      </td>
                      <td className="max-w-[70px]   lg:max-w-[300px]  break-words py-2 border-white font-semibold text-md px-2 lg:px-2">
                        {input.user}
                        <lord-icon
                          src="https://cdn.lordicon.com/pcllgpqm.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#9cf4df,tertiary:#f4f19c"
                          style={{
                            width: "32px",
                            height: "32px",
                            paddingTop: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => copyText(input.user)}
                        ></lord-icon>
                      </td>
                      <td className=" max-w-[70px] lg:max-w-[300px]   break-words py-2 px-2  border-white font-semibold text-md lg:px-2">
                        <input
                          readOnly
                          className="outline-none w-[55px] mr-2"
                          type={type2}
                          value={input.password}
                        />
                        <lord-icon
                          src="https://cdn.lordicon.com/fmjvulyw.json"
                          trigger="hover"
                          style={{
                            width: "32px",
                            height: "32px",
                            paddingTop: "10px",
                            cursor: "pointer",
                          }}
                          onClick={handleChangeType2}
                        ></lord-icon>
                        <lord-icon
                          src="https://cdn.lordicon.com/pcllgpqm.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#9cf4df,tertiary:#f4f19c"
                          style={{
                            width: "32px",
                            height: "32px",
                            paddingTop: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => copyText(input.password)}
                        ></lord-icon>
                      </td>
                      <td className="py-2 px-2  border-white font-semibold text-lg">
                        <button onClick={() => handleDeletPassword(index)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/xekbkxul.json"
                            trigger="hover"
                          ></lord-icon>
                        </button>
                        <button onClick={() => handleEditPassword(index)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/lsrcesku.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#a39cf4,tertiary:#eee966,quaternary:#ebe6ef"
                          ></lord-icon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
