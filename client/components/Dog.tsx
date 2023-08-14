interface Props {
  name: string
  breed: string
  superpower: string
}

function Dog(props: Props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <h3 className="dog-name">{props.name}</h3>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <div className="dog-pic">
          <img
            className="dog-img"
            src={`/images/${props.breed.toLowerCase()}.png`}
            alt={`${props.name}, a ${props.breed}`}
          />
        </div>
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}

export default Dog
