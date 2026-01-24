//backend for the node mailer contact form
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req:any){


    try{
        const {email,name,message}=await req.json();
        const transporter=nodemailer.createTransport({
            service:'gamil',
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS  
            }
        });

        //now this transporter is used to send mail
        await transporter.sendMail({
            from:`portfolio Contact<${process.env.MAIL_USER}>`,
            to:process.env.MAIL_USER,
            subject:`New Message from ${name}`,
            text:`${message} \n\nFrom: ${email}`
        });

        return NextResponse.json({
            success:true,
            message:'Message sent successfully',
            status:200,
        });

        
    }catch(error){
        return NextResponse.json({
            success:false,
            message:'Something went wrong',
            status:500,
        });
    }




}