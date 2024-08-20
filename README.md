How to setup this projet? </br>

Prerequisites: </br>

You need to have a Node.js and Git cli installed on your computer. </br>

To Download: </br>

Node.js: https://nodejs.org/en/download/package-manager/current </br>
Git cli: https://git-scm.com/downloads </br>

Now, follow the given steps to setup the project: </br>

Open a new terminal and paste these two commands in the terminal one by one: </br>

-> git clone https://github.com/ashutosh017/jwt-auth-vite.git </br>
-> cd jwt-auth-vite </br>

Now, setup few things: </br>

Create a '.env' file in the backend folder and paste contents of sampleEnv file in it. </br>

In your current terminal paste the following command: </br> 

-> openssl rand -base64 32 </br>

It has given you a string, copy that string and paste it in front of secret_key variable in your '.env' file. </br>

Now, paste the following commands in your teminal to start the frontend locally in your system: </br>

-> npm i </br>
-> cd frontend && npm run dev

And, open a new separate terminal and paste the following commands to start your backend server locally: </br>

-> npm i </br>
-> cd backend && npm run dev
