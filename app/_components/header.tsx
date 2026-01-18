export const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-lg font-semibold sm:text-xl">{children}</h2>;
};

export const HeaderSubtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-xs font-semibold text-slate-500">{children}</span>
  );
};

export const HeaderLeft = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-1">{children}</div>;
};

export const HeaderRight = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-shrink-0">{children}</div>;
};

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">{children}</div>
  );
};
