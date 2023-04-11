export default function ThemeSwitcher ({ themes, setThemeIndex }) {
  return <>
    <button onClick={() => {
      setThemeIndex(t => (t + 1) % themes.length)
    }}>Switch</button>
  </>
}