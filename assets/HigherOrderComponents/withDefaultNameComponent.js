import withDefaultName from './withDefaultName'

const NameComponent = (props) => {
  return (
    <div>Name: {props.name}</div>
  )
}

const NameComponentWithDefaultFranz = withDefaultName(
  'Franz',
  NameComponent
)

export default NameComponentWithDefaultFranz
