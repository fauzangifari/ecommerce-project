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

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/users");
      const checkUser = response.data.find((user) => {
        return user.username === username && user.password === password;
      });

      if (checkUser) {
        alert("User sudah terdaftar. Silahkan daftar dengan nama lain.");
      } else {
        const newUser = {
          username: username,
          password: password,
          isAdmin: false,
          cart: [],
        };

        await axios.post("http://localhost:5000/users", newUser);
        alert("Registration successful!");
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
              label="Username"
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
            <Input
              label="Confirm Password"
              size="lg"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" className="" />
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
              Sign Up
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
