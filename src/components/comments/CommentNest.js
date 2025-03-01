export const CommonNest = ({ Comment, CommentBy, Replies }) => {
  return (
    <div>
      <div className="flex ml-5  mt-2 justify-normal">
        <img
          src="https://avatar.iran.liara.run/public/28"
          alt="user"
          className="rounded w-[2%]"
        />
      </div>
      <div className="-mt-6 ml-[4rem]">
        <h1 className="font-bold">{CommentBy}</h1>
        <p>{Comment}</p>
      </div>
      <div className="ml-[6rem] ">
        <h1 className="font-bold">{Replies[0].CommentBy}</h1>
        <p>{Replies[0].Comment}</p>
      </div>
    </div>
  );
};
