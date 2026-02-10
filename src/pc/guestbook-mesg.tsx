"use client";
import {signIn, signOut, useSession} from "next-auth/react";
 //we will also need a state to store the message that the user wants to send to me.
import { useState } from "react";


export async function submitMessage(message:string){
    //this function will send the message to the backend
    await fetch("/api/guestbook", {
  method: "POST",
  body: JSON.stringify({ message }),
});
}

export default function Guestbookmsg() {
  const [message,setMessage]=useState("");
    const { data: session, status } = useSession();//This line means: 👉 “Give me the current login session and the loading state of authentication.”
//here we are destructering the thingss use seesion give us two things: session and status,so we rename the session->data
//and status can be "loading","authenticated" or "unauthenticated"

if(status=="loading"){
  return (
    <>Please wait while we load your session...</>
  )
}

//if user is not logged in then show the sign in button
  if (!session) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold">Guestbook</h1>
        <p className="text-gray-500">
          Sign in with GitHub to leave a message.
        </p>

        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 rounded-lg bg-black text-white"
        >
          Sign in with GitHub
        </button>
      </div>
    );
  }
 return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Guestbook</h1>

      {/* user info */}
      <div className="flex items-center gap-3">
        <img
          src={session.user?.image || ""}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <p className="font-semibold">{session.user?.name}</p>

        <button
          onClick={() => signOut()}
          className="ml-auto text-sm text-red-500"
        >
          Logout
        </button>
      </div>

      {/* message box */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Leave a message..."
        className="w-full border rounded-lg p-2 min-h-[100px]"
      />

      <button
        className="px-4 py-2 rounded-lg bg-black text-white"
     onClick={()=>{submitMessage(message)}}
      >
        Send Message
      </button>
    </div>
  );
}