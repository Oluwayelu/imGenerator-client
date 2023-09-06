import FileSaver from "file-saver";

import { randomPrompts } from "./DATA";

export const getRandomPrompt = () => {
  const randomIndex = Math.floor(Math.random() * randomPrompts.length);
  const randomPrompt = randomPrompts[randomIndex];

  return randomPrompt;
};

export const downloadImage = async (id, photo) => {
  FileSaver.saveAs(photo, `imGenerator-${id}.jpg`);
};

export const saveToRecentPhotos = (data) => {
  var recentPhotos = JSON.parse(localStorage.getItem("recent-photos"));
  if (recentPhotos) {
    recentPhotos.push({ ...data, _id: Math.floor(Math.random() * 1000000) });
  } else {
    recentPhotos = [{ ...data, _id: Math.floor(Math.random() * 1000000) }];
  }

  const recentPhotosLength = recentPhotos.length;
  recentPhotos = recentPhotos.slice(
    recentPhotosLength >= 3 ? recentPhotosLength - 3 : 0,
    recentPhotosLength
  );

  localStorage.setItem("recent-photos", JSON.stringify(recentPhotos));
};

export const getRecentPhotos = () => {
  const recentPhotos = JSON.parse(localStorage.getItem("recent-photos"));

  return recentPhotos ? recentPhotos.reverse() : null;
};

export const shareRecentPhotos = (id) => {
  const recentPhotos = JSON.parse(localStorage.getItem("recent-photos"));

  const updatedRecentPhotos = recentPhotos.map((photos) => {
    if (photos._id === id) {
      return { ...photos, share: false };
    }
    return photos;
  });

  localStorage.setItem("recent-photos", JSON.stringify(updatedRecentPhotos));
};

export const removeRecentPhotos = () => {
  localStorage.removeItem("recent-photos");
};

