import { Router } from "express";
import * as documento from "../controllers/documento.controller";

const router = Router();

const {checkToken} = require('../auth/token_validation');
router.get("/",checkToken, documento.getDocumento);
router.get("/:id",checkToken, documento.getDocumentoId);
router.get("/con/:id",checkToken, documento.getDocumentoContribuyente);
router.get("/buscar/:id",checkToken, documento.getDocumentoSolicitud);
router.post("/contribuyente/add",checkToken, documento.crearDocumento2);
router.post("/",checkToken, documento.crearDocumento);
router.put("/:id",checkToken, documento.updateDocumento);
router.put("/contribuyente/:id",checkToken, documento.updateDocumento2);
router.delete("/:id",checkToken, documento.deleteEtapaSolicitud);

export default router;
