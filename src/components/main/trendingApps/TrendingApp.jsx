import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const TrendingApp = ({ app }) => {
  const { image, title, downloads, ratingAvg, description } = app;

  return (
    <div className="p-5 bg-base-100 rounded-lg shadow-sm hover:shadow-2xl">
      <img className="rounded-lg w-full" src={image} alt="" />
      <h4 className="text-wrap font-medium my-3">
        {title}: {description}
      </h4>
      <span className="flex justify-between items-center">
        <p>
          <small className="flex justify-center items-center gap-2 text-emerald-500 bg-emerald-50 py-1 px-2 rounded-lg font-semibold">
            <MdOutlineFileDownload />
            {downloads / 1000000}M
          </small>
        </p>
        <p>
          <small className="flex justify-center items-center gap-2 text-amber-500 bg-amber-50 py-1 px-2 rounded-lg font-semibold">
            <FaStar />
            {ratingAvg}
          </small>
        </p>
      </span>
    </div>
  );
};

export default TrendingApp;
