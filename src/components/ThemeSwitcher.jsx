export default function ThemeSwitcher ({ themes, themeIndex, setThemeIndex }) {
  function handleRadioChange (e) {
    if (e.target.name === 'themeIndex') {
      setThemeIndex(e.target.value)
    }
  }

  let themeRadioEl = []
  for (let i = 0; i < themes.length; i++) {
    const roundRule = i === 0 ? 'rounded-l-full' : i === themes.length - 1 ? 'rounded-r-full' : ''
    themeRadioEl.push(
      <div className="inline-block text-center">
        <h3>{i + 1}</h3>
        <label>
          <input className="hidden peer" type='radio' name='themeIndex' value={i.toString()} checked={themeIndex.toString() === i.toString()} onChange={handleRadioChange} />
          <div className={`${roundRule} p-[0.25em] bg-[--toggle-background-color] peer-checked:hidden`}>
            <div className="w-[1em] h-[1em] rounded-full bg-transparent"></div>
          </div>
          <div className={`hidden ${roundRule} p-[0.25em] bg-[--toggle-background-color] peer-checked:block`}>
            <div className="w-[1em] h-[1em] rounded-full bg-[--toggle-color]"></div>
          </div>
        </label>
      </div>
    )
  }

  return <>
    <div className="flex text-sm text-[--logo-screen-toggle-name-text-color]">
      <h2 className="mt-auto mr-[2em]">THEME</h2>
      {themeRadioEl}
    </div>
  </>
}