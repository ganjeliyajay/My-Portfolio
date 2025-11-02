import { Router } from "express";
import { createProject, getProject } from "../Controllers/ProjectController.js";

export const ProjectRoute = Router()

ProjectRoute.route('/projects').post(createProject).get(getProject)