interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
  }
  
  export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
    return (
      <section
        id={id}
        className={`min-h-screen py-16 ${className || ''}`}
      >
        {children}
      </section>
    );
  };
  