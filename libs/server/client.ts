import { PrismaClient } from "@prisma/client";

export default new PrismaClient();

/*
const client = new PrismaClient();
client.user.create({data: {
    name: "zzz",
    email:"asdf"
}})
*/