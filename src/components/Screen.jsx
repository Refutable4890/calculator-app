export default function Screen ({ display }) {
  return <>
    <div className="w-[335px] p-[25px] rounded-[10px] bg-[--screen-background-color] text-[--logo-screen-toggle-name-text-color] text-5xl text-right overflow-scroll">
      {display}
    </div>
  </>
}