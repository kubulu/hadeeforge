import React from "react";

export class ApiService {
    public getBaseUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
           return "https://combifer-wp.netiapps.com/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost/hadeeforge/wp-hadeeforge/";
          
        }
        else{
            return "http://localhost/hadeeforge/wp-hadeeforge/";
        }
           
      }
      public getSiteUrl(): string {
        if(process.env.NEXT_PUBLIC_API_ENV == 'production'){
           
           return "https://combifer.netiapps.com/";
        }
       else if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         
         return "http://localhost:3000/";
          
        }
        else{
            return "https://combifer.netiapps.com/";
        }
           
      }
}