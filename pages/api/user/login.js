import { PrismaClient, Prisma } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()

export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return getUserInfo();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function getUserInfo() {
        const users = await prisma.Usuario.findMany();
        if (users) {
            for (let i = 0; i < users.length; i++) {
                if(users[i].email === req.body.email){
                    if (req.body.password === users[i].senha) {
                        res.status(200).json(users[i]);
                    } else {
                        res.status(400).end();
                    }
                    break
                }
            }
            res.status(400).end();
        } else {
            res.status(400).end();
        }
    }
}

