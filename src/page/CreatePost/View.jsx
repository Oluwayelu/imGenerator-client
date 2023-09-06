import { motion } from "framer-motion";
import { FaImage } from "react-icons/fa";

import { fadeIn } from "../../utils/variants";
import { ImgCard } from "../../components/modules";
import { Button, Input, Spinner } from "../../components/widgets";

const CreatePostView = ({
  photo,
  loading,
  register,
  recentPosts,
  removePosts,
  randomPrompt,
  onCreatePost,
  onGenerateImg,
  generatingImg,
  generateRandomPrompt,
}) => {
  return (
    <div className="max-w-7xl container mx-auto p-5 space-y-10">
      <div className="space-y-3">
        <h2>Create post</h2>
        <p className="text-lg text-primary-100">
          Generate an imaginative image through imGenerator AI and share it with
          the community
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-5 md:gap-10">
        <div className="w-full lg:w-3/5">
          <form onSubmit={onGenerateImg} className="w-full space-y-5">
            <Input
              id="name"
              label="Name"
              placeholder="Enter your name"
              {...register("name")}
            />
            <Input
              required
              label="Prompt"
              placeholder="Enter your prompt"
              {...register("prompt")}
            />
            <div className="relative w-2/3 md:w-1/2 h-60 lg:h-80 flex items-center justify-center border-2 border-primary bg-primary-100 rounded-lg overflow-hidden">
              {photo ? (
                <img
                  src={photo}
                  alt="generated-img"
                  className="w-full h-full flex"
                />
              ) : (
                <FaImage className="w-fit h-1/2 text-background" />
              )}
              {generatingImg && (
                <div className="absolute inset-0 bg-background/70 w-full h-full flex items-center justify-center">
                  <Spinner />
                </div>
              )}
            </div>
            <Button loading={generatingImg} type="submit" className="w-full ">
              Generate
            </Button>
          </form>

          <div className="mt-10">
            <p className="mt-2 text-primary-100 text-[14px]">
              ** Once you have created the image you want, you can share it with
              others in the community **
            </p>
            <Button
              type="button"
              loading={loading}
              onClick={onCreatePost}
              className="mt-3 text-white bg-primary-400 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Share with the Community
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-2/5 space-y-3">
          <h3>Recent images generated</h3>

          <div className="w-full flex flex-col md:items-center space-y-2">
            {recentPosts ? (
              <>
                <div className="grid grid-cols-2 gap-3">
                  {recentPosts.map((data, key) => (
                    <ImgCard key={key} data={data} />
                  ))}
                </div>
                <Button
                  onClick={removePosts}
                  className="bg-red-500 hover:bg-red-400"
                >
                  Remove all
                </Button>
              </>
            ) : (
              <motion.p
                variants={fadeIn({ direction: "up" })}
                initial="initial"
                animate="animate"
                className=""
              >
                No photos here
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostView;
