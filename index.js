const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "528139eb-b36e-4374-b61a-afc20a1eb523" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle other errors
      console.error("Error:", e.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
