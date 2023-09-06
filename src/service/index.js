import { saveToRecentPhotos } from "../utils";

// const API_URL = "http://localhost:8080/api/v1";
const API_URL = "https://imgenerator.onrender.com/api/v1";

export const generateImage = async (data, setLoading = null) => {
  const { name, prompt } = data;

  if (prompt) {
    setLoading && setLoading(true);
    try {
      const response = await fetch(`${API_URL}/generate-img`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });
      const res = await response.json();

      saveToRecentPhotos({
        prompt,
        share: true,
        photo: res.photo,
        name: name ? name : "Anonymous",
      });

      return res;
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading && setLoading(false);
    }
  } else {
    throw new Error("Please provide proper prompt");
  }
};

export const createPost = async (data, setLoading = null) => {
  if (data.prompt && data.photo) {
    setLoading && setLoading(true);
    try {
      const response = await fetch(`${API_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          name: data.name ? data.name : "Anonymous",
        }),
      });

      const res = await response.json();
      return res;
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading && setLoading(false);
    }
  } else {
    throw new Error("Please generate an image with proper details");
  }
};

export const getPosts = async (
  setLoading = null,
  page = 1,
  limit = 10,
  search = ""
) => {
  setLoading(true);
  try {
    const response = await fetch(
      `${API_URL}/post?page=${page}&limit=${limit}&search=${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    throw new Error(err);
  } finally {
    setLoading(false);
  }
};
