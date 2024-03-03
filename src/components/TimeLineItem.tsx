interface Props {
  date: string;
  info: string;
  onClick?: () => void;
}

export default function TimeLineItem({ date, info, onClick }: Props) {
  return (
    <li
      onClick={onClick}
      className={`grid md:grid-cols-2 w-full ${onClick ? 'hover:bg-red-800 cursor-pointer' : ''} transition-all duration-200 ease-in-out px-2 py-3 rounded-lg`}
    >
      <p className='font-semibold'>{date}:</p> <p>{info}</p>
    </li>
  );
}
