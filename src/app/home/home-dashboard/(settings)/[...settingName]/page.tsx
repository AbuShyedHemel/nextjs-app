import { FC } from "react";

type Props = {
  params: {
    settingName: string;
  };
};

const page: FC<Props> = ({ params }) => {
  return (
    <div className="bg-purple-400">
      <h1>The setting is: {params.settingName}</h1>
    </div>
  );
};

export default page;
