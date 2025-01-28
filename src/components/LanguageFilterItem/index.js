// Write your code here
import './index.css'

const LanguagefiltersData = props => {
  const {
    key,
    languageFilterDetails,
    setActiveLanguageFilterId,
    isActive,
  } = props
  const {id, language} = languageFilterDetails
  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'
  const Onclickbtn = () => {
    setActiveLanguageFilterId(id)
  }
  return (
    <li className="list-style">
      <button onClick={Onclickbtn} type="button" className={btnClassName}>
        {language}
      </button>
    </li>
  )
}
export default LanguagefiltersData
