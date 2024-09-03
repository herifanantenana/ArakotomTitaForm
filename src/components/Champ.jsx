/* eslint-disable react/prop-types */
function Champ({ stepId, id, title, subTitle, value, onChange }) {
	return (
		<div className="form--field">
			<label htmlFor={`field${stepId}${id}`}>
				{title && <h4>{title}</h4>}
				{subTitle && <p>{subTitle}</p>}
			</label>
			<input
				type="text"
				id={`field${stepId}${id}`}
				placeholder="À remplir"
				value={value}
				onChange={(e) => onChange(e, { value: e.target.value, indexSub: id })}
			/>
		</div>
	);
}

export default Champ;
