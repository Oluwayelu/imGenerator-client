import Skeleton from "react-loading-skeleton";

export const ImgCardSkeleton = ({ cards = 5 }) => {
  return Array(cards)
    .fill(0)
    .map((_, key) => (
      <div key={key} className="h-60 md:h-auto card shadow-card rounded-xl">
        <Skeleton className="w-full h-full" />
      </div>
    ));
};
