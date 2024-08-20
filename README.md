How to setup this projet? </br>

Follow the given steps: </br>

Open a new terminal and paste these two commands in the terminal one by one: </br>

-> git clone https://github.com/ashutosh017/jwt-auth-vite.git </br>
-> cd jwt-auth-vite </br>

Now, setup few things: </br>

Create a '.env' file in the backend folder and paste contents of sampleEnv file in it. </br>

In your current terminal paste the following command: </br> 

-> openssl rand -base64 32 </br>

It has given you a string, copy that string and paste it in front of secret_key variable in your '.env' file. </br>

Now, paste the following command in your teminal to start the frontend locally in your system: </br>

-> cd frontend && npm run dev

And, open a new separate terminal and paste the following command to start your backend server locally: </br>

-> cd backend && npm run dev
