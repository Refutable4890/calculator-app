export default function Button ({ character, className, handleClick }) {

  return <>
    <button
      className={className}
      onClick={() => {
        if (handleClick) {
          handleClick(character)
        }
      }}>
      {character}
    </button>
  </>
}