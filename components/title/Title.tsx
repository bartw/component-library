type Props = { level?: 1 | 2 | 3 | 4 | 5 | 6; children: React.ReactNode };

export const Title = ({ level, children }: Props) => {
  switch (level) {
    case 6:
      return <h6>{children}</h6>;
    case 5:
      return <h5>{children}</h5>;
    case 4:
      return <h4>{children}</h4>;
    case 3:
      return <h3>{children}</h3>;
    case 2:
      return <h2>{children}</h2>;
    case 1:
    default:
      return <h1>{children}</h1>;
  }
};
