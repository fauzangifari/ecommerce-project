import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      const customer = users.find(
        (user) =>
          user.username === username &&
          user.password === password &&
          user.isAdmin === false
      );

      const admin = users.find(
        (user) =>
          user.username === username &&
          user.password === password &&
          user.isAdmin === true
      );

      if (customer) {
        alert("User login successful!");
        window.location.href = "/";
      } else if (admin) {
        alert("Admin login successful! Redirecting to dashboard...");
        window.location.href = "/dasboard";
        
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <Card className="w-96 marker:shadow-lg">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center bg-gradient-to-br from-black to-gray"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          {" "}
          <CardBody className="flex flex-col gap-4">
            <Input
              label=",Username"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Password"
              size="lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" className=""/>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              type="submit"
              className="bg-gradient-to-br from-black to-gray"
            >
              {" "}
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="/signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold bg-black bg-opacity-0 hover:bg-opacity-10 rounded-md px-1"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
