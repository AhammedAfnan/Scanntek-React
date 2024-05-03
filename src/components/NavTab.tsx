type NavTabProps = {
    isActive?: boolean;
    to: string;
    children: React.ReactNode;
  };

  export default function NavTab({ isActive = false, to, children }: NavTabProps) {
    return (
      <a
        href={to}
        className={`text-xs p-3 rounded-lg select-none ${isActive ? "font-bold bg-white" : "text-white"}`}
      >
        {children}
      </a>
    );
  }
  

