import axios from "axios"

export const postCreateThread = async (postUrl, threadName) => {
  const postParameter = {
    title: threadName
  };
  await axios.post(postUrl, postParameter)
    .catch(error => {
      throw new Error(error.request.status);
    });
}