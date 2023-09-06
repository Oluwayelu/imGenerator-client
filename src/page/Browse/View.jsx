import { Button, Input, Spinner } from "../../components/widgets";
import { ImgCard, ImgCardSkeleton } from "../../components/modules";

const BrowseView = ({
  posts,
  loading,
  lastPage,
  loadMore,
  loadingMore,
  handleSearchChange,
}) => {
  return (
    <div className="max-w-7xl container mx-auto p-5 space-y-10">
      {/* search */}
      <div className="w-full space-y-2">
        {/* browse posted images */}
        <h3>Browse images posted to community</h3>

        {/* search input */}
        <div className="w-full flex items-center space-x-3">
          <Input
            type="search"
            className="w-full md:w-2/3"
            placeholder="Search for image or name of creator"
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* body */}
      <div className="w-full ">
        {/* Images skeleton */}
        {loading ? (
          <div className="min-h-[50vh] grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-2 gap-3">
            <ImgCardSkeleton />
          </div>
        ) : posts && posts.length !== 0 ? (
          <div className="w-full space-y-5">
            <div className="min-h-[50vh] grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-2 gap-3">
              {posts.map((img, key) => (
                <ImgCard key={key} data={img} />
              ))}
            </div>
            {loadingMore && <Spinner />}
            {!lastPage && !loadingMore && (
              <div className="w-full flex justify-center">
                <Button onClick={loadMore}>Load more...</Button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full">
            <p className="text-lg text-primary-100">No posts found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseView;
