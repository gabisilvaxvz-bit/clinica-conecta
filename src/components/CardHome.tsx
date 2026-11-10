interface CardHomeProps {
  text: string;
  number: number;
  icon: string;
}

  export default function CardHome()({ text, number, icon }: CardHomeProps) {
  return (
    <div data-text={text} data-number={number} data-icon={icon} />
  );
}
