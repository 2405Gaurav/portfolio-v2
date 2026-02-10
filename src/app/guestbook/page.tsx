"use client";
import Guestbookmsg from "@/pc/guestbook-mesg";
import RecentMsgs from "@/pc/recent-msgs";

export async function submitMessage(message:string){
    //this function will send the message to the backend
    await fetch("/api/guestbook", {
  method: "POST",
  body: JSON.stringify({ message }),
});
}

export default function Guestbook() {

 return (
  <>
 <h1 className="text-5xl font-bold">Guestbook</h1>
 <p>
You have scrolled enough. Leave a note so I know you were here.</p>
 <div>
  <img className="w-full h-54 mt-3 object-cover rounded-3xl" src="/images/guestbook.png" alt="" />
 </div>

    <Guestbookmsg/>
    <RecentMsgs/>
  </>
  );
}