interface Props {
  text: string
}

function Subtitle(props: Props) {
  return (
    <h2 className = "subtitleText">{props.text}</h2>
  )
}

export default Subtitle