const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KmBrnGqAWx34Y8IP2P3n7AXcTfmYXkkNEwbZOdN3YTDqJqfgjfCp6EY4YoNjOgEW8vriAh1FIAtUjRT1qhWBjoL00IR54pU3u"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//Example endpoint

//http://localhost:5001/clone-cba18/us-central1/api
