import {supabase} from '@/lib/supabase';
import { getServerSession } from "next-auth";//we use this get hte context of the suer not from frontend but from the backend

export async function POST(req:Request){
    const session=await getServerSession();
    if(!session){
        return new Response('Unauthorized',{status:401});
    }

    const {message}=await req.json();

    const { error } = await supabase.from("guestbook").insert({
    user_name: session.user?.name,
    user_image: session.user?.image,
    message,
  });
    if (error) {
    return new Response(error.message, { status: 500 });
  }
  return Response.json({ success: true });
}

export async function GET(){
    const {data,error}=await supabase.from("guestbook")
    .select("*")
    .order("created_at",{ascending:false});

    if(error){
        return new Response(error.message,{status:500});

    }
    
    return Response.json(data);
}
