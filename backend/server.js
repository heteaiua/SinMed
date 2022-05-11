const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const patientRoutes = require("./routes/patient-routes");
const doctorRoutes = require("./routes/doctor-routes");
const specializationRoutes = require("./routes/specialization-routes");
const appointmentRoutes = require("./routes/appointment-routes");

//mongodb+srv://sinus2:sinusdoi@cluster0.j4zlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect(
    "mongodb+srv://sinus2:sinusdoi@cluster0.j4zlt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("connected to database Dashboard (0_0)");
  })
  .catch((err) => {
    console.log("connection failed (dashboard)"), console.log(err);
  });

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyparser.json({ limit: "400mb" }));
app.use(bodyparser.urlencoded({ limit: "400mb", extended: true }));

app.use("/", patientRoutes);
app.use("/doctors", doctorRoutes);
app.use("/specializations", specializationRoutes);
app.use("/appointments",appointmentRoutes);

app.listen(8080);
