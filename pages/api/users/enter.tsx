import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req:NextApiRequest,res:NextApiResponse){
    console.log(req.body);
    res.status(200).end();
    //res.json({ok:true});   
}

export default withHandler("POST", handler);