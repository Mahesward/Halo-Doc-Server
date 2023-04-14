import { Request, Response } from 'express';
import { BLOG } from '../model/schema/export.js';

//* Get-all-blogs

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BLOG.find({});
    res.status(200).send({ success: true, message: 'get all blog successfull', data: blogs });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Internal server error' });
  }
};

export const getAllDoctors = async (params: type) => {};
