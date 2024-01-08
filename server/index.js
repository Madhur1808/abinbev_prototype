const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const OpenAI = require("openai");
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
//initialising express server
const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

let USERS = [];
let user_data = [];
let user_Path = "./files/users.json";

try {
  USERS = JSON.parse(fs.readFileSync(user_Path, "utf8"));
  user_data = JSON.parse(fs.readFileSync("./files/data.json", "utf8"));
} catch {
  USERS = [];
}

console.log(USERS);

//authentication
const SECRET = "my-secret-key";

const authenticateJwtuser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        // console.log("returen from here");
        return res.sendStatus(403);
      }
      console.log("hererrerererer", user);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

//payments

app.post("/api/create-checkout-session", async (req, res) => {
  console.log("ffydtdfyfffff");
  const { products } = req.body;
  console.log(products);

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.qnty,
  }));

  console.log(lineItems, "herelineitems");
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://abinbev-prototype.vercel.app/sucess",
    cancel_url: "https://abinbev-prototype.vercel.app/cancel",
  });

  res.send({ id: session.id });
});

// chatapp

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/openaichat", async (req, res) => {
  const msg = req.body.message;
  try {
    console.log(msg);

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a SalesPerson." },
        { role: "user", content: msg },
      ],
      model: "gpt-3.5-turbo",
    });

    return res
      .status(200)
      .json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/signup", (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  const user = USERS.find((a) => {
    a.email === email;
  });
  if (user) res.status(403).json({ message: "User already exists" });
  const newUser = { username, email, password };
  USERS.push(newUser);
  fs.writeFileSync(user_Path, JSON.stringify(USERS));
  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ message: "User registered successfully,Please Login !", token });
});

app.post("/login", (req, res) => {
  const { email, password } = req.headers;
  const user = USERS.find((a) => a.email === email && a.password === password);
  if (user) {
    const token = jwt.sign({ email }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.get("/me", authenticateJwtuser, (req, res) => {
  console.log("thidvghbnjghjnmbkjhk1", req.user);
  res.json({ email: req.user.email });
});

app.get("/dashboard", (req, res) => {
  res.json(user_data);
});

app.listen(4000, () => {
  console.log("server started");
});
