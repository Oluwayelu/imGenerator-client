import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

import { faqs } from "../../utils/DATA";
import { Button } from "../../components/widgets";
import { fadeIn, stagger } from "../../utils/variants";
import { FaqCard, ImgCard, ImgCardSkeleton } from "../../components/modules";

const HomeView = ({ posts, loading }) => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="max-w-7xl container mx-auto p-5 space-y-10"
    >
      {/* hero */}
      <motion.div
        variants={fadeIn({ direction: "up" })}
        className="w-full flex flex-col items-center justify-center text-center gap-5 md:gap-10"
      >
        {/* logo */}
        <div className="">
          <img src="/img/icon-dark.png" className="w-fit h-full" />
        </div>

        {/*  */}
        <h1>
          Unlock Your Creativity with imGenerator{" "}
          <span className="text-white">AI</span> - Your Ultimate Image Creation
          Companion.
        </h1>

        <h3>
          Experience the power of cutting-edge AI technology as it transforms{" "}
          <br className="hidden md:block" />
          your ideas into stunning visuals.
        </h3>

        <div className="w-2/3 h-14 flex itms-center justify-center space-x-3">
          <Link to="/create-post">
            <button className="px-10 py-3 font-medium rounded-full bg-gradient-to-r from-primary-200 to-primary hover:bg-primary-300">
              Generate AI image
            </button>
          </Link>
        </div>
      </motion.div>

      {/* body */}
      <motion.div
        variants={fadeIn({ direction: "up", delay: 1 })}
        className="w-full space-y-5"
      >
        {/* browse posted images */}
        <h3>Recent images posted to community</h3>

        {/* Images skeleton */}
        {loading && (
          <div className="min-h-[50vh] grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-2 gap-3">
            <ImgCardSkeleton />
          </div>
        )}
        {posts && posts.length !== 0 ? (
          <div className="min-h-[50vh] grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-2 gap-3">
            {posts.map((img, key) => (
              <ImgCard key={key} data={img} />
            ))}
          </div>
        ) : (
          <div className="w-full">
            <p className="text-lg text-primary-100">No posts found</p>
          </div>
        )}

        <div className="w-full flex justify-center">
          <Link to="/browse">
            <Button className="w-fit h-10 px-5 flex items-center rounded bg-primary">
              <span>Browse all images</span>
              <div className="inline-flex">
                <AiOutlineRight />
                <AiOutlineRight />
              </div>
            </Button>
          </Link>
        </div>

        {/* How it works */}
        <div id="about" className="w-full space-y-3 md:space-y-5">
          <h3>Unlocking Creativity: How imGenerator AI Works</h3>
          <p className="text-lg text-primary-100 leading-loose">
            ImGenerator's image generator harnesses the power of advanced
            artificial intelligence to transform your creative ideas into
            visually stunning realities. Here's a glimpse into how our
            innovative platform works its magic:
          </p>

          <motion.div
            variants={fadeIn({ direction: "right" })}
            whileInView="whileInView"
            className="text-lg text-primary-100 leading-loose"
          >
            <h3>Input Your Vision:</h3>
            <p>
              Begin your creative journey by providing a simple input—whether
              it's a description, or a concept. This is the seed from which our
              AI will flourish, generating images that align with your intent.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn({ direction: "right" })}
            whileInView="whileInView"
            className="text-lg text-primary-100 leading-loose"
          >
            <h3>AI Learning and Adaptation:</h3>
            <p>
              Our AI engine delves deep into a vast repository of diverse
              images, learning and understanding the intricacies of different
              artistic styles, genres, and aesthetics. This learning process
              enables the AI to adapt its creations to match your unique vision.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "right" })}
            whileInView="whileInView"
            className="text-lg text-primary-100 leading-loose"
          >
            <h3>Generative Process:</h3>
            <p>
              Once equipped with the knowledge of various artistic elements, the
              AI enters the generative process. It combines patterns, textures,
              colors, and shapes in ways that human creativity alone might not
              explore. The result? A range of visual outputs that are as
              innovative as they are breathtaking
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "right" })}
            whileInView="whileInView"
            className="text-lg text-primary-100 leading-loose"
          >
            <h3>Seamless Integration:</h3>
            <p>
              The images you generate aren't confined to our platform. Download
              and incorporate them into your projects, whether you're designing
              websites, creating marketing materials, or adding visuals to your
              personal artwork. ImGenerator seamlessly integrates with your
              creative workflow.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: "right" })}
            whileInView="whileInView"
            className="text-lg text-primary-100 leading-loose"
          >
            <h3>Community and Collaboration:</h3>
            <p>
              ImGenerator is more than just a tool; it's a community of
              like-minded individuals pushing the boundaries of creativity.
              Share your creations, exchange ideas, and collaborate with fellow
              creators who are also embracing the power of AI-generated images.
            </p>
          </motion.div>
          <motion.p
            variants={fadeIn({ direction: "right" })}
            whileInView="whileInView"
            className="text-lg text-primary-100 leading-loose"
          >
            Experience the Future of Creation: ImGenerator is your passport to a
            future where AI amplifies your creative potential. It's where
            technology and art converge, giving rise to visuals that captivate,
            inspire, and challenge the ordinary. Join us on this transformative
            journey, and let your imagination come to life like never before.
          </motion.p>
        </div>

        <div id="faqs" className="w-full space-y-3">
          <h3>Frequently Asked Questons</h3>

          <motion.div variants={stagger} className="space-y-3">
            {faqs.map((faq, key) => (
              <FaqCard key={key} data={faq} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeView;
