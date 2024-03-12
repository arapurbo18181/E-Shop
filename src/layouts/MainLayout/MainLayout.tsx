import { cn } from "../../utils";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main>
      <Navbar />
      <div className={cn(className, ``)}>{children}</div>
      <Footer />
    </main>
  );
};
