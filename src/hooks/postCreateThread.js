import axios from "axios";

export const postCreateThread = async (postUrl, threadName) => {
  const postParameter = {
    title: threadName
  };
  const response = await axios.post(postUrl, postParameter)
    .catch(error => {
      throw new Error(error.response.status);
    });
  return response;
}