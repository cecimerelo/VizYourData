import {jest} from "@jest/globals";
import server from "./api/routes.js";

server.close();
jest.setTimeout(30000);