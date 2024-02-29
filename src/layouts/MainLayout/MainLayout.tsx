export const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={""}>
      <div className={className}>{children}</div>
    </main>
  );
};
