import SelectOptions from "./SelectOptions"
import stateLists from "../data/StateLists"

// eslint-disable-next-line react/prop-types
const NigeriaStates = ({ label }) => {
  return (
    <div>
        <SelectOptions 
            label={label}
            options={stateLists.map((state) => (
                {value: state.toLowerCase(), label: state}
            ))}
        />
    </div>
  )
}

export default NigeriaStates
