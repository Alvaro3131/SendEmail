import express from "express";
import morgan from "morgan";
import etaparoutes from "./routes/etapasolicitud.routes";
import documentoroutes from "./routes/documento.routes";
import contribuyenteroutes from "./routes/contribuyente.routes";
import solicitudroutes from "./routes/solicitud.routes";
import personajroutes from "./routes/personaj.routes";
import personanroutes from "./routes/personan.routes";
import tipodocumentoroutes from "./routes/tipo_documento.routes";
import trabajadorroutes from "./routes/trabajador.routes";
import usuarioroutes from "./routes/usuario.routes";
import rolroutes from "./routes/rol.routes";
import rolusuarioroutes from "./routes/rolusuario.routes";
import authRoutes from "./routes/auth.routes";
import upload from "./routes/upload.routes";
import pkg from "../package.json";

const app = express();
const nodemailer = require("nodemailer");
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Bienvenido a Node Js por el grupo 1 ....");
});
app.post("/sendemail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "alvaro.alvac@gmail.com", // generated ethereal user
      pass: "mribmclwxkznurme", // generated ethereal password
    },
  });
  const { to, subject, text } = req.body;
  const info = await transporter.sendMail({
    from: "'Alvaro Alva Chipana' <alvaro.alvac@gmail.com>",
    to: to,
    subject: subject,
    text: text,
  });
  console.log("Message sent", info.messageID);
  res.send("Enviado");
});

app.use(express.static("./uploads"));
app.use("/upload", upload);
app.use("/api/auth", authRoutes);
app.use("/api/auth/etapa", etaparoutes);
app.use("/api/auth/documento", documentoroutes);
app.use("/api/auth/contribuyente", contribuyenteroutes);
app.use("/api/auth/solicitud", solicitudroutes);
app.use("/api/auth/personaj", personajroutes);
app.use("/api/auth/personan", personanroutes);
app.use("/api/auth/tipodocumento", tipodocumentoroutes);
app.use("/api/auth/trabajador", trabajadorroutes);
app.use("/api/auth/usuario", usuarioroutes);
app.use("/api/auth/rol", rolroutes);
app.use("/api/auth/rolusuario", rolusuarioroutes);
export default app;
