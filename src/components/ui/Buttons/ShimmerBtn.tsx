export const ShimmerBtn = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
}) => {
  return (
    <button
      type={type}
      className="w-full text-white inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      {children}
    </button>
  );
};
