import NotepadIcon from './logo';

type HeaderProps = {
  userName: string;
  taskNumber: number;
};

export default function Header({ userName, taskNumber }: HeaderProps) {
  return (
    <div className="flex justify-between p-4 sm:p-6 md:p-8 lg:px-10 lg:py-6 bg-primary">
      <div>
        <h1 className="text-base font-bold sm:text-lg md:text-xl lg:text-2xl text-white">
          {userName}
        </h1>
        <h2 className="text-sm font-bold sm:text-base md:text-lg lg:text-xl text-secondary">
          {taskNumber} Tasks Pending
        </h2>
      </div>
      <div>
        <NotepadIcon />
      </div>
    </div>
  );
}
