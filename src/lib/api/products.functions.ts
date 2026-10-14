import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { bindings } from '../bindings.server';
const schema=z.object({id:z.number().optional(),brand:z.string().min(1).max(80),name:z.string().min(1).max(140),description:z.string().max(1000),price:z.string().max(80),image_url:z.string().max(1200),badge:z.string().max(80),status:z.string().max(40),featured:z.boolean(),password:z.string().min(1)});
function db(){const {DB}=bindings();if(!DB)throw new Error('Database unavailable');return DB}
function auth(p:string){const x=process.env.ADMIN_PASSWORD||'';if(!x||p!==x)throw new Error('Unauthorized')}
export const listProducts=createServerFn({method:'GET'}).handler(async()=>{const r=await db().prepare('SELECT * FROM products ORDER BY featured DESC,id DESC').all();return r.results as any[]});
export const adminCheck=createServerFn({method:'POST'}).inputValidator(z.object({password:z.string()})).handler(async({data})=>{auth(data.password);return{ok:true}});
export const saveProduct=createServerFn({method:'POST'}).inputValidator(schema).handler(async({data})=>{auth(data.password);const d=db();if(data.id){await d.prepare('UPDATE products SET brand=?,name=?,description=?,price=?,image_url=?,badge=?,status=?,featured=? WHERE id=?').bind(data.brand,data.name,data.description,data.price,data.image_url,data.badge,data.status,data.featured?1:0,data.id).run()}else{await d.prepare('INSERT INTO products(brand,name,description,price,image_url,badge,status,featured) VALUES(?,?,?,?,?,?,?,?)').bind(data.brand,data.name,data.description,data.price,data.image_url,data.badge,data.status,data.featured?1:0).run()}return{ok:true}});
export const deleteProduct=createServerFn({method:'POST'}).inputValidator(z.object({id:z.number(),password:z.string()})).handler(async({data})=>{auth(data.password);await db().prepare('DELETE FROM products WHERE id=?').bind(data.id).run();return{ok:true}});
