export const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={"bg-blue-gray-900"}>
      <div className={className}>{children}</div>
    </main>
  );
};
