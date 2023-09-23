export const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[340px] space-y-2">
        <div className="pb-10 space-y-2">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <input name="name" placeholder="Name" />
          <input name="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};
