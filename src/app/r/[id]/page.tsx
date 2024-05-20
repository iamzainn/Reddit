
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Cake, FileQuestion } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/lib/db";

async function getData(name: string) {
 const data = prisma.subreddit.findUnique({
    where:{
        name
    },
    select:{
        id :true,
        createdAt: true,
        userId:true,
        name:true,
        description:true
    }
 })
 return {data}

}
  

   

export default async function SubRedditRoute({
  params,
 
}: {
  params: { id: string };
  
}) {
  const { data } = await getData(params.id);
  const { getUser } = getKindeServerSession();
  
}