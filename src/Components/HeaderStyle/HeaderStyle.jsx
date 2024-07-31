export default function HeaderStyle({
  textColorClass,
  bgColorClassBefore,
  bgColorClassAfter,
}) {
  return (
    <div
      className={`w-fit relative before:content-[''] before:w-24 before:h-1 before:absolute ${bgColorClassBefore} before:top-2 before:-inset-28 after:content-[''] after:w-24 after:h-1 after:absolute ${bgColorClassAfter} after:top-2 after:inset-10`}>
      <i className={`fa-solid fa-star fa-xl ${textColorClass}`}></i>
    </div>
  );
}
