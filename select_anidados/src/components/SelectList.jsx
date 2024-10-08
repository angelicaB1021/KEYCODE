export const SelectList = ({ title }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();
  const options = ["Cund", "Anti", "Cald"];

  return (
    <>
    <div className="selectEstilos">
    <label className="label-select" htmlFor={key}>{label}</label>
    <select name={key} id={key}>
        <option value="">Seleccione un {title}</option>
      </select>
    </div>   
    </>
  );
};