// Types
import { ECategories } from "@/types/apptypes"

interface props {
    category: ECategories
    setCategory: (category: ECategories) => void
}

const Filter = ({ category, setCategory }: props) => {
    const handleOnClick = () => {
        setCategory(category)
    }

    return (
        <button onClick={handleOnClick}>
            {category}
        </button>
    )
}

export default Filter