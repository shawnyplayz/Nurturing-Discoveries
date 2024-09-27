import { Skeleton } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const TeamCard = ({ name, position, imageUrl, loading = false }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-ivory bg-clip-border rounded-xl min-w-80 min-h-fit pt-7">
      {/* Image Section */}
      <div className="relative overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        ) : (
          <Image
            src={imageUrl}
            alt={`${name}'s profile picture`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        )}
      </div>

      {/* Text Section */}
      <div className="p-6 text-center">
        {loading ? (
          <>
            <Skeleton
              variant="text"
              width="60%"
              height={32}
              sx={{ margin: "0 auto" }}
            />
            <Skeleton
              variant="text"
              width="40%"
              height={24}
              sx={{ margin: "16px auto 0 auto" }}
            />
          </>
        ) : (
          <>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h4>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed">
              {position}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
  loading: PropTypes.bool,
};

export default TeamCard;
