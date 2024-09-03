/* eslint-disable react/prop-types */
function Observation({ stepId, id, value, onChange }) {
	return (
		<div className="form--area">
			<label htmlFor={`${stepId}${id}`}>Observation</label>
			<textarea
				id={`${stepId}${id}`}
				cols="75"
				rows="2"
				placeholder="À remplir"
				value={value}
				onChange={(e) => onChange(e, { value: e.target.value, indexSub: id })}
			></textarea>
			<p>{value.length} / 190 caractères</p>
		</div>
	);
}

export default Observation;
