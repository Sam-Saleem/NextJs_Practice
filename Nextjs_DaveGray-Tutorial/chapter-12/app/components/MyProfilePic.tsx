import Image from "next/image";
export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto ">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black circle  rounded-full mx-auto mt-8"
        src="/images/profile-picture.png"
        width={200}
        height={200}
        alt="Profile Pic"
        priority={true}
      />
    </section>
  );
}
