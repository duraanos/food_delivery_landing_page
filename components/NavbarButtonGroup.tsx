export default function NavbarButtonGroup() {
  return (
    <div className="flex gap-[14px]">
      <button className="text-customLime-700 border-2 border-customLime-700 rounded-[16px] font-medium p-[10px]">
        Log in
      </button>
      <button className="bg-customLime-950 text-white rounded-[16px] font-medium p-[10px]">
        Sign up
      </button>
    </div>
  );
}
