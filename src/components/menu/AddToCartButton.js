import FlyingButton from "react-flying-item";

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <FlyingButton src={image} targetTop={"5%"} targetLeft={"90%"}>
          <span onClick={onClick}>Add to cart ${basePrice}</span>
        </FlyingButton>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={onClick}
        className="mt-4 bg-primary text-white rounded-full px-8 py-2"
      >
        <span>Add to cart (from ${basePrice})</span>
      </button>
    </div>
  );
}
