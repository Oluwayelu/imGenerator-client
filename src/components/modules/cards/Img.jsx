import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlineDownload, AiOutlineShareAlt } from "react-icons/ai";

import { createPost } from "../../../service";
import { useNotification } from "../../../hook";
import { fadeIn } from "../../../utils/variants";
import { downloadImage, shareRecentPhotos } from "../../../utils";

export const ImgCard = ({ data }) => {
  const navigate = useNavigate();
  const { notification } = useNotification();
  const { _id, name, prompt, photo, share } = data;

  const shareToCommunity = () => {
    createPost(data)
      .then((res) => {
        shareRecentPhotos(_id);
        notification("success", res.message);
        navigate("/browse");
      })
      .catch((err) => {
        notification("error", err.message);
      });
  };

  return (
    <motion.div
      variants={fadeIn({ direction: "up" })}
      initial="initial"
      animate="animate"
      className="relative rounded-xl group h-80 md:h-auto card shadow shadow-primary hover:shadow-md hover:shadow-primary overflow-hidden"
    >
      <img
        className="w-full h-full object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:absolute inset-0 bg-background/50" />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-background m-2 p-4 rounded-md">
        <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

        <div className="w-full mt-5 flex flex-col gap-2">
          <div className="w-full flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover bg-primary flex justify-center items-center text-white text-xs font-bold">
                {name[0]}
              </div>
              <p className="hidden md:block text-white text-sm">{name}</p>
            </div>
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="flex items-center outline-none text-primary md:text-white hover:text-primary border-none gap-2"
            >
              <div className="w-7 h-7 rounded-full object-cover bg-primary flex justify-center items-center text-white text-xs font-bold">
                <AiOutlineDownload className="w-4 h-4" />
              </div>
              <p className="hidden md:block text-sm">Download</p>
            </button>
          </div>
          {share && (
            <button
              onClick={shareToCommunity}
              className="flex items-center outline-none text-primary md:text-white hover:text-primary border-none gap-2"
            >
              <div className="w-7 h-7 rounded-full object-cover bg-primary flex justify-center items-center text-white text-xs font-bold">
                <AiOutlineShareAlt className="w-4 h-4" />
              </div>

              <p className="hidden md:block text-sm">Share to community</p>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
