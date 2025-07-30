// const {commonApi} = require("./commonApi")
// const {serverURL} = require("./serverURL")
import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"

// 1. add resume details to the server - POST -reqBody
export const addResumeAPI = async (reqBody) => {   //this is exporting to frontend
    return await commonApi("post",`${serverURL}/resumes`,reqBody)
}