import Image from "./Image.jsx";

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return null; // Return null instead of an empty string
  }
  if (!className) {
    className = "object-cover"; // Apply the "object-cover" class to the image
  }

  // Apply the className to the <img> element
  return <Image className={className} src={place.photos[index]} alt="" />;
}
