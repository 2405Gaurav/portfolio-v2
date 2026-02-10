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
    <Guestbookmsg/>
    <RecentMsgs/>
  </>
  );
}