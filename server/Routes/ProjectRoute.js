import { Router } from "express";
import { createProject, getProject } from "../Controllers/ProjectController.js";

export const ProjectRoute = Router()

ProjectRoute.route('/').post(createProject).get(getProject)