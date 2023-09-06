import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  getRandomPrompt,
  getRecentPhotos,
  removeRecentPhotos,
} from "../../utils";
import { useNotification } from "../../hook";
import { Landing } from "../../components/layout";
import { createPost, generateImage } from "../../service";

import CreatePostView from "./View";

export const CreatePostContainer = () => {
  const { notification } = useNotification();
  const navigate = useNavigate();

  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);
  const [randomPrompt, setRandomPrompt] = useState(getRandomPrompt());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      prompt: randomPrompt,
    },
  });

  const onGenerateImg = (data) => {
    generateImage(data, setGeneratingImg)
      .then((res) => {
        setPhoto(res.photo);
        notification("success", res.message);
      })
      .catch((err) => notification("error", err.message));
  };

  const onCreatePost = (data) => {
    createPost({ ...data, photo }, setLoading)
      .then((res) => {
        notification("success", res.message);
        navigate("/browse");
      })
      .catch((err) => {
        notification("error", err.message);
      });
  };

  const generateRandomPrompt = () => {
    setRandomPrompt(getRandomPrompt());
  };

  const removePosts = () => {
    removeRecentPhotos();
    notification("success", "All posts removed successfully");
  };

  return (
    <Landing>
      <CreatePostView
        photo={photo}
        errors={errors}
        loading={loading}
        register={register}
        removePosts={removePosts}
        randomPrompt={randomPrompt}
        generatingImg={generatingImg}
        recentPosts={getRecentPhotos()}
        onCreatePost={handleSubmit(onCreatePost)}
        onGenerateImg={handleSubmit(onGenerateImg)}
        generateRandomPrompt={generateRandomPrompt}
      />
    </Landing>
  );
};
