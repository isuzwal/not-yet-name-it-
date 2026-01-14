interface ChildrenProp {
  children: React.ReactNode;
}
export const Section = ({ children }: ChildrenProp) => {
  return <div className="w-full mx-auto max-w-5xl">{children}</div>;
};
